import axios from "axios";
import { Weather } from "../Interfaces/WeatherInterface";

const ApiClient = axios.create({
    baseURL: "https://api.open-meteo.com/v1/forecast",
    headers: {
        "Content-Type": "application/json",
    },
});

const WeatherService = {
    async getStaticWeather(weather:Weather): Promise<Weather | null>{
        try{
            const response = await ApiClient.get("");
            return response.data;
        }
        catch (e){
            console.error(e);
            return null;
        }
    }
}