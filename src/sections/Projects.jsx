import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Bot, Hand, Stethoscope, X, Info, Leaf, Music, BarChart } from 'lucide-react'
import { useState, useEffect } from 'react'
import SectionHeading from '../components/SectionHeading'
import TiltCard from '../components/TiltCard'

const projects = [
  {
    id: 1,
    title: "AgroVision",
    short_desc: "CNN-Based Plant Disease Detection App — deployed end-to-end with Flutter + Flask + TFLite.",
    description: "Built and deployed an end-to-end computer vision application for early crop disease diagnosis, featuring a Flutter mobile front-end, a Flask REST backend, and on-device TensorFlow Lite inference for fast, offline predictions.",
    problem: "Farmers globally lose catastrophic crop yield annually due to undetected plant diseases that are imperceptible to the human eye in early stages, with no affordable diagnostic tools available on mobile devices.",
    approach: "Trained a custom CNN using TensorFlow and converted it to TensorFlow Lite for on-device inference. Built a Flutter app for the frontend and a Flask backend hosted on Railway.app after resolving Render memory limitations with TFLite model serving.",
    tech: ["Python", "TensorFlow Lite", "CNN", "OpenCV", "Flask", "Flutter", "Firebase", "SQLite", "Railway.app"],
    github: "https://github.com/Prakhar3114/AgroVision",
    demo: "#",
    icon: <Leaf size={28} />
  },
  {
    id: 2,
    title: "Coding Copilot Chatbot",
    short_desc: "LLM-powered coding assistant using Groq API and LLaMA-3 with structured prompt engineering.",
    description: "An intelligent AI pair-programmer built to assist developers in debugging and code scaffolding. Uses the Groq API to serve LLaMA-3 completions with structured prompt engineering for code-specific query resolution.",
    problem: "Developers frequently break focus states to scan through massive documentation or Stack Overflow to debug simple logic errors, slowing down overall productivity.",
    approach: "Bridged the lightning-fast Groq API with Meta's LLaMA-3 weights. Designed structured system prompts enforcing code-only Markdown-formatted returns, eliminating hallucination while maximising code accuracy.",
    tech: ["Python", "Groq API", "LLaMA-3", "Prompt Engineering", "LLMs"],
    github: "https://github.com/Prakhar3114/coding-copilot",
    demo: "#",
    icon: <Bot size={28} />
  },
  {
    id: 3,
    title: "AI Healthcare Chatbot",
    short_desc: "Transformer-based healthcare chatbot with context-aware multi-turn conversations via Streamlit.",
    description: "An AI-powered conversational agent built during the AICTE internship at Edunet Foundation. Combines rule-based NLP with DistilGPT-2 transformers to handle symptom triage, prescription queries, and appointment scheduling.",
    problem: "Patients face long wait times for basic health queries, leading to bottlenecked medical workflows and delayed self-care decisions — especially in underserved areas.",
    approach: "Fine-tuned DistilGPT-2 via HuggingFace transformers and mapped healthcare NLP taxonomies via NLTK. Integrated session state in Streamlit to enable persistent, multi-turn chat history across conversations.",
    tech: ["Python", "Streamlit", "DistilGPT-2", "Hugging Face", "NLTK", "Transformers"],
    github: "https://github.com/Prakhar3114/ai_healthcare_chatbot",
    demo: "#",
    icon: <Stethoscope size={28} />
  },
  {
    id: 4,
    title: "Music Genre Classifier",
    short_desc: "Audio ML model predicting music genres using Librosa feature extraction + Scikit-learn.",
    description: "A machine learning pipeline that ingests raw .wav audio files and classifies them into distinct music genres using foundational acoustic geometry — Mel-Frequency Cepstral Coefficients (MFCCs) and spectral bandwidth features.",
    problem: "Manual tagging and categorization of massive audio libraries is time-consuming and costly for streaming platforms and digital service providers.",
    approach: "Used Librosa to extract MFCC and spectral bandwidth features from audio files, then trained a supervised Scikit-learn classifier to detect invisible acoustic patterns and accurately predict genre labels.",
    tech: ["Python", "Librosa", "Scikit-learn", "MFCCs", "Audio Processing", "ML Classification"],
    github: "https://github.com/Prakhar3114/music-genre-classifier",
    demo: "#",
    icon: <Music size={28} />
  },
  {
    id: 5,
    title: "Virtual Hand Mouse",
    short_desc: "Gesture-based HCI system — hands-free cursor control via real-time MediaPipe tracking.",
    description: "A frictionless, gesture-based Human-Computer Interaction system that captures real-time video and precisely maps hand landmark coordinates to cursor movements — enabling fully hands-free device operation.",
    problem: "Traditional mouse peripherals limit accessibility for touchless or remote environments and present challenges for users with physical disabilities.",
    approach: "Used OpenCV for real-time video capture and Google MediaPipe for pinpointing multi-dimensional hand-landmark vectors. Mapped index/thumb pinch distances to system-level mouse click macros using PyAutoGUI.",
    tech: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI", "Computer Vision"],
    github: "https://github.com/Prakhar3114/virtual_hand_mouse",
    demo: "#",
    icon: <Hand size={28} />
  },
  {
    id: 6,
    title: "Celebal Power BI Suite",
    short_desc: "Multi-page enterprise BI dashboards with DAX, bookmarks, and star-schema data modeling.",
    description: "A suite of advanced, multi-page enterprise Power BI dashboards built during the Celebal Technologies internship. Synthesizes relational SQL records into actionable strategic business insights for executive stakeholder decision-making.",
    problem: "Businesses accumulate millions of rows of disjointed data without visualization logic, actively crippling executive strategic decision-making and supply chain transparency.",
    approach: "Built strict relational star-schema data models pulling from SQL pipelines into Power BI. Designed rich DAX measures and bookmarks exposing hidden revenue streams, supply chain friction, and customer retention metrics.",
    tech: ["Power BI", "DAX", "SQL", "Star-Schema Modeling", "Bookmarks", "Business Intelligence"],
    github: "https://github.com/Prakhar3114/celebal",
    demo: "#",
    icon: <BarChart size={28} />
  }
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => { document.body.style.overflow = 'auto' }
  }, [selectedProject])

  return (
    <section id="projects" className="py-28 relative overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[1px] bg-gradient-to-r from-transparent via-primaryBlue/30 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading>Featured Projects</SectionHeading>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-16 relative z-10">
          {projects.map((project, index) => (
            <motion.div
              layoutId={`project-container-${project.id}`}
              key={project.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="h-full cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <TiltCard className="h-full group">
                <div className="p-7 flex flex-col h-full relative z-10 w-full overflow-hidden rounded-[2rem] glass-premium border border-slate-200/50 dark:border-slate-700/30 hover:border-primaryBlue/40 hover:shadow-2xl hover:shadow-primaryBlue/10 transition-all duration-300">

                  {/* Glow Corner */}
                  <div className="absolute top-0 right-0 w-28 h-28 bg-primaryBlue/8 rounded-bl-[100%] transition-all duration-500 group-hover:scale-125 group-hover:bg-primaryBlue/15 pointer-events-none"></div>

                  {/* Tooltip */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/80 backdrop-blur-sm text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm pointer-events-none">
                    <Info size={11} /> Click to expand
                  </div>

                  <div className="mb-6 relative z-10">
                    <motion.div
                      layoutId={`icon-${project.id}`}
                      className="inline-flex p-4 bg-primaryBlue/10 text-primaryBlue rounded-2xl group-hover:bg-gradient-to-br group-hover:from-primaryBlue group-hover:to-cyan-400 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-primaryBlue/30 group-hover:-translate-y-1"
                    >
                      {project.icon}
                    </motion.div>
                  </div>

                  <motion.h3
                    layoutId={`title-${project.id}`}
                    className="text-xl font-bold mb-3 group-hover:text-primaryBlue transition-colors leading-snug"
                  >
                    {project.title}
                  </motion.h3>

                  <p className="text-slate-500 dark:text-slate-400 mb-6 flex-1 leading-relaxed text-sm">
                    {project.short_desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-auto pt-5 border-t border-slate-200/50 dark:border-slate-700/30">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span key={i} className="text-[9px] font-black tracking-widest uppercase px-2.5 py-1 bg-slate-100/80 dark:bg-slate-800/60 text-slate-500 dark:text-slate-400 rounded-md group-hover:bg-primaryBlue/8 group-hover:text-primaryBlue transition-colors border border-slate-200/50 dark:border-slate-700/30">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-[9px] font-black tracking-widest uppercase px-2.5 py-1 text-slate-400">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10 backdrop-blur-2xl bg-slate-900/50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              layoutId={`project-container-${selectedProject.id}`}
              role="dialog"
              aria-modal="true"
              className="bg-white/85 dark:bg-[#0d0d0d]/90 backdrop-blur-2xl border border-white/30 dark:border-slate-700/40 shadow-2xl w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-[2.5rem] relative flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-3 bg-slate-200/50 dark:bg-slate-800/60 hover:bg-red-500/15 hover:text-red-500 rounded-full transition-colors z-50"
              >
                <X size={22} />
              </button>

              {/* Left Panel */}
              <div className="w-full md:w-2/5 p-8 lg:p-10 bg-gradient-to-br from-primaryBlue/5 to-cyan-400/8 dark:from-primaryBlue/8 dark:to-slate-900/50 border-b md:border-b-0 md:border-r border-slate-200/40 dark:border-slate-700/30 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute -top-24 -left-24 w-56 h-56 bg-primaryBlue/15 rounded-full blur-3xl pointer-events-none"></div>
                <div className="relative z-10">
                  <motion.div layoutId={`icon-${selectedProject.id}`} className="inline-block p-5 bg-gradient-to-br from-primaryBlue to-cyan-400 text-white rounded-2xl shadow-xl shadow-primaryBlue/30 mb-7">
                    {selectedProject.icon}
                  </motion.div>
                  <motion.h3 layoutId={`title-${selectedProject.id}`} className="text-2xl lg:text-3xl font-extrabold tracking-tight mb-3 text-slate-900 dark:text-white leading-tight">
                    {selectedProject.title}
                  </motion.h3>
                  <p className="text-primaryBlue font-semibold leading-relaxed text-sm">{selectedProject.short_desc}</p>
                </div>

                <div className="mt-10 relative z-10 flex flex-col gap-3">
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="w-full py-4 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold tracking-wide flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-xl hover:shadow-primaryBlue/20">
                    <Github size={18} /> View Source Code
                  </a>
                </div>
              </div>

              {/* Right Panel */}
              <div className="w-full md:w-3/5 p-8 lg:p-10 flex flex-col gap-7">

                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-primaryBlue mb-3">Overview</h4>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{selectedProject.description}</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="bg-red-50/50 dark:bg-slate-800/40 p-5 rounded-2xl border border-red-100/50 dark:border-slate-700/30">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-red-500/80 mb-3">The Problem</h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{selectedProject.problem}</p>
                  </div>
                  <div className="bg-green-50/50 dark:bg-slate-800/40 p-5 rounded-2xl border border-green-100/50 dark:border-slate-700/30">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-green-600/80 mb-3">The Approach</h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{selectedProject.approach}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-primaryBlue mb-4">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, i) => (
                      <span key={i} className="px-4 py-2 glass-premium text-sm font-semibold rounded-xl text-slate-800 dark:text-slate-200 border border-slate-200/60 dark:border-slate-700/40 hover:border-primaryBlue/50 hover:text-primaryBlue transition-colors cursor-default shadow-sm">
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
