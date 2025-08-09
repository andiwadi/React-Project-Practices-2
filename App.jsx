import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Products from './components/Products'
import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart'
import Todo from './components/Todo'
import Timer from './components/Timer'
import ContactForm from './components/ContactForm'
import WaterReminder from './components/WaterReminder'
import { CartProvider } from './contexts/CartContext'

const Gallery = lazy(() => import('./components/Gallery'))

export default function App() {
  return (
    <CartProvider>
      <div style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial' }}>
        <Navbar />
        <Suspense fallback={<div style={{ padding: 20 }}>Loading section...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/timer" element={<Timer />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/water" element={<WaterReminder />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </div>
    </CartProvider>
  )
}
