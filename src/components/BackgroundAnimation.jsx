import React, { useEffect, useRef } from 'react'

export default function BackgroundAnimation() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    // Handle resize
    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    // Track mouse
    const mouse = { x: null, y: null, targetX: null, targetY: null, active: false }

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX
      mouse.targetY = e.clientY
      mouse.active = true
    }

    const handleMouseLeave = () => {
      mouse.active = false
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    // Define Aurora Blobs
    const blobs = [
      {
        x: width * 0.25,
        y: height * 0.3,
        targetX: width * 0.25,
        targetY: height * 0.3,
        radius: Math.min(width, height) * 0.35,
        color1: 'rgba(99, 102, 241, 0.12)', // Indigo
        color2: 'rgba(99, 102, 241, 0.03)',
        vx: 0.2,
        vy: 0.15,
        angle: 0,
        speed: 0.005,
      },
      {
        x: width * 0.75,
        y: height * 0.4,
        targetX: width * 0.75,
        targetY: height * 0.4,
        radius: Math.min(width, height) * 0.4,
        color1: 'rgba(139, 92, 246, 0.1)', // Violet
        color2: 'rgba(139, 92, 246, 0.02)',
        vx: -0.15,
        vy: 0.22,
        angle: Math.PI / 3,
        speed: 0.004,
      },
      {
        x: width * 0.5,
        y: height * 0.75,
        targetX: width * 0.5,
        targetY: height * 0.75,
        radius: Math.min(width, height) * 0.38,
        color1: 'rgba(236, 72, 153, 0.08)', // Rose
        color2: 'rgba(236, 72, 153, 0.01)',
        vx: 0.18,
        vy: -0.18,
        angle: (Math.PI * 2) / 3,
        speed: 0.003,
      },
    ]

    // Floating particles (dust)
    const particles = []
    const particleCount = 28
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        baseSize: Math.random() * 1.5 + 0.5,
        size: 0,
        speedY: -(Math.random() * 0.2 + 0.05),
        alpha: Math.random() * 0.3 + 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.005,
        angle: Math.random() * Math.PI * 2,
      })
    }

    // Main Loop
    const animate = () => {
      // Clear with absolute black matching base background
      ctx.fillStyle = '#080a16'
      ctx.fillRect(0, 0, width, height)

      // Smooth mouse interpolation
      if (mouse.active) {
        if (mouse.x === null) {
          mouse.x = mouse.targetX
          mouse.y = mouse.targetY
        } else {
          mouse.x += (mouse.targetX - mouse.x) * 0.1
          mouse.y += (mouse.targetY - mouse.y) * 0.1
        }
      }

      // 1. Draw and update Aurora Blobs
      blobs.forEach((blob) => {
        // Subtle organic float animation
        blob.angle += blob.speed
        const driftX = Math.sin(blob.angle) * 45
        const driftY = Math.cos(blob.angle) * 45

        // Normal base velocity
        blob.targetX += blob.vx
        blob.targetY += blob.vy

        // Bounce from walls
        if (blob.targetX - blob.radius * 0.5 < 0 || blob.targetX + blob.radius * 0.5 > width) blob.vx *= -1
        if (blob.targetY - blob.radius * 0.5 < 0 || blob.targetY + blob.radius * 0.5 > height) blob.vy *= -1

        let finalX = blob.targetX + driftX
        let finalY = blob.targetY + driftY

        // Interact with cursor: pull auroras slightly towards mouse
        if (mouse.active && mouse.x !== null) {
          const dx = mouse.x - finalX
          const dy = mouse.y - finalY
          const dist = Math.sqrt(dx * dx + dy * dy)
          const maxInfluence = 600

          if (dist < maxInfluence) {
            const force = (1 - dist / maxInfluence) * 0.15
            finalX += dx * force
            finalY += dy * force
          }
        }

        // Interpolate blob positions for liquid smoothness
        blob.x += (finalX - blob.x) * 0.08
        blob.y += (finalY - blob.y) * 0.08

        // Draw radial gradient
        const gradient = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.radius)
        gradient.addColorStop(0, blob.color1)
        gradient.addColorStop(0.3, blob.color2)
        gradient.addColorStop(1, 'rgba(8, 10, 22, 0)')

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      // 2. Draw and update Floating Stars
      particles.forEach((p) => {
        // Drift upwards
        p.y += p.speedY
        if (p.y < -10) p.y = height + 10

        // Star magnetic pull to mouse
        let displayX = p.x
        let displayY = p.y

        if (mouse.active && mouse.x !== null) {
          const dx = mouse.x - p.x
          const dy = mouse.y - p.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 180) {
            const force = (1 - dist / 180) * 8
            displayX += (dx / dist) * force
            displayY += (dy / dist) * force
          }
        }

        // Pulsing scale
        p.angle += p.pulseSpeed
        p.size = p.baseSize * (1 + Math.sin(p.angle) * 0.3)

        // Draw soft glowing star
        ctx.fillStyle = `rgba(165, 180, 252, ${p.alpha * (1 + Math.sin(p.angle) * 0.2)})`
        ctx.beginPath()
        ctx.arc(displayX, displayY, p.size, 0, Math.PI * 2)
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-20 w-full h-full pointer-events-none"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}
