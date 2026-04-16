import { motion } from 'framer-motion'
import { Send, Mail, MapPin, Phone } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-slate-50/50 dark:bg-slate-900/20">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading>Get In Touch</SectionHeading>
        
        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-12 glass-card rounded-[2.5rem] overflow-hidden shadow-2xl p-2 h-auto mt-12 bg-white/40 dark:bg-slate-900/40 border border-white/40 dark:border-slate-700/50">
          
          {/* Contact Info (Left Side) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-gradient-to-br from-primaryBlue to-cyan-600 rounded-[2rem] p-8 md:p-10 text-white flex flex-col h-full relative overflow-hidden shadow-inner"
          >
            <h3 className="text-2xl font-bold mb-2 relative z-10">Contact Information</h3>
            <p className="text-blue-100 mb-12 relative z-10">I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
            
            <div className="space-y-6 flex-1 relative z-10">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
                  <Mail className="text-cyan-100" size={20} />
                </div>
                <div className="mt-1">
                  <h4 className="font-semibold mb-0.5 text-sm uppercase tracking-wider text-blue-200">Email</h4>
                  <a href="mailto:prakhargarg3114@gmail.com" className="hover:underline transition-all">prakhargarg3114@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
                  <Phone className="text-cyan-100" size={20} />
                </div>
                <div className="mt-1">
                  <h4 className="font-semibold mb-0.5 text-sm uppercase tracking-wider text-blue-200">Phone</h4>
                  <p className="">+91 9695910946</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
                  <MapPin className="text-cyan-100" size={20} />
                </div>
                <div className="mt-1">
                  <h4 className="font-semibold mb-0.5 text-sm uppercase tracking-wider text-blue-200">Location</h4>
                  <p className="">Prayagraj, Uttar Pradesh<br />India (211001)</p>
                </div>
              </div>
            </div>
            
            {/* Ambient decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyan-300/20 rounded-full blur-2xl translate-y-1/3 -translate-x-1/3"></div>
          </motion.div>

          {/* Contact Form (Right Side) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 p-8 md:p-10"
          >
            <form className="space-y-6 flex flex-col h-full justify-center">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primaryBlue/50 focus:border-primaryBlue transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 shadow-sm"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primaryBlue/50 focus:border-primaryBlue transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 shadow-sm"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Message</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primaryBlue/50 focus:border-primaryBlue transition-all resize-none placeholder:text-slate-400 dark:placeholder:text-slate-500 shadow-sm"
                  placeholder="Hello Prakhar, I would like to discuss..."
                  required
                ></textarea>
              </div>
              
              <button 
                type="button" 
                className="w-full py-4 px-6 mt-2 rounded-2xl bg-primaryBlue hover:bg-primaryBlueDark text-white font-bold tracking-wide shadow-lg shadow-primaryBlue/30 hover:shadow-primaryBlue/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group"
                onClick={(e) => {
                  e.preventDefault();
                  alert("This is a demo form. In a production environment, this would integrate with a backend service like Formspree or EmailJS.");
                }}
              >
                Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}
