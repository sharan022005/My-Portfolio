"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Award } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface CertificateCardProps {
  title: string
  issuer: string
  date: string
  description?: string
  // optional badge image (local asset only)
  badgeSrc?: string
  badgeAlt?: string
}

export function CertificateCard({
  title,
  issuer,
  date,
  description,
  badgeSrc,
  badgeAlt = "Certification badge",
}: CertificateCardProps) {
  return (
    <Card className="overflow-hidden border-none shadow-md transition-all duration-200 hover:shadow-lg h-full">
      <CardHeader className="flex flex-row items-center gap-4 p-6">
        <motion.div
          whileHover={{ rotate: 15, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="rounded-full bg-blue-100 dark:bg-blue-900 p-3 text-blue-600 dark:text-blue-100 flex-shrink-0"
        >
          <Award className="h-6 w-6" />
        </motion.div>
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold text-sm sm:text-base leading-tight">{title}</h3>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            {issuer} • {date}
          </p>
        </div>
      </CardHeader>

      {(badgeSrc || description) && (
        <CardContent className="p-6 pt-0 space-y-4">
          {badgeSrc && (
            <div className="w-full">
              <div className="relative mx-auto h-28 w-auto max-w-[320px]">
                <Image
                  src={badgeSrc || "/placeholder.svg"}
                  alt={badgeAlt}
                  width={552}
                  height={276}
                  className="h-28 w-auto object-contain mx-auto"
                  priority={false}
                />
              </div>
            </div>
          )}
          {description && <p className="text-sm text-muted-foreground">{description}</p>}
        </CardContent>
      )}
    </Card>
  )
}
