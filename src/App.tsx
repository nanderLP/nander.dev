import "./App.css";
import Chip from "./components/Chip";
import Multiplayer from "./components/Multiplayer";

function App() {
  return (
    <>
      <Multiplayer />
      <div id="hero" className="prose">
        <div id="hero-content">
          <h1>Nander</h1>
          <div id="chips">
            <Chip>Web Developer</Chip>
            <Chip>Interface Designer</Chip>
            <Chip>Student</Chip>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
