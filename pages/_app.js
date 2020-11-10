import "../styles/globals.scss";
import { ThemeProvider } from "next-themes";

function Nander({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="system">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default Nander;
