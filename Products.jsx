import React, { useEffect, useState, useMemo, useCallback } from 'react'
import ProductItem from './ProductItem'
import { PRODUCTS } from '../data/products'
import { useNavigate } from 'react-router-dom'

export default function Products() {
  const [loading, setLoading] = useState(true)
  const [list, setList] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    // شبیه‌سازی fetch
    const id = setTimeout(() => {
      setList(PRODUCTS)
      setLoading(false)
    }, 600)
    return () => clearTimeout(id)
  }, [])

  const onAdd = useCallback((p) => {
    navigate(`/products/${p.id}`)
  }, [navigate])

  // useMemo برای جلوگیری از محاسبات دوباره
  const rendered = useMemo(() => list.map(p => (
    <div key={p.id} style={{ marginBottom: 12 }}>
      <ProductItem product={p} onAdd={onAdd} />
    </div>
  )), [list, onAdd])

  return (
    <div style={{ padding: 20 }}>
      <h2>محصولات</h2>
      {loading ? <div>Loading...</div> : <div>{rendered}</div>}
    </div>
  )
}
