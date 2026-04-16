import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Bot, Hand, Stethoscope, X, Info, Leaf, Music, BarChart } from 'lucide-react'
import { useState, useEffect } from 'react'
import SectionHeading from '../components/SectionHeading'
import TiltCard from '../components/TiltCard'

const projects = [
  {
    id: 1,
    title: "AgroVision",
    short_desc: "Intelligent Plant Disease Detection system assisting real-world agriculture.",
    description: "An advanced convolutional neural network engineered to assist agricultural sectors by analyzing raw leaf imagery to diagnose crop health anomalies instantly.",
    problem: "Farmers globally lose catastrophic percentages of agricultural yield annually due to unidentified, rapidly spreading, or misdiagnosed crop diseases that are imperceptible to the human eye early on.",
    approach: "Deployed deep Convolutional Neural Networks (CNN) to mathematically classify complex pixel structures in leaf images across numerous disease categories, wrapping the inference engine in an accessible GUI.",
    tech: ["Python", "TensorFlow", "CNN", "Deep Learning", "Computer Vision"],
    github: "https://github.com/Prakhar3114/AgroVision",
    demo: "#",
    icon: <Leaf size={28} />
  },
  {
    id: 2,
    title: "Music Genre Classifier",
    short_desc: "Deep learning audio feature extraction mapping waveforms to genres.",
    description: "A robust machine learning pipeline capable of digesting raw audio `.wav` files and mathematically separating them into distinct musical genres using their foundational acoustic geometry.",
    problem: "Manual tagging, cataloging, and database sorting of massive audio repositories is cripplingly expensive and time-consuming for streaming services and DSPs.",
    approach: "Extracted Mel-Frequency Cepstral Coefficients (MFCCs) and spectral bandwidths from audio files using Librosa, passing the data tensors into a trained neural network classifier to detect invisible acoustic patterns.",
    tech: ["Python", "Librosa", "Neural Networks", "TensorFlow", "Audio Processing"],
    github: "https://github.com/Prakhar3114/music-genre-classifier",
    demo: "#",
    icon: <Music size={28} />
  },
  {
    id: 3,
    title: "AI Healthcare Chatbot",
    short_desc: "AI conversational agent for healthcare queries and rapid triage diagnostics.",
    description: "An advanced, AI-powered conversational agent engineered specifically for accurately handling healthcare queries and triage. Leverages Transformer architecture to parse context and provide highly intelligent, safety-conscious responses.",
    problem: "Patients frequently experience excessive wait times for answers to fundamental health and symptom queries, leading to bottlenecked medical workflows and delayed self-care insight.",
    approach: "Engineered a robust pipeline fine-tuning DistilGPT-2 via HuggingFace transformers. Mapped healthcare NLP taxonomies using NLTK to parse queries contextually. Integrated via a scalable Streamlit frontend to persist session state effortlessly.",
    tech: ["Python", "Streamlit", "Hugging Face", "DistilGPT-2", "NLTK", "Transformers"],
    github: "https://github.com/Prakhar3114/ai_healthcare_chatbot",
    demo: "#",
    icon: <Stethoscope size={28} />
  },
  {
    id: 4,
    title: "Virtual Hand Mouse",
    short_desc: "Gesture-based Human-Computer Interaction physical bypass system.",
    description: "A frictionless, gesture-based Human-Computer Interaction system. By capturing real-time video feeds, it precisely maps hand movements coordinates to cursor controls, enabling users to operate their machine entirely hands-free.",
    problem: "Traditional physical peripheral hardware (mice) limits physical interactivity and presents accessibility challenges for touchless or remote usage environments.",
    approach: "Utilized OpenCV for real-time video digestion and Google's MediaPipe for pinpointing multi-dimensional hand-landmark vectors. Calculated exact heuristic geometries internally to map index/thumb distance flags to system-level mouse click macros.",
    tech: ["Python", "OpenCV", "MediaPipe", "Computer Vision", "PyAutoGUI"],
    github: "https://github.com/Prakhar3114/virtual_hand_mouse",
    demo: "#",
    icon: <Hand size={28} />
  },
  {
    id: 5,
    title: "Coding Copilot Chatbot",
    short_desc: "Intelligent AI pair-programmer utilizing state-of-the-art open-source LLMs.",
    description: "An intelligent AI pair-programmer interface built to assist developers in debugging and scaffolding architecture. It parses coding queries and delivers robust snippets by leveraging state-of-the-art open-source LLMs.",
    problem: "Developers frequently break focus states to scan through massive documentations or stack overflows to debug simple logic flow errors.",
    approach: "Bridged the lightning-fast Groq API with Meta's LLaMa-3 weights. Sent highly structured, constraint-based system prompts enforcing code-only returns and Markdown-injected responses, eliminating narrative hallucination.",
    tech: ["Python", "Groq API", "LLaMa-3", "Prompt Engineering", "Large Language Models"],
    github: "https://github.com/Prakhar3114/coding-copilot",
    demo: "#",
    icon: <Bot size={28} />
  },
  {
    id: 6,
    title: "Celebal Power BI Suite",
    short_desc: "Enterprise-grade business intelligence dashboards synthesizing raw SQL telemetry.",
    description: "A suite of highly interactive, enterprise-grade business intelligence dashboards synthesizing raw relational SQL records into actionable strategic executive insights.",
    problem: "Businesses rapidly accrue millions of rows of disjointed telemetry data without proper visualization logic, actively crippling executive strategic decision-making.",
    approach: "Built strict relational data models pulling from integrated SQL pipelines directly into Power BI. Designed rich visual DAX matrices exposing hidden revenue streams, supply chain friction, and customer drop-off points natively.",
    tech: ["Power BI", "DAX", "SQL", "Data Modeling", "Business Intelligence"],
    github: "https://github.com/Prakhar3114/celebal",
    demo: "#",
    icon: <BarChart size={28} />
  }
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => { document.body.style.overflow = 'auto' }
  }, [selectedProject])

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading>Featured Projects</SectionHeading>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 relative z-10">
          {projects.map((project, index) => (
            <motion.div
              layoutId={`project-container-${project.id}`}
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <TiltCard className="h-full group">
                <div className="p-8 flex flex-col h-full relative z-10 w-full overflow-hidden rounded-[2.5rem] glass-premium glass-hover border-transparent hover:border-cyan-400/50">
                  
                  {/* Glowing Indicator Ring */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primaryBlue/10 rounded-bl-[100%] transition-transform duration-500 group-hover:scale-110 group-hover:bg-primaryBlue/20 pointer-events-none"></div>

                  <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm transform group-hover:-translate-y-1 duration-300 pointer-events-none">
                    <Info size={12} /> Click Details
                  </div>

                  <div className="flex justify-between items-start mb-8 relative z-10">
                    <motion.div layoutId={`icon-${project.id}`} className="p-4 bg-primaryBlue/10 text-primaryBlue rounded-2xl group-hover:bg-gradient-to-br group-hover:from-primaryBlue group-hover:to-cyan-400 group-hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(37,99,235,0.1)] group-hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] group-hover:-translate-y-2">
                      {project.icon}
                    </motion.div>
                  </div>
                  
                  <motion.h3 layoutId={`title-${project.id}`} className="text-2xl font-bold mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primaryBlue group-hover:to-cyan-400 transition-all md:leading-snug">
                    {project.title}
                  </motion.h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-8 flex-1 leading-relaxed">
                    {project.short_desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-200/50 dark:border-slate-700/50">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span key={i} className="text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 bg-slate-100 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 rounded-lg group-hover:bg-primaryBlue/10 group-hover:text-primaryBlue transition-colors shadow-inner border border-slate-200/50 dark:border-slate-700/50">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 text-slate-400">+ MORE</span>}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Advanced Full-Screen Interactive Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8 backdrop-blur-3xl bg-slate-900/60"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              layoutId={`project-container-${selectedProject.id}`}
              role="dialog"
              aria-modal="true"
              className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-white/40 dark:border-slate-700/50 shadow-[0_0_100px_rgba(0,0,0,0.5)] w-full max-w-5xl max-h-[95vh] overflow-y-auto rounded-[2.5rem] relative flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-3 bg-slate-200/50 dark:bg-slate-800/50 hover:bg-red-500/10 hover:text-red-500 rounded-full transition-colors z-50 backdrop-blur-md"
              >
                <X size={24} />
              </button>

              <div className="w-full md:w-2/5 p-8 lg:p-12 bg-gradient-to-br from-primaryBlue/5 to-cyan-400/10 dark:from-primaryBlue/10 dark:to-cyan-900/20 border-b md:border-b-0 md:border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute -top-32 -left-32 w-64 h-64 bg-primaryBlue/20 rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                  <motion.div layoutId={`icon-${selectedProject.id}`} className="inline-block p-5 bg-gradient-to-br from-primaryBlue to-cyan-400 text-white rounded-3xl shadow-xl shadow-primaryBlue/30 mb-8">
                    {selectedProject.icon}
                  </motion.div>
                  <motion.h3 layoutId={`title-${selectedProject.id}`} className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-white leading-tight">
                    {selectedProject.title}
                  </motion.h3>
                  <p className="text-primaryBlue font-semibold text-lg max-w-sm">{selectedProject.short_desc}</p>
                </div>
                
                <div className="mt-12 relative z-10 flex flex-col gap-4">
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="w-full py-4 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold tracking-wide flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]">
                    <Github size={20} /> View Github Specs
                  </a>
                  <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="w-full py-4 rounded-xl glass-premium font-bold tracking-wide flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all outline outline-1 outline-primaryBlue/30 hover:outline-primaryBlue">
                    <ExternalLink size={20} /> Live Verification (If Available)
                  </a>
                </div>
              </div>

              <div className="w-full md:w-3/5 p-8 lg:p-12 flex flex-col gap-8">
                
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-primaryBlue mb-3 block">Architectural Overview</h4>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">{selectedProject.description}</p>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-slate-100/50 dark:bg-slate-800/30 p-6 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 shadow-inner hover:-translate-y-1 transition-transform">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-red-500/80 mb-3 block">The Problem Variable</h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{selectedProject.problem}</p>
                  </div>
                  
                  <div className="bg-slate-100/50 dark:bg-slate-800/30 p-6 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 shadow-inner hover:-translate-y-1 transition-transform">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-green-500/80 mb-3 block">The Engineered Approach</h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{selectedProject.approach}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-primaryBlue mb-4 block">Complete Tech Matrix Layer</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, i) => (
                      <span key={i} className="px-4 py-2 bg-white/50 dark:bg-slate-900 text-sm font-semibold rounded-xl text-slate-800 dark:text-slate-200 border border-slate-200 shadow-sm dark:border-slate-700 hover:border-primaryBlue/50 hover:bg-primaryBlue/5 hover:text-primaryBlue transition-colors cursor-default">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}
