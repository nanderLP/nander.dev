import "styles/globals.scss";

import styles from "styles/App.module.scss";

import Head from "next/head";
import { ThemeProvider, useTheme } from "next-themes";
import Navbar from "components/Navbar";
// import { useEffect, useState } from "react";

function Nander({ Component, pageProps }) {
  /* const { theme } = useTheme();

  useEffect(() => {
    console.log(theme); // undefined
    document
      .getElementById("favicon")
      .setAttribute("href", `/favicon_${theme}.ico`);
  }); */ // TODO: variable favicon selection based on theme

  return (
    <ThemeProvider defaultTheme="system">
      <Head>
        <title>Nander</title>
        <link rel="icon" id="favicon" href={`/favicon_dark.ico`} />
        {/* I prefer dark mode users :) */}
        <meta name="Description" content="homepage of nander."></meta>
      </Head>
      <div className={styles.app}>
        <Navbar />
        <Component {...pageProps}></Component>
      </div>
    </ThemeProvider>
  );
}

export default Nander;
