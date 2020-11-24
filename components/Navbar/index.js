import styles from "./Navbar.module.scss";
import { useTheme } from "next-themes";
import Link from "next/link";

import { Music, Moon, Sun, Info, Mail, Home } from "react-feather";

export default function Navbar() {
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
      <div className={styles.navItem}>
        <Link href="/">
          <a className={styles.a}>
            <Home size="2rem" />
          </a>
        </Link>
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
        <Link href="/music">
          <a className={styles.a}>
            <Music size="2rem" />
          </a>
        </Link>
      </div>
      <div className={styles.navItem}>
        <a href="mailto:nander@nander.dev" className={styles.a}>
          <Mail size="2rem" />
        </a>
      </div>
      <div className={styles.navItem}>
        <Link href="/credits">
          <a className={styles.a}>
            <Info size="2rem" />
          </a>
        </Link>
      </div>
    </nav>
  );
}
