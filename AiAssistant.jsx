import React, {useState} from 'react'
import axios from 'axios'

export default function AiAssistant(){
  const [q,setQ] = useState('Will it rain during my run?')
  const [ans,setAns] = useState(null)
  const [loading,setLoading] = useState(false)

  async function ask(){
    setLoading(true)
    try{
      const res = await axios.post('/api/assistant', { question: q })
      setAns(res.data.answer)
    }catch(e){
      setAns('Assistant unavailable (demo).')
    }
    setLoading(false)
  }

  return (
    <div className="card">
      <h3 style={{marginTop:0}}>AI Assistant (mock)</h3>
      <textarea value={q} onChange={e=>setQ(e.target.value)} style={{width:'100%'}} />
      <div style={{marginTop:8,display:'flex',gap:8}}>
        <button onClick={ask}>Ask</button>
        <button onClick={()=>{setQ('Will it rain during my run?'); setAns(null)}}>Reset</button>
      </div>
      <div style={{marginTop:8}} className="small">Response:</div>
      <div style={{minHeight:48,marginTop:4}}>{loading ? 'Thinking...' : (ans ?? 'No answer yet.')}</div>
    </div>
  )
}
