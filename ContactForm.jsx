import React, { useState } from 'react'

export default function ContactForm() {
  const [data, setData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState('')

  function validate() {
    const e = {}
    if (!data.name.trim()) e.name = 'Name is required'
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email)) e.email = 'Invalid email'
    if (data.message.length < 10) e.message = 'Message too short'
    return e
  }

  function submit(e) {
    e.preventDefault()
    const v = validate()
    if (Object.keys(v).length) { setErrors(v); return }
    setErrors({})
    setSuccess('Message sent (mock)!')
    setData({ name: '', email: '', message: '' })
    setTimeout(() => setSuccess(''), 2500)
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Contact Form (validation)</h2>
      <form onSubmit={submit}>
        <div style={{ marginBottom: 8 }}>
          <input placeholder="Name" value={data.name} onChange={e => setData({ ...data, name: e.target.value })} style={{ padding: 8, width: '100%', borderRadius: 8, border: '1px solid #ddd' }} />
          {errors.name && <div style={{ color: 'red', marginTop: 6 }}>{errors.name}</div>}
        </div>
        <div style={{ marginBottom: 8 }}>
          <input placeholder="Email" value={data.email} onChange={e => setData({ ...data, email: e.target.value })} style={{ padding: 8, width: '100%', borderRadius: 8, border: '1px solid #ddd' }} />
          {errors.email && <div style={{ color: 'red', marginTop: 6 }}>{errors.email}</div>}
        </div>
        <div style={{ marginBottom: 8 }}>
          <textarea placeholder="Message" value={data.message} onChange={e => setData({ ...data, message: e.target.value })} style={{ padding: 8, width: '100%', borderRadius: 8, border: '1px solid #ddd' }} />
          {errors.message && <div style={{ color: 'red', marginTop: 6 }}>{errors.message}</div>}
        </div>
        <div>
          <button type="submit" style={{ padding: '10px 14px', borderRadius: 8, background: '#0b5', color: '#fff', border: 'none' }}>Send</button>
          {success && <span style={{ marginLeft: 12, color: '#0a0' }}>{success}</span>}
        </div>
      </form>
    </div>
  )
}
