import React, { useState, useEffect } from 'react'

export default function Todo() {
  const [text, setText] = useState('')
  const [todos, setTodos] = useState(() => {
    try { return JSON.parse(localStorage.getItem('todos') || '[]') } catch { return [] }
  })

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  function add() {
    if (!text.trim()) return
    setTodos(prev => [{ id: Date.now(), title: text }, ...prev])
    setText('')
  }
  function remove(id) { setTodos(prev => prev.filter(t => t.id !== id)) }

  return (
    <div style={{ padding: 20 }}>
      <h2>Todo (state & props)</h2>
      <div style={{ display: 'flex', gap: 8 }}>
        <input value={text} onChange={e => setText(e.target.value)} placeholder="New todo" style={{ padding: 8, borderRadius: 8, border: '1px solid #ddd', flex: 1 }} />
        <button onClick={add} style={{ padding: '8px 12px', borderRadius: 8, background: '#0b5', color: '#fff', border: 'none' }}>Add</button>
      </div>
      <ul style={{ marginTop: 12 }}>
        {todos.map(t => (
          <li key={t.id} style={{ padding: 8, borderBottom: '1px solid #f0f0f0', display: 'flex', justifyContent: 'space-between' }}>
            <span>{t.title}</span>
            <button onClick={() => remove(t.id)} style={{ background: 'transparent', border: 'none', color: '#c33' }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
