import styles from "@styles/Credits.module.scss";

export default function Credits() {
  return (
    <main className={styles.container}>
      <p className={styles.text}>
        Many thanks to{" "}
        <code>
          <a
            target="_blank"
            href="https://codepen.io/johanmouchet"
            style={{ textDecoration: "none" }}
          >
            @johanmouchet
          </a>
        </code>{" "}
        for the CSS cat, which I modified a little.
      </p>
      <p></p>
    </main>
  );
}
