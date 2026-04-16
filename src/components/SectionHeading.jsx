import { motion } from 'framer-motion'

export default function SectionHeading({ children }) {
  return (
    <div className="mb-12 flex flex-col items-center justify-center">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold mb-4 font-sans tracking-tight text-center"
      >
        {children}
      </motion.h2>
      <motion.div 
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: "60px" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="h-1.5 bg-gradient-to-r from-primaryBlue to-cyan-500 rounded-full"
      />
    </div>
  )
}
