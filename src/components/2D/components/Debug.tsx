import { useAtom } from "jotai";
import { FC, useEffect } from "react";
import { debugAtom } from "../../../lib/state/3D";

const Debug: FC = () => {
  const [messages] = useAtom(debugAtom);

  useEffect(() => {
    console.log(messages);
  }, [messages]);

  return (
    <div>
      {Object.entries(messages).map(([k, v]) => {
        return (
          <div key={k}>
            <p>{k}</p>
            <ul>
              {Object.entries(v).map(([k, v], i) => {
                return (
                  <span key={i}>
                    {k}: {v?.toString()}
                  </span>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Debug;
