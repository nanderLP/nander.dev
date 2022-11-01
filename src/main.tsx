import { lazy, StrictMode, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./assets/index.css";
import FallbackInterface from "./components/2D/fallback";

const App = lazy(() => import("./App"));

// fallback sadly flashes on load on the transition between the fallback and the actual content
// we will determine if it's necesary to use the fallback or not, because it shows up a lot quicker
// than the actual content
let fallback = null;

if ("connection" in navigator) {
  // experimental API, seems like VSCode doesn't know it yet
  // https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API
  // @ts-ignore ^
  switch (navigator.connection.effectiveType) {
    case "slow-2g":
    case "2g":
    case "3g":
      fallback = <FallbackInterface />;
      break;
  }
}

ReactDOM.createRoot(document.getElementById("💜") as HTMLElement).render(
  <StrictMode>
    <Suspense fallback={fallback}>
      <App />
    </Suspense>
  </StrictMode>
);
