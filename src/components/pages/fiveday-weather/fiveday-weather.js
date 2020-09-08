import React, {Component} from 'react'

import {getForeCastWeatherData} from "../../../service/getWeatherData";

import './fiveday-weather.sass'

class FivedayWeather extends Component{
  state = {
    fivedayWeather: []
  }

  generateKey = () => Math.random().toString(36).substr(6)

  queryForeCastWeather = () => {
    getForeCastWeatherData(this.props.cityName)
        .then(res => {
            if (res.cod === '200') {
              const list = res.list
              const newArr = []
              list.forEach((item, i) => {
                  newArr.push(
                      <ListItem key={this.generateKey()}
                                time={item.dt_txt}
                                temp={Math.round(item.main.temp -273.15)}
                                wind={item.wind.speed}
                                windDirection={item.wind.deg}
                                humidity={item.main.humidity}
                                weather={item.weather[0].main}
                                weatherIcon={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                      />)
              })
              return newArr
            }
            else {
              return <span className="city-name-error">Incorrect city name: City not found.</span>
            }
        })
        .then(data => this.setState({fivedayWeather: data}))
        .catch(err => alert(`Error! ${err}. Please retry.`))
  }


  componentDidMount() {
    this.queryForeCastWeather()
  }

  componentWillUnmount() {
    this.setState({fivedayWeather: []})
  }


  render() {
    return (
        <div className="fiveday-weather">
          <div className="weather-list">
            {this.state.fivedayWeather}
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

export default FivedayWeather
