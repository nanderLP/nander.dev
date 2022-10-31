import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Interface from "./components/2D";
import Environment from "./components/3D";
import Multiplayer from "./components/Multiplayer";

function App() {
  return (
    <>
      <Multiplayer />
      <Canvas>
        <ScrollControls damping={6} pages={2}>
          <Suspense fallback={null}>
            <Environment />
          </Suspense>
          <Interface />
        </ScrollControls>
      </Canvas>
    </>
  );
}

export default App;
