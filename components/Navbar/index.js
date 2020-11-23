import styles from "./Navbar.module.scss";
import NavbarItem from "./NavBarItem";
import { useTheme } from "next-themes";

import { Music, Moon, Sun, Info, Mail } from "react-feather";

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
      <div>
        <button
          onClick={toggleTheme}
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          {theme == "dark" ? (
            <Moon size="2rem" />
          ) : (
            <Sun size="2rem" />
          )}
        </button>
      </div>
      <NavbarItem route="/music">
        <Music size="2rem" />
      </NavbarItem>
      <div>
        <a href="mailto:nander@nander.dev">
          <Mail size="2rem" />
        </a>
      </div>
      <NavbarItem route="/music">
        <Info size="2rem" />
      </NavbarItem>
    </nav>
  );
}
