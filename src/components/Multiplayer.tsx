import styles from "./Multiplayer.module.css";
import {
  FC,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { usePerfectCursor } from "../lib/hooks/cursor";

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

type InitMessage = {
  type: "init";
  payload: string[];
};

type Message = {
  id: string;
  message: JoinMessage | LeaveMessage | CursorMessage | InitMessage;
};

export function Cursor({ point }: { point: number[] }) {
  const rCursor = useRef<SVGSVGElement>(null);

  console.log(point);

  const animateCursor = useCallback((point: number[]) => {
    const elm = rCursor.current;
    if (!elm) return;
    elm.style.setProperty(
      "transform",
      `translate(${point[0]}px, ${point[1]}px)`
    );
  }, []);

  const onPointMove = usePerfectCursor(animateCursor);

  useLayoutEffect(() => onPointMove(point), [onPointMove, point]);

  return (
    <svg
      ref={rCursor}
      style={{
        position: "absolute",
        top: -15,
        left: -15,
        width: 32,
        height: 32,
      }}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_14_48)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22 15.5068L10 10L12.8382 23L16.3062 17.8654L22 15.5068Z"
          fill="#363B3E"
        />
        <path
          d="M22.1914 15.9687L23.2499 15.5302L22.2085 15.0523L10.2085 9.54556L9.29776 9.12761L9.51151 10.1066L12.3497 23.1066L12.5988 24.2477L13.2525 23.2799L16.6364 18.2698L22.1914 15.9687Z"
          stroke="white"
          strokeMiterlimit="16"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_14_48"
          x="5.59552"
          y="6.25523"
          width="21.9043"
          height="23.2402"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_14_48"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

/**
 * This component connects the client to a WebSocket
 * It will regularly send/receive cursor positions, which get synchronized by all clients
 */
const Multiplayer: FC = () => {
  const ws = useRef<WebSocket>();
  const [connected, setConnected] = useState(false);
  const cursorSent = useRef(0);
  const [multiplayerCursors, setMultiplayerCursors] = useState<{
    [id: string]: number[];
  }>({});

  // connection
  useEffect(() => {
    ws.current = new WebSocket(import.meta.env.VITE_WS_ENDPOINT);

    // event needs to be handled right after the initialization because the init message is sent right away
    ws.current.onmessage = (e) => {
      const data = JSON.parse(e.data) as Message;
      console.log(data);

      const id = data.id;

      switch (data.message.type) {
        case "init": {
          const ids = data.message.payload;
          if (ids)
            setMultiplayerCursors((prev) => {
              const newCursors = { ...prev };
              for (const id of ids) {
                newCursors[id] = [0, 0];
              }
              return newCursors;
            });
          break;
        }
        case "join": {
          console.log(`User ${id} joined`);
          // add cursor
          setMultiplayerCursors((prev) => ({ ...prev, [id]: [0.5, 0.5] }));
          break;
        }
        case "leave": {
          console.log(`User ${id} left`);
          // remove cursor
          setMultiplayerCursors((prev) => {
            const { [id]: _, ...rest } = prev;
            return rest;
          });
          break;
        }
        case "cursor": {
          const { x, y } = data.message.payload;
          // update cursor
          setMultiplayerCursors((prev) => ({
            ...prev,
            // convert relative to pixel coordinates
            [id]: [
              x * document.body.scrollWidth,
              y * document.body.scrollHeight,
            ],
          }));
          break;
        }
      }
    };

    ws.current.onopen = () => {
      setConnected(true);
    };
    ws.current.onclose = () => {
      setConnected(false);
      setMultiplayerCursors({});
    };

    return () => {
      ws.current?.close();
    };
  }, []);

  // read cursor position
  useEffect(() => {
    if(!connected) return;
    const handleMouseMove = (e: MouseEvent) => {
      // only send position every 100ms
      if (Date.now() - cursorSent.current < 80) return;
      ws.current?.send(
        JSON.stringify({
          type: "cursor",
          payload: {
            // send cursor position relative to the viewport
            x: (e.pageX / document.body.scrollWidth).toFixed(4),
            y: (e.pageY / document.body.scrollHeight).toFixed(4),
          },
        })
      );
      cursorSent.current = Date.now();
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [connected]);

  return (
    <>
      {Object.keys(multiplayerCursors).length !== 0 && (
        <div>
          <div className={styles.wrapper}>
            <div className={styles.container}>
              <p>
                {Object.keys(multiplayerCursors).length + 1} users connected
              </p>
            </div>
          </div>
          <div>
            {Object.entries(multiplayerCursors).map(([id, point]) => (
              <Cursor key={id} point={point} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Multiplayer;
