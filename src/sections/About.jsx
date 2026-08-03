import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

const skillsGroups = [
  {
    category: "Languages",
    color: "from-blue-500/20 to-indigo-500/20",
    items: [
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" },
      { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
      { name: "R", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg" },
      { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" }
    ]
  },
  {
    category: "ML / Deep Learning",
    color: "from-emerald-500/20 to-teal-500/20",
    items: [
      { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
      { name: "Scikit-Learn", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" },
      { name: "OpenCV", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" },
      { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
      { name: "Matplotlib", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg" }
    ]
  },
  {
    category: "GenAI / NLP",
    color: "from-violet-500/20 to-purple-500/20",
    items: [
      { name: "Hugging Face", logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
      { name: "LLaMA-3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", fallback: "LLaMA" },
      { name: "Groq API", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg", fallback: "Groq" },
      { name: "NLTK", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", fallback: "NLTK" }
    ]
  },
  {
    category: "App Dev & Tools",
    color: "from-orange-500/20 to-amber-500/20",
    items: [
      { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" },
      { name: "Streamlit", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg" },
      { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
      { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" }
    ]
  },
  {
    category: "Data Analytics & BI",
    color: "from-yellow-500/20 to-orange-400/20",
    items: [
      { name: "Power BI", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
      { name: "Excel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", fallback: "Excel" },
      { name: "SQLite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" },
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
      { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" }
    ]
  }
]

export default function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden">

      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/8 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primaryBlue/8 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading>About Me</SectionHeading>

        {/* Bio + Stats Bento */}
        <div className="grid lg:grid-cols-5 gap-8 mt-14 mb-16">

          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 glass-premium rounded-3xl p-10 relative overflow-hidden border border-primaryBlue/20"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-primaryBlue/10 to-transparent rounded-bl-[100%] pointer-events-none"></div>
            <h3 className="text-2xl font-black mb-5 text-slate-900 dark:text-white tracking-tight">AI/ML & Data Science Graduate</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[15px] mb-5">
              B.Tech CSE (Data Science & AI) graduate from <strong className="text-primaryBlue dark:text-cyan-400">SRM University</strong> with hands-on internship and project experience across applied Machine Learning, Computer Vision, NLP, and Generative AI.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
              Built and deployed an end-to-end <strong className="text-slate-800 dark:text-white">CNN-based computer vision system</strong>, a transformer-based healthcare chatbot, and an <strong className="text-slate-800 dark:text-white">LLM-powered coding assistant</strong> using the Groq API and LLaMA-3. Seeking roles in <span className="text-primaryBlue font-semibold">AI/ML Engineering, GenAI Development, or Data Analytics.</span>
            </p>
          </motion.div>

          {/* Stats Bento Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 grid grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {[
              { label: "CGPA", value: "8.25", sub: "/ 10.0", accent: "from-primaryBlue to-cyan-400" },
              { label: "Projects Built", value: "6+", sub: "Deployed", accent: "from-violet-500 to-purple-400" },
              { label: "Certifications", value: "8", sub: "IBM Verified", accent: "from-emerald-500 to-teal-400" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02, y: -2 }}
                className="glass-premium rounded-2xl p-6 text-center relative overflow-hidden group cursor-default"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.accent} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className={`text-3xl lg:text-4xl font-black bg-gradient-to-r ${stat.accent} bg-clip-text text-transparent mb-1`}>
                  {stat.value}
                </div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest">{stat.sub}</div>
                <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <h3 className="text-xl font-black text-slate-900 dark:text-white mb-8 flex items-center gap-4">
            Technical Arsenal
            <div className="flex-1 h-px bg-gradient-to-r from-primaryBlue/40 to-transparent"></div>
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {skillsGroups.map((group, gIndex) => (
              <motion.div
                key={gIndex}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: gIndex * 0.08 }}
                className={`glass-premium rounded-2xl p-5 relative overflow-hidden border border-slate-200/50 dark:border-slate-700/30`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${group.color} opacity-30 pointer-events-none`}></div>
                <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">{group.category}</h4>
                <div className="flex flex-wrap gap-3 relative z-10">
                  {group.items.map((skill, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.2, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative group cursor-pointer"
                    >
                      {/* Tooltip */}
                      <div className="absolute -top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-slate-900/95 text-white text-[10px] font-bold px-2.5 py-1.5 rounded-lg whitespace-nowrap shadow-xl pointer-events-none z-50">
                        {skill.name}
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-t-slate-900/95 border-l-transparent border-r-transparent"></div>
                      </div>
                      {/* Glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primaryBlue to-cyan-400 rounded-xl blur-[8px] opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                      {/* Logo box */}
                      <div className="relative w-12 h-12 flex items-center justify-center bg-white/80 dark:bg-slate-800/90 rounded-xl border border-slate-200 dark:border-slate-700/50 group-hover:border-primaryBlue/50 transition-all duration-300 shadow-sm p-2.5 group-hover:shadow-[0_0_12px_rgba(37,99,235,0.3)]">
                        {skill.fallback ? (
                          <span className="text-[9px] font-black text-slate-700 dark:text-slate-300 text-center leading-tight">{skill.fallback}</span>
                        ) : (
                          <img
                            src={skill.logo}
                            alt={skill.name}
                            className={`w-full h-full object-contain drop-shadow-sm ${skill.name === 'GitHub' ? 'dark:invert' : ''} ${skill.name === 'Flask' ? 'dark:invert' : ''}`}
                            loading="lazy"
                          />
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
