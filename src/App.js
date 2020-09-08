import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import MainPage from "./components/main-page/main-page";
import WeatherPage from "./components/weather-page/weather-page";

import './App.sass';

function App() {
  return (
      <div className="app">
        <div className="app__bg"></div>
        <Router>
          <Switch>
            <Route exact path="/" component={MainPage}/>
            <Route exact path="/weather" component={WeatherPage}/>
          </Switch>
        </Router>
      </div>
  )
}

export default App;
