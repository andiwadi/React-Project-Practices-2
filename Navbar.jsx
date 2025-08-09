import React from 'react'
import { NavLink } from 'react-router-dom'

const linkStyle = (isActive) => ({
  margin: '0 8px',
  textDecoration: 'none',
  color: isActive ? '#0b5' : '#111',
  fontWeight: isActive ? 700 : 500
})

export default function Navbar() {
  const navStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 20px',
    borderBottom: '1px solid #eee',
    background: 'linear-gradient(90deg,#fff,#f7fbff)'
  }
  const left = { display: 'flex', alignItems: 'center' }
  const brand = { fontWeight: 800, fontSize: 18 }

  return (
    <nav style={navStyle}>
      <div style={left}>
        <div style={brand}>HumanMade Shop</div>
        <div style={{ marginLeft: 14 }}>
          <NavLink to="/" style={({ isActive }) => linkStyle(isActive)}>Home</NavLink>
          <NavLink to="/products" style={({ isActive }) => linkStyle(isActive)}>Products</NavLink>
          <NavLink to="/todo" style={({ isActive }) => linkStyle(isActive)}>Todo</NavLink>
          <NavLink to="/water" style={({ isActive }) => linkStyle(isActive)}>Water</NavLink>
        </div>
      </div>
      <div>
        <NavLink to="/cart" style={({ isActive }) => linkStyle(isActive)}>Cart</NavLink>
        <NavLink to="/about" style={({ isActive }) => linkStyle(isActive)}>About</NavLink>
      </div>
    </nav>
  )
}
