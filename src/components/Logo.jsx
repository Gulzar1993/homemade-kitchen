export default function Logo({ size = 40 }) {
  return (
    <svg className="logo-mark" width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <rect width="64" height="64" rx="16" fill="var(--terracotta)" />
      <path d="M14 30h36v4a14 14 0 0 1-14 14h-8a14 14 0 0 1-14-14z" fill="var(--cream)" />
      <path
        d="M20 25c0-3 3-3 3-6s-3-3-3-6M32 25c0-3 3-3 3-6s-3-3-3-6M44 25c0-3 3-3 3-6s-3-3-3-6"
        stroke="var(--cream)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}
