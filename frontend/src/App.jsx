
import { useState } from 'react'

export default function App() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState("")
  const [offer, setOffer] = useState("")

  const send = () => {
    if(!input) return
    setMessages([...messages, { from: "user", text: input }])
    setInput("")
  }

  return (
    <div className="page">
      <h1>🤖 Hackathon IA Matching</h1>

      <div className="panel">
        <label>📄 Upload CV</label>
        <input type="file" />
      </div>

      <div className="panel">
        <label>🏢 Offre d'emploi</label>
        <textarea 
          value={offer}
          onChange={e => setOffer(e.target.value)}
          placeholder="Colle ici l'offre..."
        />
      </div>

      <div className="chat">
        {messages.map((m,i)=>(
          <div key={i} className={m.from}>{m.text}</div>
        ))}
      </div>

      <div className="inputZone">
        <input 
          value={input}
          onChange={e=>setInput(e.target.value)}
          placeholder="Pose une question..."
        />
        <button onClick={send}>Envoyer</button>
      </div>
    </div>
  )
}
