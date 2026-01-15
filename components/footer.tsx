"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="border-t"
    >
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0"
        >
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Sharan Babu. All rights reserved.
          </p>
        </motion.div>
        <motion.div variants={itemVariants} className="flex gap-4">
          <Link
            href="https://github.com/sharan022005"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-blue-600 transition-colors"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://linkedin.com/in/sharan-babu-642827295"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-blue-600 transition-colors"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="mailto:sharan2582005@gmail.com"
            className="text-muted-foreground hover:text-blue-600 transition-colors"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
        </motion.div>
      </div>
    </motion.footer>
  )
}
