const axios = require('axios');
const { WEATHER_APP_URL, API_KEY } = require('../config.js');

const getWeatherData = (cityName, API_KEY) => {
  return axios.get(WEATHER_APP_URL+`q=${cityName}&appid=${API_KEY}`)
  .then(({data}) => {
    console.log('api--------------->', data)
    return {data};
  })
  .catch((err) => console.log(err));
}
module.exports = {getWeatherData};