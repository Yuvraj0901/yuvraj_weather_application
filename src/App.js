import './App.css';
import React, { useState ,useEffect } from 'react';

function App(){
  const [Location, setLocation]=useState();
  const[temperature,settemperature]=useState('0');
  const[humidity,sethumidity]=useState('0');
  const[ weather_descriptions,setweather_descriptions]=useState("sunny");
  const[weather_icons,setweather_icons]=useState("https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png");
  const handlechange=(e)=>{
    setLocation(e.target.value);
  }
  const handleClick=async()=>{ try {
    await  fetch(`https://backend-for-yuvrajs-weather.onrender.com/api/weather?address=${encodeURIComponent(Location)}`).then((response) => {
      response.json().then((data) => 
    {
    
   sethumidity(data.humidity);
   settemperature(data.temperature);
   setLocation(data.location);
   setweather_icons(data.weather_icons);
   setweather_descriptions(data.weather_descriptions)
    }

);
  } )}catch (error) {
    console.log(error)
  }
   

}
const handleClickreset=()=>{
  sethumidity('0');
   settemperature('0');
   setLocation( "");
   setweather_icons("https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png");
   setweather_descriptions('sunny')
}
  return (
  
    <div className="App" style={{backgroundImage: 'url("https://images.pexels.com/photos/186980/pexels-photo-186980.jpeg?cs=srgb&dl=pexels-tahir-shaw-186980.jpg&fm=jpg")'}}>
      <div className='overlay'>
        <div className='container'>
          <div className='section section_inputs'>
          <input  type='text'  value={Location} onChange={handlechange}placeholder='Enter Your Location'/>
          <button  onClick={handleClick}>Search</button>
          <button  onClick={handleClickreset}>Reset</button>
          </div>
          <div className='section section_temperature'>
            <div className='icon'>
              <h3>{Location}</h3>
              <img src={weather_icons} alt='weathericon'/>
              <h3>{weather_descriptions}</h3>
            </div>
            <div className='temperature'> 
             <p>Temperature</p> <h1>{temperature}°C</h1>
             <p>Humidity</p><h2> {humidity}</h2>
            </div>
          </div>
        </div>
      </div>
       </div>
  );
}

export default App;
