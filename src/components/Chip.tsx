import styles from "./Chip.module.css";
import { FC, ReactNode } from "react";

const Chip: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={styles.chip}>
      <p x-label="true">{children}</p>
    </div>
  );
};

export default Chip;
