"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { motion } from "framer-motion"
import Image from "next/image"
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa"
import profile_pic from "@/assets/profile_pic.jpg"

const Hero = () => {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    const mountElement = mountRef.current;

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

    renderer.setSize(window.innerWidth, window.innerHeight)
    mountElement.appendChild(renderer.domElement)

    const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16)
    const material = new THREE.MeshPhongMaterial({
      color: 0x3498db,
      wireframe: true,
      emissive: 0x3498db,
      emissiveIntensity: 0.5,
    })
    const torusKnot = new THREE.Mesh(geometry, material)

    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 5000
    const posArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 100
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: 0xffffff,
    })
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)

    scene.add(torusKnot, particlesMesh)

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0xffffff, 1)
    pointLight.position.set(25, 25, 25)
    scene.add(pointLight)

    camera.position.z = 30

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.enableZoom = false

    const animate = () => {
      requestAnimationFrame(animate)

      torusKnot.rotation.x += 0.01
      torusKnot.rotation.y += 0.01

      particlesMesh.rotation.x += 0.001
      particlesMesh.rotation.y += 0.001

      controls.update()

      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      mountElement?.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div ref={mountRef} className="absolute inset-0 z-0" />
      <div className="relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Image
            src={profile_pic} // Replace with your actual image path
            alt="Ibrahim Farrukh"
            width={200}
            height={200}
            className="w-48 h-48 object-cover rounded-full border-4 border-blue-500 shadow-lg"
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-4 gradient-text"
        >
          Ibrahim Farrukh
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-8"
        >
          Computer Science Student | Researcher | Developer
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center items-center gap-6 mb-8"
        >
          <div className="relative group">
            <FaEnvelope className="text-2xl text-white group-hover:text-blue-400 transition-colors duration-300 cursor-pointer" />
            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 py-1 px-3 bg-gray-800 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              ibrahimfarrukh000@gmail.com
            </span>
          </div>
          <div className="relative group">
            <FaPhone className="text-2xl text-white group-hover:text-blue-400 transition-colors duration-300 cursor-pointer" />
            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 py-1 px-3 bg-gray-800 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              +92 320 4058662
            </span>
          </div>
          <a
            href="https://www.linkedin.com/in/muhammad-ibrahim-farrukh/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors duration-300"
            title="LinkedIn"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="https://github.com/fireblaster000"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors duration-300"
            title="GitHub"
          >
            <FaGithub className="text-2xl" />
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative"
        >
          <a
            href="#about"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Explore My Work
          </a>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-50 -z-10"></div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

