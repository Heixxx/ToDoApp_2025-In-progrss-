// App.tsx (zmodyfikowany)
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavComponent from './components/Nav/NavComponent';
import MainContent from './components/Home/MainContent';
// import Vantajs from './assets/Vantajs';
import { AppProviders } from './Providers/AppProviders';
import './App.css';

function App() {
  return (
    <AppProviders>
      <Router>
        {/* <Vantajs> */}
          <div className="content">
            <NavComponent />
            <MainContent />
          </div>
        {/* </Vantajs> */}
      </Router>
    </AppProviders>
  );
}

export default App;