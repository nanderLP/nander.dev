import { FC, ReactNode, useEffect, useRef, useState } from "react";
import "./App.css";
import { Canvas, MeshProps, useFrame } from "@react-three/fiber";
import { animate } from "motion";

const Box: FC<MeshProps & { color?: string }> = ({ color, ...props }) => {
  // access to the mesh object
  const ref = useRef<THREE.Mesh>(null!);
  const factor = Math.random();

  useFrame(() => {
    // change rotation
    ref.current.rotation.x += factor * 0.02;
    ref.current.rotation.y += factor * 0.02;
    ref.current.rotation.z += factor * 0.02;
  });

  return (
    <mesh ref={ref} {...props}>
      <boxGeometry></boxGeometry>
      <meshStandardMaterial color={color} opacity={0.5} transparent />
    </mesh>
  );
};

const Intro: FC<{ onIntroPlayed: Function }> = ({ onIntroPlayed }) => {
  const startAnimationFlow = () => {
    animate(
      "#intro",
      {
        width: "40%",
        height: "25%",
        borderRadius: "5rem",
      },
      {
        easing: [0, 1, 0.01, 1],
        duration: 2,
      }
    );
    onIntroPlayed(true);
  };

  return (
    <div
      id="intro"
      onClick={startAnimationFlow}
      className="fixed bg-dark-200 w-full h-full flex items-center justify-center z-10"
    >
      <h1 className="text-9xl">Nander</h1>
    </div>
  );
};

const Background: FC = () => {
  return (
    <div className="w-full h-full ">
      <div id="background" className="w-full h-full">
        <p className="fixed">haiwdh</p>
        <div
          id="bg-blur-overlay"
          className="w-50% h-50% bg-opacity-50 bg-white h-full backdrop-blur-3xl"
        ></div>
      </div>
    </div>
  );
};

function App() {
  const [introPlayed, setIntroPlayed] = useState(false);

  return (
    <>
      <Intro onIntroPlayed={setIntroPlayed} />
      <Background />
    </>
  );
}

export default App;
