import { useState, useEffect } from "react";
import "../CSS/index.css";

function Weathercomponent() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const getPosition = () =>
      new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
          reject(new Error("Geolocation not available"));
          return;
        }
        navigator.geolocation.getCurrentPosition(resolve, reject, { timeout: 10000 });
      });

    const fetchWeather = async () => {
      let lat, lon;
      try {
        const pos = await getPosition();
        lat = pos.coords.latitude;
        lon = pos.coords.longitude;
        console.log("GEO SUCCESS:", lat, lon);
      } catch (err) {
        console.warn("Geolocation failed, falling back to IP lookup:", err);
        try {
          const res = await fetch("https://ipapi.co/json/");
          const ipData = await res.json();
          lat = ipData.latitude;
          lon = ipData.longitude;
        } catch (ipErr) {
          console.warn("IP lookup failed, using default coords:", ipErr);
          lat = 37.7749;
          lon = -122.4194;
        }
      }

      const weatherApiKey = "YOUR_OPENWEATHERMAP_API_KEY_HERE"; // Replace with your OpenWeatherMap API key
      const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric`;

      try {
        const resp = await fetch(apiURL);
        const data = await resp.json();
        if (resp.ok) setWeather(data);
        else console.error("Weather API error:", data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="weather">
      {weather?.main?.temp != null ? <h3>{Math.round(weather.main.temp)}°C</h3> : <h3>—</h3>}
    </div>
  );
}

export default Weathercomponent;
