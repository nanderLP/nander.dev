import { FC, useEffect, useRef, useState } from "react";

type JoinMessage = {
  type: "join";
  payload: null;
};

type LeaveMessage = {
  type: "leave";
  payload: null;
};

type CursorMessage = {
  type: "cursor";
  payload: {
    x: number;
    y: number;
  };
};

type Message = {
  id: string;
  message: JoinMessage | LeaveMessage | CursorMessage;
};

/**
 * This component connects the client to a WebSocket
 * It will regularly send/receive cursor positions, which get synchronized by all clients
 */
const Multiplayer: FC = () => {
  const [connected, setConnected] = useState(false);
  const ws = useRef<WebSocket>();
  const cursor = useRef({ x: 0, y: 0 });

  // connection
  useEffect(() => {
    ws.current = new WebSocket(import.meta.env.VITE_WS_ENDPOINT);
    ws.current.onopen = () => {
      setConnected(true);
    };
    ws.current.onclose = () => {
      setConnected(false);
    };

    return () => {
      ws.current?.close();
    };
  }, []);

  // read cursor position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursor.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // send cursor position
  useEffect(() => {
    if (!connected) return;
    const interval = setInterval(() => {
      ws.current?.send(
        JSON.stringify({
          type: "cursor",
          payload: {
            x: cursor.current.x,
            y: cursor.current.y,
          },
        })
      );
    }, 250);
    return () => clearInterval(interval);
  }, [connected]);

  // receive cursor position
  useEffect(() => {
    if (!connected) return;
    ws.current?.addEventListener("message", (e) => {
      const data = JSON.parse(e.data) as Message;
      console.log(data);

      const id = data.id;

      switch (data.message.type) {
        case "join": {
          console.log(`User ${id} joined`);
          // create new cursor
          const cursor = document.createElement("div");
          cursor.className = "cursor";
          cursor.setAttribute("data-id", id);
          document.body.appendChild(cursor);
          break;
        }
        case "leave": {
          console.log(`User ${id} left`);
          // remove cursor
          const cursor = document.querySelector(`[data-id="${id}"]`);
          cursor?.remove();
          break;
        }
        case "cursor": {
          const { x, y } = data.message.payload;
          const cursor = document.getElementById("cursor");
          if (cursor) {
            cursor.style.left = `${x}px`;
            cursor.style.top = `${y}px`;
          }
          break;
        }
      }
    });
  }, [connected]);

  return <div>{connected ? "Connected" : "Not connected"}</div>;
};

export default Multiplayer;
