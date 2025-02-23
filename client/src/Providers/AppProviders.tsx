import React from "react";
import { OptionsProvider } from "../context/OptionsContext";
import { TasksProvider } from "../context/TasksContext";
import { UserProvider } from "../context/UserContext";
import { WeatherProvider } from "../context/WeatherContext";
import { BaseProvider } from "../Providers/BaseProvider";
import { ApiProvider } from "./ApiProvider";

export const AppProviders: React.FC<BaseProvider> = ({ children }) => {
    return (
        <ApiProvider>
            <WeatherProvider>
                <UserProvider>
                    <TasksProvider>
                        <OptionsProvider>{children}</OptionsProvider>
                    </TasksProvider>
                </UserProvider>
            </WeatherProvider>
        </ApiProvider>
    );
};
