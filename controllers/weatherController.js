const axios = require('axios');
const Weather = require('../models/Weather');

const fetchWeatherData = async (city) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}`
    );
    const { main, weather, dt } = response.data;
    return {
      city,
      main: weather[0].main,
      temp: main.temp - 273.15, // Convert Kelvin to Celsius
      feels_like: main.feels_like - 273.15,
      dt: new Date(dt * 1000),  // Convert Unix timestamp to JavaScript date
    };
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
};

const saveWeatherData = async (data) => {
  try {
    const newWeather = new Weather(data);
    await newWeather.save();
  } catch (error) {
    console.error('Error saving weather data:', error);
  }
};

module.exports = { fetchWeatherData, saveWeatherData };
