"use client"

import { motion } from "framer-motion"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted py-24 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          <motion.div initial="hidden" animate="visible" variants={containerVariants} className="flex flex-col gap-4">
            <div className="space-y-2">
              <motion.h1
                variants={itemVariants}
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl"
              >
                Hi, I'm <span className="text-blue-600">Sharan Babu</span>
              </motion.h1>
              <motion.p variants={itemVariants} className="text-xl text-muted-foreground md:text-2xl">
                Fullstack Developer
              </motion.p>
            </div>
            <motion.p variants={itemVariants} className="text-muted-foreground md:text-lg">
              Results-driven Fullstack Developer with a passion for creating efficient, scalable web applications.
              Focused on expanding technical expertise through collaboration with industry experts and hands-on project
              development.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/contact">
                  Contact Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link
                  href="https://drive.google.com/file/d/1VUsJ8o_3zgNSWt_1aY7J502b_iArPCR_/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Link>
              </Button>
            </motion.div>
            <motion.div variants={itemVariants} className="flex gap-4 mt-4">
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
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-full border-4 border-blue-600/20 bg-muted"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-600/0" />
            <div className="absolute inset-0 flex items-center justify-center text-9xl font-bold text-blue-600/60">
              SB
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-600/5 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-600/5 blur-3xl" />
    </section>
  )
}
