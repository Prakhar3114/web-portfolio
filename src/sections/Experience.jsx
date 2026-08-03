import { motion, AnimatePresence } from 'framer-motion'
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react'
import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'

const timeline = [
  {
    id: 1,
    type: "experience",
    title: "Data Analytics Intern (Power BI)",
    organization: "CELEBAL Technologies",
    location: "Remote",
    date: "May 2025 – July 2025",
    bullets: [
      "Built an advanced multi-page Power BI dashboard using DAX, bookmarks, and star-schema data modeling to visualize business data and support stakeholder decision-making.",
      "Integrated Power BI with SQL databases for real-time analytics and querying, transforming raw data into actionable reports."
    ],
    tags: ["Power BI", "DAX", "SQL", "Data Modeling"],
    icon: <Briefcase size={18} />
  },
  {
    id: 2,
    type: "experience",
    title: "AI/ML Intern",
    organization: "Edunet Foundation (AICTE)",
    location: "Remote",
    date: "Jan 2025 – Feb 2025",
    bullets: [
      "Developed an AI healthcare chatbot using Streamlit and Hugging Face's DistilGPT-2 transformer model, combining rule-based logic with NLP (NLTK) to handle symptom, prescription, and appointment queries.",
      "Implemented context-aware, multi-turn conversations using Streamlit session state, enabling persistent chat history across user sessions."
    ],
    tags: ["Python", "Streamlit", "DistilGPT-2", "NLTK"],
    icon: <Briefcase size={18} />
  },
  {
    id: 3,
    type: "education",
    title: "B.Tech, CSE (Data Science & AI)",
    organization: "SRM University, Sonepat, Haryana",
    location: "Sonepat, Haryana",
    date: "Aug 2022 – July 2026",
    bullets: [
      "Specializing in Data Science & Artificial Intelligence.",
      "CGPA: 8.25/10.0"
    ],
    tags: ["AI", "ML", "Data Science"],
    icon: <GraduationCap size={18} />
  },
  {
    id: 4,
    type: "education",
    title: "Intermediate — CBSE",
    organization: "Tagore Public School, Prayagraj",
    location: "Prayagraj, U.P.",
    date: "Aug 2020 – July 2021",
    bullets: ["Percentage: 89.9%"],
    tags: [],
    icon: <GraduationCap size={18} />
  },
  {
    id: 5,
    type: "education",
    title: "High School — CBSE",
    organization: "Tagore Public School, Prayagraj",
    location: "Prayagraj, U.P.",
    date: "Aug 2018 – July 2019",
    bullets: ["Percentage: 97%"],
    tags: [],
    icon: <GraduationCap size={18} />
  }
]

const filterLabels = { all: 'All', experience: 'Experience', education: 'Education' }

export default function Experience() {
  const [filter, setFilter] = useState('all')
  const filteredTimeline = timeline.filter(item => filter === 'all' || item.type === filter)

  return (
    <section id="experience" className="py-28 relative overflow-hidden">

      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[1px] bg-gradient-to-r from-transparent via-primaryBlue/30 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading>Education & Experience</SectionHeading>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-16 relative z-20">
          <div className="inline-flex items-center p-1.5 glass-premium rounded-2xl gap-1 shadow-xl">
            {Object.entries(filterLabels).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`relative px-7 py-3 text-xs font-black uppercase tracking-widest rounded-xl transition-all duration-300 outline-none ${
                  filter === key ? 'text-white' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                {filter === key && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-gradient-to-r from-primaryBlue to-cyan-500 rounded-xl shadow-lg shadow-primaryBlue/40"
                    initial={false}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primaryBlue/40 via-cyan-400/20 to-transparent hidden sm:block md:-translate-x-px" />

          <div className="space-y-10 relative z-10">
            <AnimatePresence mode="popLayout">
              {filteredTimeline.map((item, index) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.45, delay: index * 0.07, type: 'spring', damping: 22, stiffness: 180 }}
                  className={`relative flex flex-col md:flex-row gap-6 items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 w-10 h-10 rounded-full glass-premium border-2 border-primaryBlue hidden sm:flex items-center justify-center text-primaryBlue md:-translate-x-1/2 z-10 shadow-lg shadow-primaryBlue/20">
                    {item.icon}
                  </div>

                  {/* Card */}
                  <div className={`sm:ml-20 md:ml-0 md:w-[46%] w-full ${index % 2 === 0 ? 'md:pl-14' : 'md:pr-14'}`}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      className={`p-7 rounded-3xl relative group transition-all duration-300 glass-premium border ${
                        item.type === 'experience'
                          ? 'border-primaryBlue/30 hover:shadow-xl hover:shadow-primaryBlue/10'
                          : 'border-slate-200/50 dark:border-slate-700/30 hover:shadow-xl hover:shadow-cyan-400/10'
                      }`}
                    >
                      {/* Top row */}
                      <div className="flex items-start justify-between gap-3 mb-4 flex-wrap">
                        <div>
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">{item.title}</h3>
                          <p className="text-primaryBlue font-semibold text-sm mt-0.5">{item.organization}</p>
                        </div>
                        <div className="flex flex-col items-end gap-1 shrink-0">
                          <span className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider bg-slate-100/80 dark:bg-slate-800/60 px-3 py-1 rounded-full">
                            <Calendar size={11} /> {item.date}
                          </span>
                          <span className="flex items-center gap-1 text-[10px] text-slate-400 dark:text-slate-500">
                            <MapPin size={10} /> {item.location}
                          </span>
                        </div>
                      </div>

                      {/* Bullets */}
                      <ul className="space-y-2 mb-5">
                        {item.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primaryBlue/60 shrink-0"></span>
                            {b}
                          </li>
                        ))}
                      </ul>

                      {/* Tags */}
                      {item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200/50 dark:border-slate-700/30">
                          {item.tags.map((tag, i) => (
                            <span key={i} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-primaryBlue/5 dark:bg-primaryBlue/10 text-primaryBlue rounded-lg border border-primaryBlue/20">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
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
