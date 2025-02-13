import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavComponent from "./components/NavComponent";
import MainContent from "./components/MainContent";
import { AppProviders } from "./Providers/AppProviders";

function App() {
    return (
        <AppProviders>
            <Router>
                <NavComponent />
                <MainContent></MainContent>
            </Router>
        </AppProviders>
    );
}

export default App;
