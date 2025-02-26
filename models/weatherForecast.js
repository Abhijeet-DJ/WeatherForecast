const { Schema , model } = require('mongoose');

const weatherForecastSchema = new Schema({  
    date: { 
        type: Date,
         required: true 
        },
    temperature: {
        type: Number,
        required: true
    },
    humidity: {
        type: Number,
        required: true
    },
    windSpeed: {
        type: Number,
        required: true
    },
    weather: {
        type: String,
        required: true
    },
    pressure: { 
        type: Number,
        required: true 
    },
    altitude: {    
        type: Number,
        required: true
    },
    windDirection: {
        type: String,
        required: true
    },
    windGust: {
        type: Number,
        required: true
    },
    precipitation: {
        type: Number,
        required: true
    },
    lightIntensity: {
        type: Number,
        required: true
    },
    uvIndex: {
        type: Number,
        required: true
    },
    airQuality: {   
        type: Number,
        required: true
    },
}, { timestamps: true });

const WeatherData = model('WeatherData', weatherForecastSchema);

module.exports = WeatherData;