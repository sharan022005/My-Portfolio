"use client"

import { motion } from "framer-motion"
import { CertificateCard } from "@/components/certificate-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AchievementsPage() {
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

  const nptelCertifications = [
    {
      title: "Computer Networks And Internet Protocol",
      issuer: "NPTEL",
      date: "Jan–Apr 2025",
      description: "12-week course from IIT Kharagpur.",
    },
    {
      title: "Joy of Computing using Python",
      issuer: "NPTEL",
      date: "2023",
      description: "Comprehensive course covering Python programming concepts and applications.",
    },
    {
      title: "Soft Skill Development",
      issuer: "NPTEL",
      date: "2023",
      description: "Course focused on developing essential soft skills for professional growth.",
    },
  ]

  const oracleCertifications = [
    {
      title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      issuer: "Oracle",
      date: "2025",
      description: "Professional certification validating AI foundations on Oracle Cloud Infrastructure.",
    },
    {
      title: "Oracle AI Vector Search",
      issuer: "Oracle",
      date: "2025",
      description: "Certified Professional in Oracle AI Vector Search technologies and implementations.",
    },
    {
      title: "Oracle Cloud Infrastructure Data Science – Professional",
      issuer: "Oracle",
      date: "2025",
      description: "Oracle Certified Professional: OCI Data Science (2025).",
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
      issuer: "Oracle",
      date: "July 25, 2025",
      description: "Credential ID: 101396648OCI25GAIOCP",
    },
  ]

  const infosysCertifications = [
    {
      title: "Software Engineering and Agile Software Development",
      issuer: "Infosys | Springboard",
      date: "October 28, 2023",
      description: "Issued on: Sunday, October 29, 2023. Verify: https://verify.onwingspan.com",
    },
    {
      title: "Introduction to Business Intelligence",
      issuer: "Infosys | Springboard",
      date: "May 29, 2025",
      description: "Issued on: Thursday, May 29, 2025. Verify: https://verify.onwingspan.com",
    },
    {
      title: "Email Writing Skills",
      issuer: "Infosys | Springboard",
      date: "April 6, 2024",
      description: "Issued on: Thursday, April 11, 2024. Verify: https://verify.onwingspan.com",
    },
    {
      title: "Introduction to Artificial Intelligence",
      issuer: "Infosys | Springboard",
      date: "September 21, 2024",
      description: "Issued on: Saturday, September 21, 2024. Verify: https://verify.onwingspan.com",
    },
    {
      title: "HTML5 - The Language",
      issuer: "Infosys | Springboard",
      date: "November 30, 2023",
      description: "Issued on: Thursday, November 30, 2023. Verify: https://verify.onwingspan.com",
    },
    {
      title: "Introduction to Entity Relationship (ER) Modeling",
      issuer: "Infosys | Springboard",
      date: "May 29, 2025",
      description: "Issued on: Thursday, May 29, 2025. Verify: https://verify.onwingspan.com",
    },
    {
      title: "C Programming 101",
      issuer: "Infosys | Springboard",
      date: "December 8, 2023",
      description: "Issued on: Thursday, February 22, 2024. Verify: https://verify.onwingspan.com",
    },
    {
      title: "Artificial Intelligence Foundation Certification",
      issuer: "Infosys | Springboard",
      date: "September 21, 2024",
      description: "Issued on: Saturday, September 21, 2024. Verify: https://verify.onwingspan.com",
    },
    {
      title: "Multidimensional Data Modeling",
      issuer: "Infosys | Springboard",
      date: "May 29, 2025",
      description: "Issued on: Thursday, May 29, 2025. Verify: https://verify.onwingspan.com",
    },
    {
      title: "Introduction to Deep Learning",
      issuer: "Infosys | Springboard",
      date: "September 21, 2024",
      description: "Issued on: Saturday, September 21, 2024. Verify: https://verify.onwingspan.com",
    },
    {
      title: "Communicating to Succeed",
      issuer: "Infosys | Springboard",
      date: "March 5, 2024",
      description: "Issued on: Tuesday, March 5, 2024. Verify: https://verify.onwingspan.com",
    },
    {
      title: "Python for Data Science",
      issuer: "Infosys | Springboard",
      date: "August 17, 2024",
      description: "Issued on: Saturday, September 14, 2024. Verify: https://verify.onwingspan.com",
    },
    {
      title: "Database Management System Part - 2",
      issuer: "Infosys | Springboard",
      date: "February 20, 2024",
      description: "Issued on: Tuesday, February 20, 2024. Verify: https://verify.onwingspan.com",
    },
    {
      title: "TechA CompTIA Network+(Plus) Certification",
      issuer: "Infosys | Springboard",
      date: "September 28, 2025",
      description: "Issued on: Sunday, September 28, 2025. Verify: https://verify.onwingspan.com",
    },
    {
      title: "Database Management System Part - 1",
      issuer: "Infosys | Springboard",
      date: "February 20, 2024",
      description: "Issued on: Tuesday, February 20, 2024. Verify: https://verify.onwingspan.com",
    },
  ]

  const otherCertifications = [
    {
      title: "Certified HTML Developer",
      issuer: "Ceeras",
      date: "2023",
      description: "Certification demonstrating proficiency in HTML development.",
    },
  ]

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="mx-auto max-w-5xl space-y-12"
      >
        <motion.div variants={itemVariants} className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Achievements & Accomplishments</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and notable accomplishments that showcase my expertise and knowledge.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Tabs defaultValue="nptel" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="nptel">NPTEL</TabsTrigger>
              <TabsTrigger value="oracle">Oracle</TabsTrigger>
              <TabsTrigger value="infosys">Infosys</TabsTrigger>
              <TabsTrigger value="other">Other</TabsTrigger>
            </TabsList>

            <TabsContent value="nptel" className="mt-6">
              <motion.div variants={containerVariants} className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {nptelCertifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <CertificateCard {...cert} />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="oracle" className="mt-6">
              <motion.div variants={containerVariants} className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {oracleCertifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <CertificateCard {...cert} />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="infosys" className="mt-6">
              <motion.div variants={containerVariants} className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {infosysCertifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <CertificateCard {...cert} />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="other" className="mt-6">
              <motion.div variants={containerVariants} className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {otherCertifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <CertificateCard {...cert} />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </motion.div>
    </div>
  )
}
