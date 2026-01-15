"use client"

import { motion } from "framer-motion"
import { Briefcase, GraduationCap, User } from "lucide-react"
import { Timeline, TimelineItem } from "@/components/timeline"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
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

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="mx-auto max-w-3xl space-y-12"
      >
        <motion.div variants={itemVariants} className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">About Me</h1>
          <p className="text-xl text-muted-foreground">
            Aspiring engineering professional with a strong technical foundation in artificial intelligence and software
            development.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="rounded-full bg-primary/10 p-3">
              <User className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold">Personal Profile</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Aspiring engineering professional with a strong technical foundation in artificial intelligence and software
            development. Passionate about leveraging technology to solve real-world problems through innovative
            solutions. Dedicated to continuous learning and collaboration to deliver efficient, scalable results in
            dynamic environments.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            My approach to development is centered around clean code, best practices, and continuous learning. I believe
            in the power of technology to transform businesses and improve lives, and I'm committed to contributing to
            that transformation through my work.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="rounded-full bg-primary/10 p-3">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold">Education</h2>
          </div>
          <Timeline>
            <TimelineItem
              title="Bachelor of Technology in Artificial Intelligence And Data Science"
              organization="RMK Engineering College, Thiruvallur"
              date="Expected in 2027"
              description="Currently pursuing a degree in Artificial Intelligence and Data Science with a CGPA of 7.93."
            />
            <TimelineItem
              title="XII Grade"
              organization="Best Matriculation Higher Secondary School, Thanjavur, TN"
              date="2023"
              description="Completed higher secondary education with 83% marks."
            />
          </Timeline>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="rounded-full bg-primary/10 p-3">
              <Briefcase className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold">Workshops & Training</h2>
          </div>
          <Timeline>
            <TimelineItem
              title="Java Automation using Selenium Workshop"
              organization="TOP ENGINEERS - INDIA in association with MECHANICA 2024 - IIT MADRAS"
              date="March 2025"
              description="Participated in a workshop on Java Automation using Selenium at IIT MADRAS RESEARCH PARK."
            />
          </Timeline>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center pt-8">
          <Button asChild size="lg">
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}
