"use client"

import { motion } from "framer-motion"
import { Code, Layout, Server, Settings, MessageSquare, Database } from "lucide-react"
import { SkillCategory } from "@/components/skill-category"
import { ProgressBar } from "@/components/progress-bar"

export default function SkillsPage() {
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
        className="mx-auto max-w-4xl space-y-12"
      >
        <motion.div variants={itemVariants} className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Skills & Expertise</h1>
          <p className="text-xl text-muted-foreground">
            A comprehensive overview of my technical skills and proficiencies.
          </p>
        </motion.div>

        <div className="grid gap-12">
          <motion.div variants={itemVariants} whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 200 }}>
            <SkillCategory
              title="Programming Languages"
              icon={<Code className="h-6 w-6" />}
              description="Languages I use to build applications and solve problems."
            >
              <ProgressBar skill="Python" percentage={85} />
              <ProgressBar skill="SQL" percentage={80} />
              <ProgressBar skill="Java (Basic)" percentage={70} />
              <ProgressBar skill="JavaScript" percentage={75} />
              <ProgressBar skill="HTML" percentage={90} />
              <ProgressBar skill="CSS" percentage={85} />
            </SkillCategory>
          </motion.div>

          <motion.div variants={itemVariants} whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 200 }}>
            <SkillCategory
              title="Web Development"
              icon={<Layout className="h-6 w-6" />}
              description="Technologies for creating responsive and interactive web applications."
            >
              <ProgressBar skill="HTML" percentage={90} />
              <ProgressBar skill="CSS" percentage={85} />
              <ProgressBar skill="JavaScript" percentage={75} />
              <ProgressBar skill="React" percentage={50} />
              <ProgressBar skill="Web Technologies" percentage={80} />
            </SkillCategory>
          </motion.div>

          <motion.div variants={itemVariants} whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 200 }}>
            <SkillCategory
              title="Artificial Intelligence"
              icon={<Server className="h-6 w-6" />}
              description="Skills related to AI and data science applications."
            >
              <ProgressBar skill="AI Foundations" percentage={75} />
              <ProgressBar skill="Data Science" percentage={70} />
            </SkillCategory>
          </motion.div>

          <motion.div variants={itemVariants} whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 200 }}>
            <SkillCategory
              title="Development Tools & Cloud"
              icon={<Database className="h-6 w-6" />}
              description="Development environments, version control, and cloud services."
            >
              <ProgressBar skill="VS Code" percentage={95} />
              <ProgressBar skill="Git" percentage={85} />
              <ProgressBar skill="Firebase Studio" percentage={75} />
              <ProgressBar skill="Microsoft Azure" percentage={70} />
              <ProgressBar skill="Google Colab" percentage={80} />
            </SkillCategory>
          </motion.div>

          <motion.div variants={itemVariants} whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 200 }}>
            <SkillCategory
              title="Technical Skills"
              icon={<Settings className="h-6 w-6" />}
              description="Additional technical skills that enhance my development capabilities."
            >
              <ProgressBar skill="Problem Solving" percentage={85} />
              <ProgressBar skill="Decision Making" percentage={80} />
              <ProgressBar skill="Time Management" percentage={85} />
            </SkillCategory>
          </motion.div>

          <motion.div variants={itemVariants} whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 200 }}>
            <SkillCategory
              title="Languages"
              icon={<MessageSquare className="h-6 w-6" />}
              description="Languages I can communicate in."
            >
              <ProgressBar skill="English" percentage={90} />
              <ProgressBar skill="Tamil" percentage={95} />
              <ProgressBar skill="Hindi" percentage={75} />
            </SkillCategory>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
