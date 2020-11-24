import Cat from "../Cat/Cat";
import Image from "next/image";

export default function Picture() {
  return (
    <div>
      <Cat />
      <Image
        src="https://github.com/nanderLP.png"
        alt="GitHub Profile Picture"
        width="200px"
        height="200px"
        priority="true"
      />
    </div>
  );
}
