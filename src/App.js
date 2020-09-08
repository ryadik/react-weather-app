import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import MainPage from "./components/main-page/main-page";
import WeatherPage from "./components/weather-page/weather-page";

import './App.sass';

class App extends Component{
  state= {
    cityName: ''
  }

  changeCityName = (text) => this.setState({cityName: text})

  render() {
    return (
        <div className="app">
          <div className="app__bg"></div>
          <Router>
            <Switch>
              <Route exact path="/" component={() => <MainPage changeCityName={this.changeCityName} />}/>
              <Route path="/weather" component={() => <WeatherPage cityName={this.state.cityName}/>}/>
            </Switch>
          </Router>
        </div>
    )
  }
}

export default App;
