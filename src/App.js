import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App-Container">
      <div className="Container">
        <h1 className="m-4 me-1">React Weather</h1>
        <Weather city="Tokyo" />
        <footer>
          <p className="m-5">This project was coded by Likia Fife</p>
          <a
            href="https://github.com/KiaFIfe/React-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
