import styles from "./Environment.module.css";
import { Canvas, useFrame } from "@react-three/fiber";
import { FC, useEffect, useRef } from "react";
import Box from "./objects/Box";
import { useProgress, FirstPersonControls, Scroll } from "@react-three/drei";
import { useAtom } from "jotai";
import { readyAtom } from "../../lib/state/3D";
import Camera from "./components/Camera";
import { Model } from "./models/Octicon";
import { degToRad } from "three/src/math/MathUtils";

const Environment: FC = () => {
  const { active, progress, errors, item, loaded, total } = useProgress();
  const [ready, setReady] = useAtom(readyAtom);

  useEffect(() => {
    if (loaded === total) {
      setTimeout(() => setReady(true), 1000);
    }
  }, [loaded, total, setReady]);

  return (
    <Scroll>
      <Camera />
      <ambientLight/>
      <Box></Box>
      <Model
        position={[-15, 5, -15]}
        rotation={[degToRad(90), 0, 0]}
      ></Model>
    </Scroll>
  );
};

export default Environment;
