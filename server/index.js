const express = require('express');
const path = require('path');
const { WEATHER_APP_URL, API_KEY } = require('../config.js');
const { getWeatherData } = require('./api');
const {weatherData} = require('./controller');
const axios = require('axios');


const app = express();

// Middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
//app.use(express.urlencoded({extended: true}));

app.get('/weather', async (req, res)  => {
  //let cityName = req.body.cityName;
  console.log('Body', req.body)
  console.log('Params', req.params)
  console.log('Query', req.query)
  let cityName = 'Austin';
  let weatherData = await getWeatherData(cityName, API_KEY)
  .then(({data}) => {
    res.status(200).send(data);
  })
  .catch((err) => console.log(err))
})



// app.get ('/weather/', (req, res) => {
//   const {cityName, API_KEY} = req.query;
//   axios.get(WEATHER_APP_URL, {
//     params: {
//       q: cityName,
//       appid: API_KEY
//     }
//   })
//   .then(({data}) => {
//     res.json(data)
//   })
//   .catch((e) => {
//     console.log(e);
//   })
// })


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});