import React from 'react'
import { useCart } from '../contexts/CartContext'
import { currency } from '../utils/helpers'

export default function Cart() {
  const [state, dispatch] = useCart()
  const items = state.items || []
  const total = items.reduce((s, i) => s + i.price * (i.qty || 1), 0)

  return (
    <div style={{ padding: 20 }}>
      <h2>سبد خرید</h2>
      {items.length === 0 ? (
        <div>سبد خرید خالی است.</div>
      ) : (
        <div style={{ display: 'grid', gap: 12 }}>
          {items.map(i => (
            <div key={i.id} style={{ display: 'flex', justifyContent: 'space-between', padding: 10, border: '1px solid #eee', borderRadius: 8 }}>
              <div>
                <div style={{ fontWeight: 700 }}>{i.title} × {i.qty}</div>
                <div style={{ color: '#666' }}>{currency(i.price)}</div>
              </div>
              <div>
                <button onClick={() => dispatch({ type: 'REMOVE', payload: i.id })} style={{ marginRight: 8 }}>Remove</button>
              </div>
            </div>
          ))}
          <div style={{ textAlign: 'right', fontWeight: 800 }}>Total: {currency(total)}</div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
            <button onClick={() => dispatch({ type: 'CLEAR' })} style={{ padding: '8px 12px', borderRadius: 8 }}>Clear</button>
            <button style={{ padding: '8px 12px', borderRadius: 8, background: '#06c', color: '#fff', border: 'none' }}>Checkout</button>
          </div>
        </div>
      )}
    </div>
  )
}
