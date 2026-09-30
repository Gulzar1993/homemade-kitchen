export default function SectionHeading({ eyebrow, title, text, align = 'center', light = false }) {
  return (
    <div className={`section-heading align-${align} ${light ? 'is-light' : ''}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {text && <p className="section-text">{text}</p>}
    </div>
  )
}
