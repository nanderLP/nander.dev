import { FC, lazy } from "react";
import Box from "./objects/Box";
import { Scroll } from "@react-three/drei";
import Camera from "./components/Camera";
import { degToRad } from "three/src/math/MathUtils";

const Model = lazy(() => import("./models/Octicon"));

const Environment: FC = () => {
  return (
    <Scroll>
      <Camera />
      <ambientLight />
      <Box position={[3, -6, -5]}></Box>
      <Model position={[-15, -5, -15]} rotation={[degToRad(90), 0, 0]}></Model>
    </Scroll>
  );
};

export default Environment;
