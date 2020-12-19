import Cat from "../Cat/Cat";
import Image from "next/image";
import styles from "./Picture.module.scss";

export default function Picture() {
  return (
    <div>
      <Cat />
      <Image
        src="https://github.com/nanderLP.png"
        alt="GitHub Profile Picture"
        width={200}
        height={200}
        priority="true"
        className={styles.img}
      />
    </div>
  );
}
