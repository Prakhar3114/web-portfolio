import { motion } from 'framer-motion'
import { CheckCircle, ExternalLink } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import TiltCard from '../components/TiltCard'

const certifications = [
  { id: 1, name: "Data Science 101", issuer: "IBM", link: "https://courses.srmuh.skillsnetwork.site/certificates/31288262d9cd479ebe24e6aaa5fe0bc0" },
  { id: 2, name: "Data Visualization With Python", issuer: "IBM", link: "https://courses.srmuh.skillsnetwork.site/certificates/d240a6f085054c76a020d01ec81ba116" },
  { id: 3, name: "Machine Learning with R", issuer: "IBM", link: "https://courses.srmuh.skillsnetwork.site/certificates/4fa8e45ae807462baeb3562ae3db39ab" },
  { id: 4, name: "Build Your Own Chatbot", issuer: "IBM", link: "https://courses.srmuh.skillsnetwork.site/certificates/4b5176bcee944053816b610930fe4026" },
  { id: 5, name: "Introduction to Python", issuer: "IBM", link: "https://courses.srmuh.skillsnetwork.site/certificates/120f3186ec894f8d9ef18d56f960e41a" },
  { id: 6, name: "Big Data & Hadoop Ecosystem", issuer: "IBM", link: "https://courses.srmuh.skillsnetwork.site/certificates/589fd69da8a94134ac728a22a3d45939" },
  { id: 7, name: "Data Privacy Fundamentals", issuer: "IBM", link: "https://courses.srmuh.skillsnetwork.site/certificates/cd65958bdf314b25a9d33f846ca7bf80" },
  { id: 8, name: "Deep Learning with TensorFlow", issuer: "IBM", link: "https://courses.srmuh.skillsnetwork.site/certificates/bdfd1fd0edfe4cbc892d77e847271e20" }
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading>Certifications</SectionHeading>
        
        <div className="max-w-6xl mx-auto mt-16 relative">
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="h-full"
              >
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="block h-full cursor-pointer group">
                  <TiltCard className="h-full">
                    <div className="p-8 flex flex-col items-center text-center justify-between h-full w-full relative z-10 overflow-hidden rounded-[2rem] glass-premium glass-hover border border-white/50 dark:border-slate-700/50 hover:border-blue-500/50 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] bg-white/40 dark:bg-slate-900/50">

                      {/* Tooltip Hover "Credential" Tag */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border border-blue-500/20 flex items-center gap-1 shadow-sm">
                        Verify <ExternalLink size={10} />
                      </div>

                      {/* Expanding Hover Background Glow */}
                      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-tl from-blue-500/20 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-150"></div>

                      <div className="mb-6 h-12 flex items-center justify-center grayscale opacity-80 dark:opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-out drop-shadow-sm">
                        <img 
                          src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" 
                          alt="IBM Verified" 
                          className="h-8 md:h-10 object-contain drop-shadow-md brightness-110 dark:brightness-150" 
                        />
                      </div>
                      
                      <h4 className="font-bold text-slate-800 dark:text-slate-100 mb-6 leading-snug text-lg group-hover:text-primaryBlue transition-colors line-clamp-2">
                        {cert.name}
                      </h4>
                      
                      <div className="flex items-center gap-2 mt-auto text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest bg-slate-200/50 dark:bg-slate-800/80 px-4 py-2 rounded-full shadow-inner border border-slate-300/50 dark:border-slate-700/50 group-hover:border-blue-500/30 group-hover:bg-blue-500/5 group-hover:text-primaryBlue transition-all">
                        <CheckCircle size={14} className="group-hover:text-blue-500 text-slate-400 drop-shadow-sm transition-colors" /> {cert.issuer} Verified
                      </div>

                    </div>
                  </TiltCard>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
