import { useEffect, useRef } from 'react'
import './Cursor.css'

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mouseX = 0
    let mouseY = 0
    let ringX = 0
    let ringY = 0

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`
      }
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX - 16}px, ${ringY - 16}px)`
      }
      requestAnimationFrame(animate)
    }

    const onEnterText = () => {
      ringRef.current?.classList.add('expand')
      dotRef.current?.classList.add('hide')
    }

    const onLeaveText = () => {
      ringRef.current?.classList.remove('expand')
      dotRef.current?.classList.remove('hide')
    }

    document.addEventListener('mousemove', onMove)
    animate()

    const textEls = document.querySelectorAll('h1, h2, h3, p, a, button, li')
    textEls.forEach(el => {
      el.addEventListener('mouseenter', onEnterText)
      el.addEventListener('mouseleave', onLeaveText)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
