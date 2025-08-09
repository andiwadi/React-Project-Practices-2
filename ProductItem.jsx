import React from 'react'
import { currency } from '../utils/helpers'

// React.memo برای جلوگیری از رندرهای اضافه
const ProductItem = React.memo(function ProductItem({ product, onAdd }) {
  const card = {
    border: '1px solid #eee',
    borderRadius: 10,
    padding: 12,
    display: 'flex',
    gap: 12,
    alignItems: 'center'
  }
  const img = { width: 64, height: 64, borderRadius: 8, objectFit: 'cover', background: '#fafafa' }
  return (
    <div style={card}>
      <img src={product.image || '/placeholder-1.jpg'} alt="p" style={img} />
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 700 }}>{product.title}</div>
        <div style={{ color: '#666', fontSize: 14 }}>{product.description}</div>
      </div>
      <div style={{ textAlign: 'right' }}>
        <div style={{ fontWeight: 700 }}>{currency(product.price)}</div>
        <button onClick={() => onAdd(product)} style={{ marginTop: 8, padding: '6px 10px', borderRadius: 8, border: 'none', background: '#0b5', color: '#fff', cursor: 'pointer' }}>Add</button>
      </div>
    </div>
  )
})

export default ProductItem
