import { useCallback, useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import FeaturedDishes from './components/FeaturedDishes.jsx'
import OurStory from './components/OurStory.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import Menu from './components/Menu.jsx'
import TodaysSpecial from './components/TodaysSpecial.jsx'
import Catering from './components/Catering.jsx'
import Reviews from './components/Reviews.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import OrderDrawer from './components/OrderDrawer.jsx'
import Toast from './components/Toast.jsx'

export default function App() {
  const [cart, setCart] = useState([])
  const [orderOpen, setOrderOpen] = useState(false)
  const [toast, setToast] = useState(null)

  const addToCart = useCallback((item) => {
    setCart((current) => {
      const existing = current.find((line) => line.id === item.id)
      if (existing) {
        return current.map((line) =>
          line.id === item.id ? { ...line, qty: line.qty + 1 } : line,
        )
      }
      return [...current, { id: item.id, name: item.name, price: item.price, qty: 1 }]
    })
    setToast({ key: Date.now(), message: `${item.name} added to your order` })
  }, [])

  const updateQty = useCallback((id, delta) => {
    setCart((current) =>
      current
        .map((line) => (line.id === id ? { ...line, qty: line.qty + delta } : line))
        .filter((line) => line.qty > 0),
    )
  }, [])

  const clearCart = useCallback(() => setCart([]), [])
  const openOrder = useCallback(() => setOrderOpen(true), [])

  useEffect(() => {
    if (!toast) return undefined
    const timer = setTimeout(() => setToast(null), 2600)
    return () => clearTimeout(timer)
  }, [toast])

  const itemCount = cart.reduce((sum, line) => sum + line.qty, 0)

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header itemCount={itemCount} onOrder={openOrder} />
      <main id="main">
        <Hero onOrder={openOrder} />
        <FeaturedDishes onAdd={addToCart} />
        <OurStory />
        <WhyChooseUs />
        <Menu onAdd={addToCart} />
        <TodaysSpecial onAdd={addToCart} />
        <Catering />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <OrderDrawer
        open={orderOpen}
        cart={cart}
        onClose={() => setOrderOpen(false)}
        onUpdateQty={updateQty}
        onAdd={addToCart}
        onClear={clearCart}
      />
      <Toast toast={toast} onView={openOrder} />
    </>
  )
}
