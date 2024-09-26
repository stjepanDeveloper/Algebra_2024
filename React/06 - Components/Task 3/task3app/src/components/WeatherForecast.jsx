import { Component } from "react";

export default class WeatherForecast extends Component {
  render() {
    const forecastData = [
      { day: "Monday", high: 24, low: 18, conditions: "Sunny" },
      { day: "Tuesday", high: 27, low: 20, conditions: "Clear" },
      { day: "Wednesday", high: 25, low: 19, conditions: "Partly Cloudy" },
      { day: "Thursday", high: 23, low: 17, conditions: "Rainy" },
      { day: "Friday", high: 26, low: 20, conditions: "Sunny" },
    ];
    return (
      <div>
        <h1>Class component: 5 Day Weather Forecast</h1>

        {forecastData.map((obj) => (
          <table>
            <th>Day</th>
            <th>High</th>
            <th>Low</th>
            <th>Conditions</th>
            <tr>
              <td>{obj.day}</td>

              <td>{obj.high}</td>

              <td>{obj.low}</td>

              <td>{obj.conditions}</td>
            </tr>
          </table>
        ))}
      </div>
    );
  }
}
