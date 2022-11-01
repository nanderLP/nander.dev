import { ThreeElements } from "@react-three/fiber";
import { useRef, useState } from "react";

const Box = (props: ThreeElements["mesh"]) => {
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, hover] = useState(false);
  /*useFrame((state, delta) => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });*/
  return (
    <mesh
      {...props}
      ref={ref}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[4, 4, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
};

export default Box;
