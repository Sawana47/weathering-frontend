import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function CrowdsourcedReports(){
  const [reports,setReports] = useState([])
  const [text,setText] = useState('')

  useEffect(()=>{ fetchReports() }, [])

  async function fetchReports() {
    try {
        const res = await axios.get('https://weathering-backend.onrender.com/api/reports');
        setReports(res.data || []);
    } catch (e) {
        setReports([]);
    }
}

  async function submit() {
    if (!text.trim()) return;

    try {
        await axios.post('https://weathering-backend.onrender.com/api/report', {
            text
        });
        
        setText('');
        fetchReports();
    } catch (e) {
        setReports([{ id: Date.now(), text, time: new Date().toISOString() }]);
        setText('');
    }
}
  

  return (
    <div className="card">
      <h3 style={{marginTop:0}}>Crowdsourced Reports</h3>
      <textarea value={text} onChange={e=>setText(e.target.value)} style={{width:'100%'}} placeholder="e.g. heavy fog on Market St." />
      <div style={{textAlign:'right',marginTop:8}}>
        <button onClick={submit}>Submit</button>
      </div>
      <div style={{marginTop:8}}>
        {reports.length===0 ? <div className="small">No reports yet.</div> : reports.map(r=>(
          <div key={r.id || r.timestamp} style={{padding:8,borderTop:'1px solid #eef2ff'}}>
            <div>{r.text}</div>
            <div className="small">{new Date(r.timestamp).toLocaleString()}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
