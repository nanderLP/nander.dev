import styles from "./Navbar.module.scss";
import { useTheme } from "next-themes";
import Link from "next/link";

import { Moon, Sun, Info, Mail, Home, GitHub } from "react-feather";

export default function Navbar(props) {
  const { path } = props;

  const { theme, setTheme } = useTheme();
  function toggleTheme() {
    if (theme == "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.navItems}>
        <div className={styles.navItem}>
          <Link href="/">
            <a className={styles.a}>
              <Home size="2rem" />
            </a>
          </Link>
        </div>
        {/*<div className={styles.navItem}>
          <Link href="/music">
            <a className={styles.a}>
              <Music size="2rem" />
            </a>
          </Link>
          </div>*/}
        <div className={styles.navItem}>
          <a
            href="https://github.com/nanderLP"
            target="_blank"
            rel="noreferrer"
            className={styles.a}
          >
            <GitHub size="2rem" />
          </a>
        </div>
        <div className={styles.navItem}>
          <a
            href="mailto:nander@nander.dev"
            target="_blank"
            rel="noreferrer"
            className={styles.a}
          >
            <Mail size="2rem" />
          </a>
        </div>
        <div className={styles.navItem}>
          <div
            onClick={toggleTheme}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            {theme == "dark" ? <Moon size="2rem" /> : <Sun size="2rem" />}
          </div>
        </div>
        <div className={styles.navItem}>
          <Link href="/credits">
            <a className={styles.a}>
              <Info size="2rem" />
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
