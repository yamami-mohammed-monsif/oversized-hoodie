'use client'
import { useEffect, useRef, useState } from 'react'

type Props = {
  children: React.ReactNode
  className?: string
  animation?: 'fadeInUp' | 'fadeIn'
  delay?: number
  threshold?: number
}

export default function FadeIn({
  children,
  className = '',
  animation = 'fadeInUp',
  delay = 0,
  threshold = 0.15,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return (
    <div
      ref={ref}
      className={`${
        visible
          ? animation === 'fadeInUp'
            ? 'animate-fade-in-up'
            : 'animate-fade-in'
          : 'will-animate'
      } ${className}`}
      style={visible && delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
