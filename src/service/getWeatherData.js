const getForeCastWeatherData = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=a6177223297e1975f13fa9e9805475ae`
  const res = await fetch(url)

  if (!res.ok) {
    throw new Error(`${res.status}`)
  }

  return res.json()
}

const getCurrentWeatherData = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a6177223297e1975f13fa9e9805475ae`
  const res = await fetch(url)

  if (!res.ok) {
    throw new Error(`${res.status}`)
  }

  return res.json()
}

export {getForeCastWeatherData, getCurrentWeatherData}
