import axios from "axios";

export const WeatherClient = axios.create({
  baseURL: "https://api.open-meteo.com/v1/forecast",
  headers: {
    "Content-Type": "application/json",
  },
});
