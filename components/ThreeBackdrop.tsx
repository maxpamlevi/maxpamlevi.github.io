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
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      200
    )
    camera.position.set(0, 1.5, 14)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8))
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setClearColor(0x000000, 0)
    container.appendChild(renderer.domElement)

    scene.fog = new THREE.FogExp2(0x0f172a, 0.035)

    const lights = new THREE.Group()
    const ambient = new THREE.AmbientLight(0xffffff, 0.6)
    const keyLight = new THREE.DirectionalLight(0xffe9c2, 1.1)
    keyLight.position.set(6, 8, 10)
    const rimLight = new THREE.DirectionalLight(0x60a5fa, 0.7)
    rimLight.position.set(-8, -4, -6)
    lights.add(ambient, keyLight, rimLight)
    scene.add(lights)

    const backgroundStars = new THREE.BufferGeometry()
    const starCount = 2200
    const starPositions = new Float32Array(starCount * 3)
    for (let i = 0; i < starCount; i += 1) {
      const i3 = i * 3
      const radius = 60 * Math.random()
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      starPositions[i3] = Math.sin(phi) * Math.cos(theta) * radius
      starPositions[i3 + 1] = Math.sin(phi) * Math.sin(theta) * radius
      starPositions[i3 + 2] = Math.cos(phi) * radius
    }
    backgroundStars.setAttribute("position", new THREE.BufferAttribute(starPositions, 3))
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.18,
      transparent: true,
      opacity: 0.7,
      depthWrite: false,
    })
    const stars = new THREE.Points(backgroundStars, starMaterial)
    scene.add(stars)

    const planetGroup = new THREE.Group()
    scene.add(planetGroup)

    const planetGeometry = new THREE.SphereGeometry(1, 36, 36)
    const moonGeometry = new THREE.SphereGeometry(0.22, 20, 20)
    const ringGeometry = new THREE.RingGeometry(1.5, 2.4, 64)
    const atmosphereGeometry = new THREE.SphereGeometry(1.06, 30, 30)

    const planets: {
      pivot: THREE.Group
      mesh: THREE.Mesh
      atmosphere: THREE.Mesh
      ring?: THREE.Mesh
      moonPivot?: THREE.Group
      moon?: THREE.Mesh
      rotationSpeed: number
      orbitSpeed: number
    }[] = []

    const createPlanet = (options: {
      radius: number
      color: number
      emissive: number
      roughness: number
      metalness: number
      distance: number
      tilt: number
      rotationSpeed: number
      orbitSpeed: number
      ring?: { inner: number; outer: number; color: number; opacity: number }
      moon?: { distance: number; speed: number }
      offset?: { y: number; z: number }
    }) => {
      const pivot = new THREE.Group()
      pivot.rotation.x = options.tilt
      planetGroup.add(pivot)

      const material = new THREE.MeshStandardMaterial({
        color: options.color,
        emissive: options.emissive,
        emissiveIntensity: 0.15,
        roughness: options.roughness,
        metalness: options.metalness,
      })
      const mesh = new THREE.Mesh(planetGeometry, material)
      mesh.scale.setScalar(options.radius)
      mesh.position.x = options.distance
      mesh.position.y = options.offset?.y ?? 0
      mesh.position.z = options.offset?.z ?? 0
      pivot.add(mesh)

      const atmosphereMaterial = new THREE.MeshBasicMaterial({
        color: 0x93c5fd,
        transparent: true,
        opacity: 0.15,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
      })
      const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial)
      atmosphere.scale.copy(mesh.scale).multiplyScalar(1.06)
      atmosphere.position.copy(mesh.position)
      pivot.add(atmosphere)

      let ring: THREE.Mesh | undefined
      if (options.ring) {
        const ringMaterial = new THREE.MeshBasicMaterial({
          color: options.ring.color,
          transparent: true,
          opacity: options.ring.opacity,
          side: THREE.DoubleSide,
        })
        ring = new THREE.Mesh(ringGeometry, ringMaterial)
        ring.scale.setScalar(options.ring.outer / 2.4)
        ring.rotation.x = Math.PI / 2.3
        ring.position.copy(mesh.position)
        pivot.add(ring)
      }

      let moonPivot: THREE.Group | undefined
      let moon: THREE.Mesh | undefined
      if (options.moon) {
        moonPivot = new THREE.Group()
        moonPivot.position.copy(mesh.position)
        pivot.add(moonPivot)
        const moonMaterial = new THREE.MeshStandardMaterial({
          color: 0xf8fafc,
          roughness: 0.8,
          metalness: 0.05,
        })
        moon = new THREE.Mesh(moonGeometry, moonMaterial)
        moon.position.x = options.moon.distance
        moonPivot.add(moon)
      }

      planets.push({
        pivot,
        mesh,
        atmosphere,
        ring,
        moonPivot,
        moon,
        rotationSpeed: options.rotationSpeed,
        orbitSpeed: options.orbitSpeed,
      })
    }

    createPlanet({
      radius: 1.35,
      color: 0xf59e0b,
      emissive: 0x78350f,
      roughness: 0.55,
      metalness: 0.1,
      distance: 3.2,
      tilt: 0.25,
      rotationSpeed: 0.003,
      orbitSpeed: 0.0006,
      ring: { inner: 1.6, outer: 2.4, color: 0xfde68a, opacity: 0.4 },
      moon: { distance: 2.1, speed: 0.003 },
      offset: { y: 0.4, z: -1.2 },
    })

    createPlanet({
      radius: 0.85,
      color: 0x38bdf8,
      emissive: 0x0c4a6e,
      roughness: 0.35,
      metalness: 0.2,
      distance: -4.4,
      tilt: -0.1,
      rotationSpeed: 0.0045,
      orbitSpeed: 0.0004,
      moon: { distance: 1.4, speed: 0.004 },
      offset: { y: -0.6, z: 1.8 },
    })

    createPlanet({
      radius: 1.05,
      color: 0x94a3b8,
      emissive: 0x111827,
      roughness: 0.75,
      metalness: 0.05,
      distance: 6.2,
      tilt: 0.4,
      rotationSpeed: 0.002,
      orbitSpeed: 0.00025,
      ring: { inner: 1.4, outer: 2.1, color: 0x64748b, opacity: 0.25 },
      offset: { y: 0.8, z: 2.6 },
    })

    let frameId = 0
    let targetMouseX = 0
    let targetMouseY = 0
    let currentMouseX = 0
    let currentMouseY = 0
    const clock = new THREE.Clock()

    const animate = () => {
      const elapsed = clock.getElapsedTime()
      currentMouseX += (targetMouseX - currentMouseX) * 0.06
      currentMouseY += (targetMouseY - currentMouseY) * 0.06

      planetGroup.rotation.y = currentMouseX * 0.2 + elapsed * 0.02
      planetGroup.rotation.x = currentMouseY * 0.15

      planets.forEach((planet, index) => {
        planet.pivot.rotation.y += planet.orbitSpeed
        planet.mesh.rotation.y += planet.rotationSpeed
        planet.atmosphere.rotation.y -= planet.rotationSpeed * 0.3
        if (planet.ring) {
          planet.ring.rotation.z += 0.0006
        }
        if (planet.moonPivot && planet.moon) {
          planet.moonPivot.rotation.y += 0.003 + index * 0.0008
          planet.moon.rotation.y += 0.01
        }
      })

      stars.rotation.y = elapsed * 0.01

      camera.position.x = currentMouseX * 2.2
      camera.position.y = 1.5 + currentMouseY * 1.1
      camera.position.z = 14
      camera.lookAt(0, 0, 0)

      renderer.render(scene, camera)
      frameId = window.requestAnimationFrame(animate)
    }
    animate()

    const handlePointerMove = (event: PointerEvent) => {
      const x = event.clientX / window.innerWidth
      const y = event.clientY / window.innerHeight
      targetMouseX = (x - 0.5) * 2
      targetMouseY = (y - 0.5) * 2 * -1
    }

    const handlePointerLeave = () => {
      targetMouseX = 0
      targetMouseY = 0
    }

    const handleResize = () => {
      const { innerWidth, innerHeight } = window
      camera.aspect = innerWidth / innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(innerWidth, innerHeight)
    }
    window.addEventListener("resize", handleResize)
    window.addEventListener("pointermove", handlePointerMove)
    window.addEventListener("pointerleave", handlePointerLeave)
    handleResize()

    return () => {
      window.cancelAnimationFrame(frameId)
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("pointerleave", handlePointerLeave)
      backgroundStars.dispose()
      starMaterial.dispose()
      planetGeometry.dispose()
      moonGeometry.dispose()
      ringGeometry.dispose()
      atmosphereGeometry.dispose()
      planets.forEach((planet) => {
        ;(planet.mesh.material as THREE.Material).dispose()
        ;(planet.atmosphere.material as THREE.Material).dispose()
        if (planet.ring) {
          ;(planet.ring.material as THREE.Material).dispose()
        }
        if (planet.moon) {
          ;(planet.moon.material as THREE.Material).dispose()
        }
      })
      renderer.dispose()
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={containerRef} className="fixed inset-0 -z-10" aria-hidden="true" />
}
