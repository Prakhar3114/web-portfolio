import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-8 border-t border-slate-200 dark:border-slate-800/50 relative z-10 bg-lightBg/50 dark:bg-darkBg/50 mt-20">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="font-bold text-xl tracking-tight text-slate-800 dark:text-white">Prakhar<span className="text-primaryBlue">.</span></p>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">AI & Data Science Enthusiast</p>
        </div>
        
        <div className="flex gap-4">
          <a href="https://github.com/Prakhar3114" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700 transition-all text-slate-700 dark:text-slate-300 hover:text-primaryBlue dark:hover:text-primaryBlue hover:-translate-y-1">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/prakhar-garg-b78304316/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700 transition-all text-slate-700 dark:text-slate-300 hover:text-primaryBlue dark:hover:text-primaryBlue hover:-translate-y-1">
            <Linkedin size={20} />
          </a>
          <a href="mailto:prakhargarg3114@gmail.com" className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700 transition-all text-slate-700 dark:text-slate-300 hover:text-primaryBlue dark:hover:text-primaryBlue hover:-translate-y-1">
            <Mail size={20} />
          </a>
        </div>
        
        <div className="text-sm font-medium text-slate-500 dark:text-slate-400">
          &copy; {new Date().getFullYear()} Prakhar Garg. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
