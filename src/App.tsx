import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useAtom } from "jotai";
import { lazy, Suspense } from "react";
import { readyAtom } from "./lib/state/3D";

const Multiplayer = lazy(() => import("./components/Multiplayer"));
const Environment = lazy(() => import("./components/3D"));
const Interface = lazy(() => import("./components/2D"));

function App() {
  const [loaded] = useAtom(readyAtom);

  return (
    <Canvas>
      <Suspense fallback={null}>
        <Multiplayer />
      </Suspense>
      <ScrollControls
        damping={5}
        distance={1}
        pages={loaded ? 2 : 0}
        enabled={loaded}
      >
        <Suspense fallback={null}>
          <Environment />
        </Suspense>
        <Interface />
      </ScrollControls>
    </Canvas>
  );
}

export default App;
