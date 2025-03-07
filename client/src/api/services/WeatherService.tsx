import { Weather } from "../../Interfaces/WeatherInterface";
import { WeatherClient } from "../../api/clients/WeatherClient";

const WeatherService = {
    async getStaticWeather(params: Partial<Weather>): Promise<Weather | null> {
      try {
        const response = await WeatherClient.get("", { params });
        return response.data;
      } catch (e) {
        console.error(e);
        return null;
      }
    },
  };
  
  export default WeatherService;