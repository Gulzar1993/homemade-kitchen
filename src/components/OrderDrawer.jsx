import { useEffect, useRef, useState } from 'react'
import Icon from './Icon.jsx'
import { featuredDishes } from '../data/content.js'
import { formatPrice } from '../utils/format.js'
import './OrderDrawer.css'

const TAX_RATE = 0.1025
const DELIVERY_FEE = 4.99

export default function OrderDrawer({ open, cart, onClose, onUpdateQty, onAdd, onClear }) {
  const [method, setMethod] = useState('pickup')
  const [confirmation, setConfirmation] = useState(null)
  const closeRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined
    document.body.classList.add('no-scroll')
    closeRef.current?.focus()
    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('no-scroll')
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  const subtotal = cart.reduce((sum, line) => sum + line.price * line.qty, 0)
  const tax = subtotal * TAX_RATE
  const delivery = method === 'delivery' && subtotal > 0 ? DELIVERY_FEE : 0
  const total = subtotal + tax + delivery

  const placeOrder = () => {
    setConfirmation({
      number: Math.floor(100000 + Math.random() * 900000),
      total,
      method,
    })
    onClear()
  }

  const handleClose = () => {
    onClose()
    setConfirmation(null)
  }

  return (
    <div className={`drawer-root ${open ? 'is-open' : ''}`} aria-hidden={!open}>
      <div className="drawer-backdrop" onClick={handleClose} />
      <aside
        className="drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby="order-title"
        inert={open ? undefined : true}
      >
        <header className="drawer-header">
          <h2 id="order-title">Your Order</h2>
          <button ref={closeRef} type="button" className="icon-btn" onClick={handleClose} aria-label="Close order">
            <Icon name="close" size={20} />
          </button>
        </header>

        {confirmation ? (
          <div className="drawer-body drawer-confirm">
            <span className="success-icon">
              <Icon name="check" size={28} strokeWidth={2.4} />
            </span>
            <h3>Order received!</h3>
            <p>
              Order <strong>#{confirmation.number}</strong> &middot; {formatPrice(confirmation.total)}
            </p>
            <p>
              {confirmation.method === 'pickup'
                ? 'Your meal will be ready for pickup at 123 Main Street in about 25 minutes.'
                : 'Your meal is being prepared and will arrive in about 45 minutes.'}
            </p>
            <button type="button" className="btn btn-primary" onClick={handleClose}>
              Back to menu
            </button>
          </div>
        ) : cart.length === 0 ? (
          <div className="drawer-body">
            <div className="drawer-empty">
              <Icon name="cart" size={40} />
              <p>Your order is empty. Start with one of our favorites:</p>
            </div>
            <ul className="quick-picks">
              {featuredDishes.slice(0, 4).map((dish) => (
                <li key={dish.id}>
                  <img src={dish.image} alt="" width="64" height="64" loading="lazy" />
                  <div>
                    <strong>{dish.name}</strong>
                    <span>{formatPrice(dish.price)}</span>
                  </div>
                  <button type="button" className="icon-btn" onClick={() => onAdd(dish)} aria-label={`Add ${dish.name}`}>
                    <Icon name="plus" size={18} />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <>
            <div className="drawer-body">
              <div className="method-toggle" role="radiogroup" aria-label="Order method">
                {['pickup', 'delivery'].map((option) => (
                  <button
                    key={option}
                    type="button"
                    role="radio"
                    aria-checked={method === option}
                    className={method === option ? 'is-active' : ''}
                    onClick={() => setMethod(option)}
                  >
                    {option === 'pickup' ? 'Pickup' : 'Delivery'}
                  </button>
                ))}
              </div>
              <ul className="cart-lines">
                {cart.map((line) => (
                  <li key={line.id}>
                    <div className="cart-line-info">
                      <strong>{line.name}</strong>
                      <span>{formatPrice(line.price)}</span>
                    </div>
                    <div className="qty">
                      <button type="button" onClick={() => onUpdateQty(line.id, -1)} aria-label={`Remove one ${line.name}`}>
                        <Icon name="minus" size={16} />
                      </button>
                      <span aria-live="polite">{line.qty}</span>
                      <button type="button" onClick={() => onUpdateQty(line.id, 1)} aria-label={`Add one ${line.name}`}>
                        <Icon name="plus" size={16} />
                      </button>
                    </div>
                    <span className="cart-line-total">{formatPrice(line.price * line.qty)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <footer className="drawer-footer">
              <dl className="totals">
                <div>
                  <dt>Subtotal</dt>
                  <dd>{formatPrice(subtotal)}</dd>
                </div>
                <div>
                  <dt>Tax</dt>
                  <dd>{formatPrice(tax)}</dd>
                </div>
                {method === 'delivery' && (
                  <div>
                    <dt>Delivery</dt>
                    <dd>{formatPrice(delivery)}</dd>
                  </div>
                )}
                <div className="totals-grand">
                  <dt>Total</dt>
                  <dd>{formatPrice(total)}</dd>
                </div>
              </dl>
              <button type="button" className="btn btn-primary btn-lg btn-block" onClick={placeOrder}>
                Place Order &middot; {formatPrice(total)}
              </button>
            </footer>
          </>
        )}
      </aside>
    </div>
  )
}
