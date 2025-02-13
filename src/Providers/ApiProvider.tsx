import React, { createContext } from "react";
import ApiClient from "../api/ApiClient";

export const ApiContext = createContext(ApiClient);

export const ApiProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <ApiContext.Provider value={ApiClient}>{children}</ApiContext.Provider>;
};
