import axios from "axios";
import React, { useState, useEffect, createContext } from "react";
import {BaseProvider} from '../Providers/BaseProvider';

export const WeatherContext = createContext({});

const params = {
    latitude: 50.0413,
    longitude: 21.999,
    hourly: "temperature_2m",
    timezone: "Europe/Berlin",
    forecast_days: 14,
};

export const WeatherProvider: React.FC<BaseProvider> = ({ children }) => {
    const [weather, setWeather] = useState("");
    useEffect(() => {
        const fechtWeather = async () => {
            const response = await axios
                .get("https://api.open-meteo.com/v1/forecast", { params })
                .then((response) => setWeather(response.data))
                .catch((e) => console.log(e));
        };
        fechtWeather()
    }, []);

    return (
        <WeatherContext.Provider value={weather}>
            {children}
        </WeatherContext.Provider>
    );
};
