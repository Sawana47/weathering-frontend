import React, {useState} from 'react'

export default function ClothingRecommender(){
  const [temp,setTemp] = useState(22)
  const [precip,setPrecip] = useState(false)

  function recommend(t,p){
    if(p) return ['Waterproof jacket','Water-resistant shoes']
    if(t<5) return ['Heavy coat','Thermal layers']
    if(t<15) return ['Light jacket','Sweater']
    if(t<25) return ['T-shirt','Light trousers']
    return ['Shorts','Breathable shirt']
  }

  const items = recommend(temp,precip)
  return (
    <div className="card">
      <h3 style={{marginTop:0}}>Clothing Recommender</h3>
      <div className="small">Temperature: {temp}°C</div>
      <input type="range" min="-10" max="45" value={temp} onChange={e=>setTemp(Number(e.target.value))} />
      <div style={{marginTop:8}}>
        <label><input type="checkbox" checked={precip} onChange={e=>setPrecip(e.target.checked)} /> Precipitation</label>
      </div>
      <ul>
        {items.map(i=><li key={i}>{i}</li>)}
      </ul>
    </div>
  )
}
