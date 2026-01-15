"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ProjectCard } from "@/components/project-card"
import { Button } from "@/components/ui/button"

type Category = "All" | "AI & Deep Learning" | "Web Development"

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All")

  const categories: Category[] = ["All", "AI & Deep Learning", "Web Development"]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const projects = [
    {
      title: "Intelligent Skin Condition Diagnosis Using Deep Learning with Explainable AI",
      description:
        "Developed a high-precision diagnostic system using MobileNetV2 with transfer learning to classify skin lesions from dermoscopic images, optimized for efficiency on limited hardware. The solution features a robust preprocessing pipeline that employs DullRazor for hair removal and bilateral filtering for noise reduction. Incorporated Explainable AI (GradCAM) to generate heatmaps highlighting irregular borders and utilizes a confidence-based interpretation mechanism to provide actionable recommendations for dermatologists.",
      tags: ["MobileNetV2", "Transfer Learning", "GradCAM", "OpenCV", "Deep Learning"],
      category: "AI & Deep Learning",
      link: "#",
    },
    {
      title: "Solar PV Detection Pipeline",
      description:
        "Built an automated AI-powered pipeline designed to detect and quantify rooftop solar panels using YOLOv8 and satellite imagery. The system manages the end-to-end process of fetching satellite data, performing real-time object detection, and calculating the estimated surface area of installations. The detection logic was specifically optimized to identify panels across various roof types, enabling effective remote energy assessment and data analysis.",
      tags: ["YOLOv8", "Satellite Imagery", "Object Detection", "Python"],
      category: "AI & Deep Learning",
      link: "https://github.com/sharan022005/SOLAR-PV-DETECTION",
    },
    {
      title: "Falcon Safety Sentinel — YOLOv8s Object Detection System",
      description:
        "Developed an optimized YOLOv8s-based computer vision model to detect critical safety equipment within a digital-twin space environment. The project involved building a complete pipeline—from dataset preparation with synthetic high-fidelity data to training and evaluation—achieving efficient real-time detection. Performance was validated using confusion matrices and precision-recall curves, with advanced hyperparameter tuning and modular scripts implemented to maximize accuracy and inference speed.",
      tags: ["YOLOv8s", "Computer Vision", "Object Detection", "Hyperparameter Tuning"],
      category: "AI & Deep Learning",
      link: "https://github.com/sharan022005/Falcon-Safety-Sentinel-YOLOv8s-Optimization-for-Critical-Space-Equipment-Detection",
    },
  ]

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="mx-auto max-w-6xl space-y-12"
      >
        <motion.div variants={itemVariants} className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">My Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work and projects that demonstrate my skills and expertise in AI, Deep Learning, and Web
            Development.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        <motion.div variants={containerVariants} className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                link={project.link}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
