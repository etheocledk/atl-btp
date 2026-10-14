import { useEffect, useRef, useState } from 'react'

type Props = { value: number; prefix?: string; suffix?: string; duration?: number }

/** Compteur qui s'anime de 0 à `value` lorsqu'il devient visible. */
export default function Counter({ value, prefix = '', suffix = '', duration = 1600 }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCurrent(value)
      return
    }
    let frame = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setCurrent(Math.round(eased * value))
          if (progress < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.5 },
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [value, duration])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {current}
      {suffix}
    </span>
  )
}
