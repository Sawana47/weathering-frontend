import React from 'react'
import WeatherDisplay from "./WeatherDisplay.jsx";
import ClothingRecommender from "./ClothingRecommender.jsx";
import CrowdsourcedReports from './components/CrowdsourcedReports'
import WeatherDiary from "./WeatherDiary.jsx";
import AIAssistant from "./AIAssistant.jsx";

export default function App(){
  return (
    <div className="container">
      <header className="card header" style={{marginBottom:16}}>
        <div>
          <h1 style={{margin:0}}>WEATHERING — Hyperlocal Demo</h1>
          <div className="small">Ready-to-run skill project for presentation</div>
        </div>
        <div className="small">Demo</div>
      </header>

      <main style={{display:'grid',gridTemplateColumns:'2fr 1fr',gap:16}}>
        <section style={{display:'flex',flexDirection:'column',gap:16}}>
          <WeatherDisplay />
          <ClothingRecommender />
          <AiAssistant />
        </section>

        <aside style={{display:'flex',flexDirection:'column',gap:16}}>
          <CrowdsourcedReports />
          <WeatherDiary />
        </aside>
      </main>

      <footer style={{textAlign:'center',marginTop:20,color:'#64748b'}} className="small">Made for presentation • Mocked demo</footer>
    </div>
  )
}
