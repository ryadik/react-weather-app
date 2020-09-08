import React, {Component} from 'react'

import {getForeCastWeatherData, getCurrentWeatherData} from "../../../service/getWeatherData";

import './today-weather.sass'

class TodayWeather extends Component{
  state = {
    todayWeather: [],
    currentWeather: {}
  }

  queryForeCastWeather = () => {
    getForeCastWeatherData()
        .then(res => {
              const list = res.list
              const newArr = []
              list.forEach((item, i) => {
                if (i > -1 && i < 8) {
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
        .then(arr => this.setState({todayWeather: arr}))
  }

  queryCurrentWeather = () => {
    getCurrentWeatherData()
        .then(res => {
          const newObj = {
            temp: Math.round(res.main.temp - 273.15),
            weather: `${res.weather[0].main} - ${res.weather[0].description}`,
            weatherIcon: `https://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`

          }

          return newObj
        })
        .then(obj => this.setState({currentWeather: obj}))
  }

  componentDidMount() {
    this.queryCurrentWeather()
    this.queryForeCastWeather()
  }

  componentWillUnmount() {
    this.setState({todayWeather: [], currentWeather: {}})
  }


  render() {
    const {currentWeather} = this.state

    return (
        <div className="today-weather">
          <div className="today-weather__current-weather">
            <img src={currentWeather.weatherIcon} alt="weather-icon" title={currentWeather.weather}/>
            <span>{currentWeather.temp}&deg;C</span>
          </div>
          <div className="weather-list">
            {this.state.todayWeather}
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

export default TodayWeather
