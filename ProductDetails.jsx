import React from 'react'
import { useParams } from 'react-router-dom'
import { PRODUCTS } from '../data/products'
import { useCart } from '../contexts/CartContext'
import { currency } from '../utils/helpers'

export default function ProductDetails() {
  const { id } = useParams()
  const product = PRODUCTS.find(p => p.id === id)
  const [state, dispatch] = useCart()

  if (!product) return <div style={{ padding: 20 }}>محصول پیدا نشد</div>

  const add = () => dispatch({ type: 'ADD', payload: product })

  return (
    <div style={{ padding: 20, display: 'flex', gap: 20 }}>
      <img src={product.image || '/placeholder-1.jpg'} alt="p" style={{ width: 220, height: 220, objectFit: 'cover', borderRadius: 12 }} />
      <div>
        <h3>{product.title}</h3>
        <p style={{ color: '#555' }}>{product.description}</p>
        <div style={{ fontWeight: 800, marginTop: 10 }}>{currency(product.price)}</div>
        <div style={{ marginTop: 14 }}>
          <button onClick={add} style={{ padding: '10px 14px', borderRadius: 10, border: 'none', background: '#0b5', color: '#fff', cursor: 'pointer' }}>Add to cart</button>
        </div>
      </div>
    </div>
  )
}
