import Icon from './Icon.jsx'
import './Toast.css'

export default function Toast({ toast, onView }) {
  return (
    <div className="toast-region" role="status" aria-live="polite">
      {toast && (
        <div className="toast" key={toast.key}>
          <Icon name="check" size={18} />
          <span>{toast.message}</span>
          <button type="button" onClick={onView}>
            View order
          </button>
        </div>
      )}
    </div>
  )
}
