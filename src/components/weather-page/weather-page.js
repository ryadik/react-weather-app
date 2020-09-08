import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import LinkItem from "../weather-page/link-item/link-item";
import TodayWeather from "../pages/today-weather/today-weather";
import TomorrowWeather from "../pages/tomorrow-weather/tomorrow-weather";
import FivedayWeather from "../pages/fiveday-weather/fiveday-weather";

import './weather-page.sass'

export default class WeatherPage extends Component {
  state = {
    links: [
      {text: 'today', color: '#8e24aa', classes: 'first', url: '/weather/today/'},
      {text: 'tomorrow', color: '#3949ab', classes: 'second', url: '/weather/tomorrow/'},
      {text: '5 days', color: '#1e88e5', classes: 'third', url: '/weather/5-days/'},
    ]
  }

  render() {
    const {cityName} = this.props
    const {links} = this.state

    console.log(cityName)

    const btnLinks = links.map(item => <LinkItem text={item.text} color={item.color} classes={item.classes} url={item.url}/>)

    return (
        <View elems={btnLinks} cityName={cityName}/>
    )
  }
}

const View = ({elems, cityName}) => {
  return (
      <div className="weather-page">
        <h1 className="weather-page__title weather-page__city-name">{cityName}</h1>

    <Router>
        <div className="weather-page__links">
          {elems}
        </div>

        <div className="weather-content">
            <Switch>
              <Route path="/weather/today/" component={() => <TodayWeather cityName={cityName} />} />
              <Route path="/weather/tomorrow/" component={() => <TomorrowWeather cityName={cityName} />} />
              <Route path="/weather/5-days/" component={() => <FivedayWeather cityName={cityName} />} />
            </Switch>
        </div>
    </Router>

      </div>
  )
}
