const getForeCastWeatherData = async () => {
  const res = await fetch('https://api.openweathermap.org/data/2.5/forecast?id=2023469&appid=a6177223297e1975f13fa9e9805475ae')

  if (!res.ok) {
    throw new Error(`${res.status}`)
  }

  return res.json()
}

const getCurrentWeatherData = async () => {
  const res = await fetch('https://api.openweathermap.org/data/2.5/weather?id=2023469&appid=a6177223297e1975f13fa9e9805475ae')

  if (!res.ok) {
    throw new Error(`${res.status}`)
  }

  return res.json()
}

export {getForeCastWeatherData, getCurrentWeatherData}
