import React from 'react'

export default function Home() {
  const wrap = { padding: 20 }
  const hero = {
    padding: 20,
    borderRadius: 12,
    boxShadow: '0 6px 20px rgba(10,10,20,0.06)',
    background: 'linear-gradient(180deg,#fff,#f5fdff)'
  }
  return (
    <div style={wrap}>
      <div style={hero}>
        <h1 style={{ margin: 0 }}>سلام — خوش اومدی</h1>
        <p style={{ color: '#444' }}>این یک پروژهٔ نمونه است که ویژگی‌های اصلی React را نشان می‌دهد — استایل‌ها همگی inline هستند تا حس دست‌ساز بودن حفظ شود.</p>
      </div>
    </div>
  )
}
