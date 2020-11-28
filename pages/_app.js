import "styles/globals.scss";

import styles from "styles/App.module.scss";

import Head from "next/head";
import { ThemeProvider } from "next-themes";
import Navbar from "components/Navbar";

function Nander({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="system">
      <Head>
        <title>Nander</title>
        <link rel="icon" id="favicon" href={`/favicon_dark.ico`} />
        {/* I prefer dark mode users :) */}
        <meta name="Description" content="homepage of nander."></meta>
      </Head>
      <div className={styles.app}>
        <Navbar path={Component.name} />
        <Component {...pageProps}></Component>
      </div>
    </ThemeProvider>
  );
}

export default Nander;
