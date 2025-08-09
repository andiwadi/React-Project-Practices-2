import React, { useEffect, useState } from 'react'

export default function Timer() {
  const [seconds, setSeconds] = useState(10)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    if (!running) return
    if (seconds <= 0) { setRunning(false); return }
    const id = setInterval(() => setSeconds(s => s - 1), 1000)
    return () => clearInterval(id)
  }, [running, seconds])

  return (
    <div style={{ padding: 20 }}>
      <h2>Timer (useEffect & cleanup)</h2>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <div style={{ fontSize: 32, fontWeight: 800 }}>{seconds}</div>
        <div>
          <button onClick={() => { setSeconds(10); setRunning(true) }} style={{ padding: '8px 12px', borderRadius: 8, marginRight: 8 }}>Start 10s</button>
          <button onClick={() => setRunning(false)} style={{ padding: '8px 12px', borderRadius: 8 }}>Stop</button>
        </div>
      </div>
    </div>
  )
}
