import { useEffect, useRef } from 'react'
import './Hero.css'

export default function Hero() {
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els = [leftRef.current, rightRef.current]
    els.forEach((el, i) => {
      if (!el) return
      el.style.opacity = '0'
      el.style.transform = i === 0 ? 'translateX(-24px)' : 'translateX(24px)'
      setTimeout(() => {
        el.style.transition = 'opacity 0.9s ease, transform 0.9s ease'
        el.style.opacity = '1'
        el.style.transform = 'translateX(0)'
      }, 120 + i * 80)
    })
  }, [])

  return (
    <section id="top" className="hero">
      <div className="hero-noise" />
      <div className="hero-glow" />

      <div className="container hero-inner">
        <div ref={leftRef} className="hero-left">
          <h1 className="hero-title">
            Construo sistemas que{' '}
            <span className="gradient-text">resolvem de verdade.</span>
          </h1>

          <p className="hero-sub">
            Sites, apps mobile, APIs e sistemas completos. Do levantamento de
            requisitos ao produto em produção. Trabalho com você para entender o
            problema e entregar a solução certa.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              Ver meus projetos
            </a>
            <a href="#contact" className="btn-ghost">
              Fale comigo
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num gradient-text">5+</span>
              <span className="stat-label">Anos codando</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num gradient-text">10+</span>
              <span className="stat-label">Projetos entregues</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num gradient-text">Full</span>
              <span className="stat-label">Stack</span>
            </div>
          </div>
        </div>

        <div ref={rightRef} className="hero-right">
          <div className="hero-photo-glow" />
          <img
            src="/carlos.webp"
            alt="Carlos Siqueira, desenvolvedor full stack"
            className="hero-photo"
            width={784}
            height={1436}
            fetchPriority="high"
          />
          <p className="hero-tagline">
            Sites · Apps
            <br />
            Sistemas
            <br />
            sob medida
          </p>
        </div>
      </div>
    </section>
  )
}
