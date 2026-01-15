"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/achievements", label: "Achievements" },
  ]

  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  }

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3 },
    },
  }

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -10 },
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${isScrolled ? "bg-background/80 backdrop-blur-md border-b" : ""}`}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={navbarVariants}
        className="container flex h-16 items-center justify-between px-4 md:px-6"
      >
        <Link href="/" className="flex items-center gap-2">
          <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} className="flex items-center">
            <Image src="/images/sb-logo.png" alt="Sharan Babu Logo" width={40} height={40} className="object-contain" />
          </motion.div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link, index) => (
            <motion.div key={link.href} variants={itemVariants} whileHover={{ scale: 1.1 }}>
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${pathname === link.href ? "text-blue-600" : "text-muted-foreground"}`}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        <motion.div variants={itemVariants} className="flex items-center gap-2">
          <ThemeToggle />
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild variant="default" size="sm" className="hidden md:flex bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">CONTACT</Link>
            </Button>
          </motion.div>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </motion.div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className="md:hidden border-b"
          >
            <div className="container py-4 px-4 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Navigation</p>
                <Button variant="ghost" size="icon" onClick={toggleMenu}>
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <motion.div key={link.href} variants={mobileItemVariants}>
                    <Link
                      href={link.href}
                      className={`text-sm font-medium transition-colors hover:text-blue-600 ${pathname === link.href ? "text-blue-600" : "text-muted-foreground"}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <motion.div variants={mobileItemVariants}>
                <Button asChild variant="default" size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    CONTACT
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
