import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Menu, X, ExternalLink } from 'lucide-react'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar({ darkMode, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass-premium py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        
        <a href="#" className="flex items-center gap-2 text-2xl font-black font-sans tracking-tight hover:opacity-80 transition-opacity">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-primaryBlue to-cyan-400 flex items-center justify-center text-white text-lg shadow-lg">P</span>
          <span className="text-slate-900 dark:text-white">rakhar<span className="text-primaryBlue">.</span></span>
        </a>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="relative group text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-primaryBlue dark:hover:text-cyan-400 transition-colors">
                  {link.name}
                  <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primaryBlue to-cyan-400 transition-all duration-300 group-hover:w-full rounded-full opacity-0 group-hover:opacity-100"></span>
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-5 border-l border-slate-300 dark:border-slate-700 pl-6">
            <button onClick={toggleTheme} className="p-2.5 rounded-full bg-slate-200/50 hover:bg-slate-300/50 dark:bg-slate-800/50 dark:hover:bg-slate-700/50 transition-colors text-slate-700 dark:text-cyan-400 shadow-inner" aria-label="Toggle Theme">
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a href="https://drive.google.com/file/d/1uNaT8Lx1cglmB4ydBieFcQhMbUjzTmzN/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hidden xl:flex px-6 py-2.5 rounded-xl bg-gradient-to-r from-primaryBlue to-cyan-500 text-white text-sm font-bold shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:scale-105 transition-all items-center gap-2 border border-blue-400/20">
              Resume <ExternalLink size={16} />
            </a>
          </div>
        </nav>

        {/* Mobile menu toggle */}
        <div className="flex lg:hidden items-center gap-4">
          <button onClick={toggleTheme} className="p-2.5 rounded-full bg-slate-200/50 dark:bg-slate-800/50 text-slate-700 dark:text-cyan-400">
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2.5 text-slate-800 dark:text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full glass-premium shadow-2xl border-t border-slate-200/50 dark:border-slate-800/50 overflow-hidden lg:hidden flex flex-col z-40"
          >
            <div className="p-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-bold text-slate-800 dark:text-slate-200 hover:text-primaryBlue dark:hover:text-cyan-400 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 px-4 py-3 rounded-xl transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a href="https://drive.google.com/file/d/1uNaT8Lx1cglmB4ydBieFcQhMbUjzTmzN/view?usp=sharing" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="mt-4 flex items-center justify-center gap-2 w-full px-5 py-4 rounded-xl bg-gradient-to-r from-primaryBlue to-cyan-500 text-white font-bold shadow-lg">
                View Resume <ExternalLink size={18} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
