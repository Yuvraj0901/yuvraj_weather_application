
const express = require('express')
const cors = require("cors")

const app= express()
const port=process.env.PORT || 5000
app.use(cors());
const geocode=require('./utils/geocode.js')
const forecast=require('./utils/forecast.js')

app.get('/api/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:"please provide address for weather forecast"
        })
    }
    geocode(req.query.address,(error,{ location, latitude,longitude}={})=>{
        if(error){
            return res.send({error})
        }
        forecast(latitude,longitude,(error,forecastdata)=>{
            if(error){
                return res.send(error)
            }
            res.send(
               {temperature: forecastdata.current.temperature,
                humidity : forecastdata.current.humidity,
                weather_descriptions:forecastdata.current.weather_descriptions,
                weather_icons:forecastdata.current.weather_icons,
                location
            })
        })
    })

})

app.listen(port,()=>{
    console.log("server is up on port " + port)
})