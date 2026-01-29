"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function ThreeBackdrop() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      55,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    )
    camera.position.set(0, 0, 6)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    renderer.setSize(container.clientWidth, container.clientHeight)
    container.appendChild(renderer.domElement)

    const group = new THREE.Group()
    scene.add(group)

    const wireGeometry = new THREE.IcosahedronGeometry(1.25, 1)
    const wireMaterial = new THREE.MeshBasicMaterial({
      color: 0x0f172a,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    })
    const wire = new THREE.Mesh(wireGeometry, wireMaterial)
    group.add(wire)

    const dotsGeometry = new THREE.BufferGeometry()
    const count = 200
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i += 1) {
      const radius = 2.4 + Math.random() * 1.6
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi)
    }
    dotsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    const dotsMaterial = new THREE.PointsMaterial({
      color: 0x0f172a,
      size: 0.02,
      transparent: true,
      opacity: 0.35,
    })
    const dots = new THREE.Points(dotsGeometry, dotsMaterial)
    group.add(dots)

    const ringGeometry = new THREE.TorusGeometry(1.95, 0.03, 12, 120)
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0xd97706,
      transparent: true,
      opacity: 0.4,
    })
    const ring = new THREE.Mesh(ringGeometry, ringMaterial)
    ring.rotation.x = Math.PI / 3
    ring.rotation.y = Math.PI / 5
    group.add(ring)

    let frameId = 0
    const animate = () => {
      group.rotation.y += 0.002
      group.rotation.x += 0.0015
      ring.rotation.z += 0.003
      renderer.render(scene, camera)
      frameId = window.requestAnimationFrame(animate)
    }
    animate()

    const handleResize = () => {
      const { clientWidth, clientHeight } = container
      camera.aspect = clientWidth / clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(clientWidth, clientHeight)
    }
    window.addEventListener("resize", handleResize)

    return () => {
      window.cancelAnimationFrame(frameId)
      window.removeEventListener("resize", handleResize)
      wireGeometry.dispose()
      wireMaterial.dispose()
      dotsGeometry.dispose()
      dotsMaterial.dispose()
      ringGeometry.dispose()
      ringMaterial.dispose()
      renderer.dispose()
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={containerRef} className="absolute inset-0" aria-hidden="true" />
}
