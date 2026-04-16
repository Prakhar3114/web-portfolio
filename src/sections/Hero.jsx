import { motion } from 'framer-motion'
import { ArrowDown, Download, Mail, ExternalLink, ChevronRight, Github } from 'lucide-react'
import { useState, useEffect } from 'react'

function Typewriter({ words, typingSpeed = 80, pauseTime = 2500 }) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [reverse, setReverse] = useState(false)
  const [blink, setBlink] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => setBlink((prev) => !prev), 500)
    return () => clearTimeout(timeout)
  }, [blink])

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const wait = setTimeout(() => setReverse(true), pauseTime)
      return () => clearTimeout(wait)
    }

    if (subIndex === 0 && reverse) {
      setReverse(false)
      setIndex((prev) => (prev + 1) % words.length)
      return
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1))
    }, reverse ? typingSpeed / 2 : typingSpeed)

    return () => clearTimeout(timeout)
  }, [subIndex, index, reverse, words, typingSpeed, pauseTime])

  return (
    <span className="inline-flex items-center min-h-[1.5em] text-cyan-400">
      {words[index].substring(0, subIndex)}
      <span className={`inline-block w-0.5 h-[1.1em] bg-cyan-400 translate-y-0.5 ml-1 transition-opacity duration-100 ${blink ? 'opacity-100' : 'opacity-0'}`}></span>
    </span>
  )
}

export default function Hero() {
  const titles = [
    "AI Engineer",
    "Data Scientist",
    "Problem Solver",
    "Full-Stack Developer"
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-24 pb-12 overflow-hidden">
      
      {/* Absolute Ambient Glow dedicated entirely to the hero section for premium pop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primaryBlue/10 dark:bg-primaryBlue/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start w-full">
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-8 flex items-center gap-2 px-5 py-2 rounded-full glass-premium text-sm font-semibold tracking-wide shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-slate-700 dark:text-slate-200">Open to Opportunities</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 font-sans w-full"
          >
            Hi, I'm <span className="text-gradient drop-shadow-xl">Prakhar Garg</span>
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-2xl md:text-4xl text-slate-700 dark:text-slate-300 font-bold mb-8 tracking-tight flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start min-h-[4rem]"
          >
            <Typewriter words={titles} />
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="max-w-2xl text-lg text-slate-600 dark:text-slate-400 mb-12 leading-relaxed font-medium"
          >
            Focused on architecting highly optimized solutions for real-world problems using advanced Artificial Intelligence, Machine Learning, and Data Analytics. Creating measurable impact through scalable code and deep insights.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <a href="#projects" className="px-8 py-4 rounded-xl bg-gradient-to-r from-primaryBlue to-cyan-500 text-white font-bold hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:scale-105 transition-all flex items-center justify-center gap-2 group border border-blue-400/30">
              View Projects
              <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a href="https://github.com/Prakhar3114" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-xl glass-premium font-bold hover:-translate-y-1 transition-all flex items-center justify-center gap-3 group text-slate-800 dark:text-white">
              <Github className="group-hover:rotate-12 transition-transform" size={20} /> 
              GitHub
            </a>
            <a href="https://drive.google.com/file/d/1uNaT8Lx1cglmB4ydBieFcQhMbUjzTmzN/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-xl glass-premium font-bold hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group text-slate-800 dark:text-white">
              Resume <ExternalLink className="group-hover:scale-110 transition-transform" size={18} />
            </a>
          </motion.div>
        </div>

        {/* Profile Image with Continuous Floating */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
          className="flex-shrink-0 relative mt-16 md:mt-0"
        >
          {/* Bobbing Motion applied separately to inner container */}
          <motion.div
            animate={{ y: [-12, 12, -12] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative group cursor-pointer"
          >
            {/* Outer Neon Glow */}
            <div className="absolute inset-[-10px] bg-gradient-to-tr from-primaryBlue via-purple-500 to-cyan-400 rounded-full blur-2xl opacity-50 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-1000"></div>
            
            {/* Image Container */}
            <div className="w-64 h-64 md:w-80 md:h-80 xl:w-96 xl:h-96 rounded-full border-4 border-white dark:border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden flex items-center justify-center bg-slate-200 dark:bg-slate-800 group-hover:shadow-[0_0_50px_rgba(37,99,235,0.5)] transition-all duration-500 z-10">
              <img 
                src="/profile.jpg" 
                alt="Prakhar Garg" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Prakhar+Garg&background=0D8ABC&color=fff&size=512&font-size=0.33' }}
              />
            </div>
            
            {/* Inner Ring Glow */}
            <div className="absolute inset-0 rounded-full border-2 border-cyan-400/50 mix-blend-overlay z-20 pointer-events-none"></div>
          </motion.div>
        </motion.div>

      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-400 z-10"
      >
        <a href="#about" aria-label="Scroll to About" className="p-3 glass-premium rounded-full hover:text-primaryBlue hover:scale-110 transition-all flex items-center justify-center"><ArrowDown size={24} /></a>
      </motion.div>
    </section>
  )
}
