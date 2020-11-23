import "styles/globals.scss";

import styles from "styles/App.module.scss"

import { ThemeProvider } from "next-themes";
import Navbar from "components/Navbar";

function Nander({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="system">
      <div className={styles.app}>
        <Navbar />
        <Component {...pageProps}></Component>
      </div>
    </ThemeProvider>
  );
}

export default Nander;
