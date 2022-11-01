import styles from "./styles/Interface.module.css";
import { FC, useEffect, useState } from "react";
import { useAtom } from "jotai";
import { motionAtom, readyAtom } from "../../lib/state/3D";
import { animate } from "motion";
import Debug from "./components/Debug";
import { Scroll, useProgress } from "@react-three/drei";

const Interface: FC = () => {
  const [fontWeight, setWeight] = useState(300);

  const { active, progress, loaded, total } = useProgress();
  const [_, setReady] = useAtom(readyAtom);

  useEffect(() => {
    console.log(progress, loaded, total);

    // stuff is actually done loading
    if (!active && progress === 100 && loaded === total) {
      console.log("READY");

      // animate fontWeight to 900
      animate(
        (p) => {
          setWeight(300 + p * 600);
        },
        {
          duration: 1,
        }
      ).finished.then(() => setReady(true));
    }
  }, [active, progress, loaded, total]);

  return (
    <Scroll html>
      <div className={styles.container}>
        <h1 style={{ fontWeight }}>Nander</h1>
        <Debug />
      </div>
    </Scroll>
  );
};

export default Interface;
