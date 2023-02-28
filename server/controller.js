const { API_KEY } = require('../config.js');
const { getWeatherData } = require('./api');

const weatherData = async (req, res) => {
  const { cityName, API_KEY } = req.params;

  try {
    const { weatherData } = await getWeatherData(cityName, API_KEY);
    res.status(200).send({ weatherData });
  } catch (err) {
    console.log(err);
    res.status(400).send('Unable to retrieve weathe data');
  }
};

module.exports = weatherData;