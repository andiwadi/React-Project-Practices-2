import React from 'react'

export default function Gallery() {
  const images = [ '/placeholder-1.jpg', '/placeholder-1.jpg', '/placeholder-1.jpg' ]
  return (
    <div style={{ padding: 20 }}>
      <h2>Gallery (lazy loaded)</h2>
      <div style={{ display: 'flex', gap: 12 }}>
        {images.map((s, i) => (
          <img key={i} src={s} alt="g" style={{ width: 160, height: 110, objectFit: 'cover', borderRadius: 8 }} />
        ))}
      </div>
    </div>
  )
}
