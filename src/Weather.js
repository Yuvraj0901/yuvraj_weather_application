// const request = require('request')
// const forecast=(lat,lon,callback)=>{
//     const url= 'http://api.weatherstack.com/forecast?access_key=7f83e62c70456fa88716eb023595b3d0&query='+lat+','+lon+''
// request({url, json:true},(error,{body}={})=>
// {
 
//     if(error){
//         callback("Unable to connect to weather!",undefined)
//     }
//     else if(body.error){
//          callback("Unable to find a location",undefined)
//     }
//     else{
//     callback(undefined,"it is currently "+ body.current.temperature +"degrees out.It feels like "+ body.current.feelslike+"degrees")
//     }
// })

// } 
// module.exports=forecast
 

// const geocode=(address,callback)=>{
//     const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoieXV2cmFqYmFyaTE5IiwiYSI6ImNsajlvaGFwdzAxdmYzanVpanZlZjF3d2cifQ.BwqbMy7q_7jZoJ2xAQjfbQ&limit=1'
//  request({url, json:true},(error,{body}={})=>
// {
//     if(error){
//         callback('Unable to connect to location services!',undefined)
//     }else if(body.features.length === 0){
//         callback('Unable to find a location try again',undefined)
//     }
//     else{
//         callback(undefined,{
//             latitude:body.features[0].center[1],
//             longitude:body.features[0].center[0],
//             location :body.features[0].place_name
//         })
//     }
// })
// }

// module.exports =geocode
 const express=require("express")
 const app=express()
 app.listen(5000,()=>{
    console.log("server is up on port 5000")
 })