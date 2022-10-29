import styles from "./App.module.css";
import Chip from "./components/Chip";
import Multiplayer from "./components/Multiplayer";
import Skills from "./components/Skills";
import Tooltip from "./components/Tooltip";

function App() {
  return (
    <>
      <Multiplayer />
      <div className={styles.sections}>
        <section className={styles.intro}>
          <div className={styles.introContent}>
            <h1>Nander</h1>
            <div className={styles.chips}>
              <Chip>Web Developer</Chip>
              <Chip>Interface Designer</Chip>
              <Chip>Student</Chip>
            </div>
            <p className={styles.introduction}>
              Hey, and welcome to my website! I'm Nander, a young web developer
              and wannabe designer from Germany. Besides coding, I attend the{" "}
              <Tooltip
                content={
                  <p x-label="true">
                    Highest secondary school in Germany, focused on academic
                    learning
                  </p>
                }
              >
                <i>Gymnasium</i>
              </Tooltip>{" "}
              and play games.
            </p>
          </div>
        </section>
        <section className={styles.skills}>
          <h2>Skills</h2>
          <Skills />
        </section>
      </div>
    </>
  );
}

export default App;
