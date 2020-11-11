import Cat from "../Cat";
import Image from "next/image";
import styles from "../../styles/Picture.module.scss";

export default function Picture() {
  return (
    <div>
      <Cat />
      <Image
        src="https://github.com/nanderLP.png"
        alt="GitHub Profile Picture"
        width="200px"
        height="200px"
      />
    </div>
  );
}
