import styles from "../styles/Cat.module.scss";

export default function Cat() {
  return (
    <div className={styles.container}>
      <div className={styles.cat}>
        <div className={`${styles.ear} ${styles.earLeft}`}></div>
        <div className={`${styles.ear}  ${styles.earRight}`}></div>
        <div className={styles.face}>
          <div className={`${styles.eye} ${styles.eyeLeft}`}>
            <div className={styles.eyePupil}></div>
          </div>
          <div className={`${styles.eye} ${styles.eyeRight}`}>
            <div className={styles.eyePupil}></div>
          </div>
          <div className={styles.muzzle}></div>
        </div>
      </div>
    </div>
  );
}
