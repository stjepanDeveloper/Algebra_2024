import "./App.css";
import { CurrentWeather } from "./components";
import { WeatherForecast } from "./components";

function App() {
  return (
    <div>
      <CurrentWeather />
      <WeatherForecast />
    </div>
  );
}

export default App;
