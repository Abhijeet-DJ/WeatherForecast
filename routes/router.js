const { Router } = require("express");
const WeatherData = require("../models/weatherForecast");


const router = Router();

router.get("/",(req,res)=>{
    res.render("weatherForecast.ejs");
});

router.get("/api/weather",async (req,res)=>{
    res.json(await WeatherData.find());
});

// router.get("/",(req,res)=>{
//     res.render()
// })

module.exports = router;