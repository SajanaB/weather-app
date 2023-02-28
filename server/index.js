const express = require('express');

const path = require('path');
const { WEATHER_APP_URL, API_KEY } = require('../config.js');
const { getWeatherData } = require('./api');

const app = express();

// Middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/weather', async (req, res)  => {
  let cityName = req.body.cityName;
  let WeatherData = getWeatherData(cityName, API_KEY)
  .then(({data}) => {
    res.status(200).json({data}).end();
  })
  .catch((err) => console.log(err))
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});