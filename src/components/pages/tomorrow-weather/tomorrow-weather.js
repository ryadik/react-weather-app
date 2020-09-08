import React, {Component} from 'react'

import {getForeCastWeatherData} from "../../../service/getWeatherData";

import './tomorrow-weather.sass'

class TomorrowWeather extends Component{
  state = {
    tomorrowWeather: []
  }

  queryForeCastWeather = () => {
    getForeCastWeatherData(this.props.cityName)
        .then(res => {
              const list = res.list
              const newArr = []
              list.forEach((item, i) => {
                if (i > 7 && i < 16) {
                  newArr.push(
                      <ListItem time={item.dt_txt.split(' ')[1]}
                                temp={Math.round(item.main.temp -273.15)}
                                wind={item.wind.speed}
                                windDirection={item.wind.deg}
                                humidity={item.main.humidity}
                                weather={item.weather[0].main}
                                weatherIcon={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                      />)
                }
              })

              return newArr
            }
        )
        .then(arr => this.setState({tomorrowWeather: arr}))
  }

  componentDidMount() {
    this.queryForeCastWeather()
  }

  componentWillUnmount() {
    this.setState({tomorrowWeather: []})
  }


  render() {
    return (
        <div className="tomorrow-weather">
          <div className="weather-list">
            {this.state.tomorrowWeather}
          </div>
        </div>
    )
  }
}

const ListItem = ({time, temp, wind, windDirection, humidity, weather, weatherIcon}) => {
  return (
      <div className="weather-list__item">
        <div className="weather-list__item-text">
          <div className="time">
            <span className="time">{time}</span>
          </div>
          <div className="data">
            <img src={weatherIcon} alt="weather-icon" title={weather}/>
            <span className="temp">{temp}&deg;C</span>
            <span className="wind">{wind} M/S</span>
            <span className="wind-direction">{windDirection}&deg;</span>
            <span className="humidity">{humidity}%</span>
          </div>
        </div>
      </div>
  )
}

export default TomorrowWeather
