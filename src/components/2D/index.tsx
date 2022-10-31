import styles from "./styles/Interface.module.css";
import { FC, useEffect, useState } from "react";
import { useAtom } from "jotai";
import { motionAtom, mouseAtom, readyAtom } from "../../lib/state/3D";
import { animate } from "motion";
import Debug from "./components/Debug";
import { introAnimation } from "../../lib/animations";
import { Scroll, ScrollControls } from "@react-three/drei";

const Interface: FC = () => {
  const [environmentReady] = useAtom(readyAtom);
  const [motion] = useAtom(motionAtom);
  const [fontWeight, setWeight] = useState(300);

  useEffect(() => {
    if (environmentReady) {
      console.log(motion);

      // animate fontWeight to 900
      animate(
        (p) => {
          setWeight(300 + p * 600);
        },
        {
          duration: 1,
        }
      ).finished.then(() => introAnimation());
    }
  }, [environmentReady]);
  return (
      <Scroll html className={styles.container}>
        <h1 style={{ fontWeight }}>Nander</h1>
        <Debug />
        <p>Motion: {motion !== null ? motion.toString() : "waiting..."}</p>
      </Scroll>
  );
};

export default Interface;
