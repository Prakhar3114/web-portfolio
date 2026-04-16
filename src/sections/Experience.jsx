import { motion, AnimatePresence } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'
import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'

const timeline = [
  {
    id: 1,
    type: "experience",
    title: "Power BI Intern",
    organization: "Celebal Technologies (Remote)",
    date: "May 2025 – July 2025",
    description: "Developed interactive Power BI dashboards to extract business insights. Integrated SQL pipelines with Power BI for real-time data analytics, and transformed raw datasets into actionable reports that drove strategic decision-making.",
    icon: <Briefcase size={20} />
  },
  {
    id: 2,
    type: "experience",
    title: "AICTE Intern",
    organization: "Edunet Foundation (Remote)",
    date: "Jan 2025 – Feb 2025",
    description: "Architected an AI-powered healthcare chatbot utilizing Streamlit and Hugging Face DistilGPT-2. Integrated comprehensive NLP capabilities via NLTK for parsing health-related queries, implemented context-aware responses using transformer models, and deployed session state mechanisms to ensure seamless chat persistence and interactive conversational flow.",
    icon: <Briefcase size={20} />
  },
  {
    id: 3,
    type: "education",
    title: "B.Tech in Computer Science and Engineering",
    organization: "SRM University Delhi-NCR, Sonepat, Haryana",
    date: "Aug 2022 – Present",
    description: "Specializing in Data Science & Artificial Intelligence. Current GPA: 8.1/10.",
    icon: <GraduationCap size={20} />
  },
  {
    id: 4,
    type: "education",
    title: "Intermediate (CBSE)",
    organization: "Tagore Public School, Prayagraj",
    date: "Aug 2020 – July 2021",
    description: "Successfully completed higher secondary education with a stellar 89.9% aggregate.",
    icon: <GraduationCap size={20} />
  },
  {
    id: 5,
    type: "education",
    title: "High School (CBSE)",
    organization: "Tagore Public School, Prayagraj",
    date: "Aug 2018 – July 2019",
    description: "Completed secondary education passing with an outstanding 97%.",
    icon: <GraduationCap size={20} />
  }
]

export default function Experience() {
  const [filter, setFilter] = useState('all')

  const filteredTimeline = timeline.filter(item => filter === 'all' || item.type === filter)

  return (
    <section id="experience" className="py-24 relative bg-slate-50/50 dark:bg-slate-900/10 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading>Education & Experience</SectionHeading>
        
        {/* Interactive Filter Tabs */}
        <div className="flex justify-center mb-16 relative z-20">
          <div className="inline-flex items-center p-1.5 bg-white shadow-xl dark:bg-slate-800/80 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-slate-700/50">
            {['all', 'experience', 'education'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`relative px-6 py-3 text-xs md:text-sm font-bold uppercase tracking-widest rounded-xl transition-colors duration-300 outline-none ${
                  filter === f ? 'text-white' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
                }`}
              >
                {filter === f && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-primaryBlue rounded-xl shadow-lg shadow-primaryBlue/30"
                    initial={false}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{f}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto relative mt-8 min-h-[600px]">
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primaryBlue/30 via-cyan-400/30 to-transparent rounded-full md:-translate-x-1/2 z-0 hidden sm:block"></div>
          
          <div className="space-y-12 relative z-10">
            <AnimatePresence mode="popLayout">
              {filteredTimeline.map((item, index) => (
                <motion.div 
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -30, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.4, type: 'spring', damping: 25, stiffness: 200 }}
                  className={`relative flex flex-col md:flex-row gap-8 items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 w-12 h-12 rounded-full bg-white dark:bg-slate-900 border-4 border-primaryBlue hidden sm:flex items-center justify-center text-primaryBlue md:-translate-x-1/2 z-10 shadow-xl shadow-primaryBlue/30 hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  
                  {/* Content Card */}
                  <div className={`sm:ml-20 md:ml-0 md:w-1/2 w-full ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}>
                    <div className={`glass-card p-8 rounded-3xl relative group hover:-translate-y-2 hover:shadow-2xl hover:shadow-primaryBlue/10 transition-all border border-slate-200 dark:border-slate-800 ${item.type === 'experience' ? 'border-primaryBlue/30 bg-primaryBlue/5' : ''}`}>
                      
                      <span className="inline-block px-4 py-1.5 bg-slate-200 dark:bg-slate-800 text-primaryBlue dark:text-cyan-400 text-xs font-bold uppercase tracking-widest rounded-full mb-4 shadow-sm">
                        {item.date}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold mb-2 text-slate-800 dark:text-white leading-tight">{item.title}</h3>
                      <h4 className="text-sm md:text-base font-semibold text-primaryBlue mb-4">{item.organization}</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
