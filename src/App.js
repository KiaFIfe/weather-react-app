import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App-Container">
      <div className="Container">
        <h1 className="m-4">React Weather</h1>
<Weather/>
        <footer>
          <p className="m-5">This project was cooded by Likia Fife</p>
          <a
            href="https://github.com/KiaFIfe/React-weather-app"
            target="_blank"
          >
            Open sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
