import React from 'react'

export default function WeatherDisplay(){
  const mock = { location: 'Neighborhood', temp: 24, feels_like: 23, description: 'Partly cloudy' }
  return (
    <div className="card">
      <h2 style={{marginTop:0}}>Local Snapshot</h2>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div>
          <div style={{fontSize:40,fontWeight:700}}>{mock.temp}°C</div>
          <div className="small">Feels like {mock.feels_like}°C</div>
        </div>
        <div style={{textAlign:'right'}}>
          <div>{mock.location}</div>
          <div className="small">{mock.description}</div>
        </div>
      </div>
    </div>
  )
}
