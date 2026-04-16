import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

const skillsGroups = [
  { 
    category: "Languages", 
    items: [
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
      { name: "R", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg" },
      { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" }
    ] 
  },
  { 
    category: "Technologies", 
    items: [
      { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
      { name: "Scikit-Learn", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" },
      { name: "OpenCV", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" },
      { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
      { name: "Matplotlib", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg" }
    ] 
  },
  { 
    category: "Tools", 
    items: [
      { name: "Power BI", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
      { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
      { name: "PyCharm", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pycharm/pycharm-original.svg" }
    ] 
  }
]

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      
      {/* Decorative Blur Object */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-400/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading>About Me</SectionHeading>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mt-12">
          
          {/* Biography */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-3xl font-bold mb-2 font-sans tracking-tight text-slate-800 dark:text-white">Catalyzing Impact through Data</h3>
            
            <div className="p-6 rounded-[2rem] glass-premium relative border-l-4 border-l-primaryBlue">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg mb-6">
                I am a passionate and driven 4th-year B.Tech CSE student specializing in <strong className="text-primaryBlue dark:text-cyan-400 font-bold">Data Science and AI</strong>. I am eager to apply my strong analytical skills, machine learning expertise, and problem-solving abilities to conquer sophisticated, real-world challenges. 
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                My core philosophy focuses on building data-driven methodologies that optimize workflows and create measurable real-world impact. I am constantly seeking opportunities to innovate, engineer robust AI/ML architectures, and translate raw analytics into actionable insights while continuously learning and pushing the boundaries of my technical arsenal.
              </p>
            </div>
          </motion.div>

          {/* Logo-Based Technical Arsenal Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-premium p-10 rounded-[2.5rem] relative"
          >
            <h3 className="text-2xl font-bold mb-8 text-slate-800 dark:text-white">Technical Arsenal</h3>
            
            <div className="space-y-8 relative z-10">
              {skillsGroups.map((group, index) => (
                <div key={index}>
                  <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-3">
                    {group.category}
                    <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800/50"></div>
                  </h4>
                  
                  <div className="flex flex-wrap gap-4">
                    {group.items.map((skill, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.15, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative group cursor-pointer"
                      >
                        {/* Tooltip Popup */}
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-slate-900/90 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl pointer-events-none z-50">
                          {skill.name}
                          {/* Triange pointer */}
                          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-t-slate-900/90 border-l-transparent border-r-transparent"></div>
                        </div>

                        {/* Interactive Underglow on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primaryBlue to-cyan-400 rounded-2xl blur-[12px] opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                        
                        {/* Logo Container */}
                        <div className="relative w-16 h-16 flex items-center justify-center bg-white/70 dark:bg-slate-800/80 backdrop-blur-md rounded-xl border border-slate-200 dark:border-slate-700/50 group-hover:border-primaryBlue/50 transition-all duration-300 shadow-sm p-3 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                          <img 
                            src={skill.logo} 
                            alt={skill.name} 
                            className={`w-full h-full object-contain drop-shadow-sm transition-transform duration-300 ${skill.name === 'GitHub' ? 'dark:invert' : ''}`}
                            loading="lazy"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
