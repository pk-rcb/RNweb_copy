import { useState, useEffect } from 'react'

const AnimatedBackground = ({ scrollY }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const handleMouseMove = (event) => {
      // Calculate relative mouse position to move blobs
      const x = event.clientX / window.innerWidth
      const y = event.clientY / window.innerHeight
      
      setMousePosition({ x, y })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])
  
  // Parallax effect based on mouse movement and scroll
  const getTransform = (baseX, baseY, intensity = 1) => {
    const mouseX = (mousePosition.x - 0.5) * intensity * 50
    const mouseY = (mousePosition.y - 0.5) * intensity * 50
    const scrollEffect = scrollY * 0.05
    
    return {
      transform: `translate(${baseX + mouseX}px, ${baseY + mouseY - scrollEffect}px)`
    }
  }
  
  return (
    <div className="animated-bg">
      <div 
        className="blob blob-1" 
        style={getTransform(-50, -50, 0.5)}
      />
      <div 
        className="blob blob-2" 
        style={getTransform(50, 50, 0.8)}
      />
      <div 
        className="blob blob-3" 
        style={getTransform(0, 0, 0.3)}
      />
    </div>
  )
}

export default AnimatedBackground