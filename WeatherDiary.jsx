import React, {useEffect, useState} from 'react'
const KEY = 'weathering_diary_v1'
export default function WeatherDiary(){
  const [entries,setEntries] = useState([])
  const [note,setNote] = useState('')
  useEffect(()=>{ const raw = localStorage.getItem(KEY); if(raw) setEntries(JSON.parse(raw)) }, [])
  function save(){
    if(!note.trim()) return
    const e = { id: Date.now(), note, timestamp: Date.now() }
    const u = [e, ...entries]
    setEntries(u)
    localStorage.setItem(KEY, JSON.stringify(u))
    setNote('')
  }
  function remove(id){
    const u = entries.filter(x=>x.id!==id)
    setEntries(u)
    localStorage.setItem(KEY, JSON.stringify(u))
  }
  return (
    <div className="card">
      <h3 style={{marginTop:0}}>Weather Diary</h3>
      <textarea value={note} onChange={e=>setNote(e.target.value)} style={{width:'100%'}} placeholder="How did the weather feel today?" />
      <div style={{textAlign:'right',marginTop:8}}>
        <button onClick={save}>Save</button>
      </div>
      <div style={{marginTop:8}}>
        {entries.map(e=>(
          <div key={e.id} style={{padding:8,borderTop:'1px solid #eef2ff'}}>
            <div>{e.note}</div>
            <div className="small">{new Date(e.timestamp).toLocaleString()} <button style={{float:'right',color:'#ef4444'}} onClick={()=>remove(e.id)}>Delete</button></div>
          </div>
        ))}
      </div>
    </div>
  )
}
