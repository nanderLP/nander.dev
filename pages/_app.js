import "../styles/globals.scss";
import { ThemeProvider } from "next-themes";

function Nander({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default Nander;
