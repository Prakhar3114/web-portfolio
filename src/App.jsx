import { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Copy, CheckCircle } from 'lucide-react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Certifications from './sections/Certifications'
import Contact from './sections/Contact'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [copied, setCopied] = useState(false)
  
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const toggleTheme = () => setDarkMode(!darkMode)

  const copyEmail = () => {
    navigator.clipboard.writeText('prakhargarg3114@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Calculate mouse delta for subtle interactive blobs
  const deltaX = typeof window !== 'undefined' ? (mousePosition.x - window.innerWidth / 2) * 0.05 : 0
  const deltaY = typeof window !== 'undefined' ? (mousePosition.y - window.innerHeight / 2) * 0.05 : 0

  return (
    <div className="relative min-h-screen">
      
      {/* Scroll Progress Bar Fixed to Top */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primaryBlue to-cyan-400 z-[100] origin-left shadow-md shadow-primaryBlue/20"
        style={{ scaleX }}
      />
      
      {/* Background ambient blobs synced to mouse position */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
        <motion.div animate={{ x: mousePosition.x * 0.05, y: mousePosition.y * 0.05 }} transition={{ type: "spring", damping: 50, stiffness: 200 }} className="absolute md:top-[10%] md:left-[10%] -top-20 -left-20 w-[40vw] h-[40vw] bg-blue-600/10 dark:bg-blue-600/5 rounded-full blur-[120px] opacity-70"></motion.div>
          
        <motion.div animate={{ x: mousePosition.x * -0.05, y: mousePosition.y * -0.08 }} transition={{ type: "spring", damping: 60, stiffness: 150 }} className="absolute md:bottom-[20%] md:right-[15%] -bottom-20 -right-20 w-[35vw] h-[35vw] bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-[100px] opacity-60"></motion.div>
          
        <motion.div animate={{ x: mousePosition.x * 0.08, y: mousePosition.y * -0.05 }} transition={{ type: "spring", damping: 40, stiffness: 180 }} className="absolute top-[40%] left-[60%] w-[30vw] h-[30vw] bg-teal-500/10 dark:bg-teal-500/5 rounded-full blur-[100px] opacity-50 hidden md:block"></motion.div>
      </div>

      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <Footer />

      {/* Quick Connect FAB widget */}
      <button 
        onClick={copyEmail}
        className="fixed bottom-8 right-8 z-[90] p-4 rounded-full bg-primaryBlue text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:scale-110 hover:bg-primaryBlueDark active:scale-95 transition-all group flex items-center justify-center outline-none border-none"
        aria-label="Copy Email"
      >
        {copied ? <CheckCircle size={24} className="animate-in zoom-in" /> : <Copy size={24} />}
        <span className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap pointer-events-none">
          {copied ? "Address Copied!" : "Quick Copy Email"}
        </span>
      </button>

    </div>
  )
}

export default App
