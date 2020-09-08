import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import LinkItem from "../weather-page/link-item/link-item";
import TodayWeather from "../pages/today-weather/today-weather";
import TomorrowWeather from "../pages/tomorrow-weather/tomorrow-weather";

import './weather-page.sass'

export default class WeatherPage extends Component {
  state = {
    links: [
      {text: 'today', color: '#8e24aa', classes: 'first', url: '/weather/today/'},
      {text: 'tomorrow', color: '#3949ab', classes: 'second', url: '/weather/tomorrow/'},
      {text: '10 days', color: '#1e88e5', classes: 'third', url: '/weather/10-days/'},
    ]
  }

  render() {
    const {city} = this.props
    const {links} = this.state

    const btnLinks = links.map(item => <LinkItem text={item.text} color={item.color} classes={item.classes} url={item.url}/>)

    return (
        <View elems={btnLinks}/>
    )
  }
}

const View = ({elems}) => {
  return (
      <div className="weather-page">
        <h1 className="weather-page__title weather-page__city-name">Москва</h1>

    <Router>
        <div className="weather-page__links">
          {elems}
        </div>

        <div className="weather-content">
            <Switch>
              <Route path="/weather/today/" component={TodayWeather} />
              <Route path="/weather/tomorrow/" component={TomorrowWeather} />
            </Switch>
        </div>
    </Router>

      </div>
  )
}
