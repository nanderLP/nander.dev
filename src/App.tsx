import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useAtom } from "jotai";
import { Suspense } from "react";
import Interface from "./components/2D";
import Environment from "./components/3D";
import Multiplayer from "./components/Multiplayer";
import { readyAtom } from "./lib/state/3D";

function App() {
  const [loaded] = useAtom(readyAtom);

  return (
    <>
      <Multiplayer />
      <Canvas>
        <ScrollControls damping={5} distance={1} pages={loaded ? 2 : 0} enabled={loaded}>
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
