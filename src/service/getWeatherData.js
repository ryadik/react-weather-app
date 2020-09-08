const getForeCastWeatherData = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=a6177223297e1975f13fa9e9805475ae`
  const res = await fetch(url)

  if (!res.ok) {
    return 'Incorrect city name: City not found.'
  } else {
    return res.json()
  }
}

const getCurrentWeatherData = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a6177223297e1975f13fa9e9805475ae`
  const res = await fetch(url)

  if (!res.ok) {
    return 'Incorrect city name: City not found.'
  } else {
    return res.json()
  }
}

export {getForeCastWeatherData, getCurrentWeatherData}
