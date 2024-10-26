const express = require('express');
const router = express.Router();
const { fetchWeatherData, saveWeatherData } = require('../controllers/weatherController');

router.get('/fetch', async (req, res) => {
  const cities = ['Delhi', 'Mumbai', 'Chennai', 'Bangalore', 'Kolkata', 'Hyderabad'];
  const weatherData = await Promise.all(cities.map(city => fetchWeatherData(city)));
  weatherData.forEach(data => saveWeatherData(data));
  res.json(weatherData);
});

module.exports = router;
