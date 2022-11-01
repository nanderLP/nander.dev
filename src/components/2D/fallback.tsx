import styles from "./styles/Interface.module.css";
import { FC } from "react";

const FallbackInterface: FC = () => {
  return (
    <div className={styles.container}>
      <h1 style={{ fontWeight: 300 }}>Nander</h1>
    </div>
  );
};

export default FallbackInterface;