import React, { useEffect, useRef, useState } from 'react'

export default function WaterReminder() {
  const [intervalMin, setIntervalMin] = useState(60)
  const [running, setRunning] = useState(false)
  const [logs, setLogs] = useState([])
  const timerRef = useRef(null)

  useEffect(() => {
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [])

  function start() {
    if (timerRef.current) clearInterval(timerRef.current)
    const ms = Math.max(1, Number(intervalMin)) * 60 * 1000
    timerRef.current = setInterval(() => {
      setLogs(prev => [{ id: Date.now(), at: new Date().toLocaleTimeString() }, ...prev])
    }, ms)
    setRunning(true)
  }
  function stop() { if (timerRef.current) clearInterval(timerRef.current); timerRef.current = null; setRunning(false) }

  return (
    <div style={{ padding: 20 }}>
      <h2>Water Reminder</h2>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <input value={intervalMin} onChange={e => setIntervalMin(e.target.value)} type="number" style={{ padding: 8, borderRadius: 8, border: '1px solid #ddd' }} />
        <div>minutes</div>
        <button onClick={start} style={{ padding: '8px 12px', borderRadius: 8, background: '#06c', color: '#fff', border: 'none' }}>Start</button>
        <button onClick={stop} style={{ padding: '8px 12px', borderRadius: 8 }}>Stop</button>
      </div>
      <div style={{ marginTop: 12 }}>
        <h4>Logs</h4>
        <ul>
          {logs.map(l => <li key={l.id}>{l.at} — time to drink!</li>)}
        </ul>
      </div>
    </div>
  )
}
