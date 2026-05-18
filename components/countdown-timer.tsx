"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Sparkles } from "@/components/WeddingInvitation"
import { weddingColors } from "@/lib/wedding-colors"

interface CountdownTimerProps {
  targetDate: string
  language?: "en" | "ar"
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer({
  targetDate,
  language = "en",
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const calc = () => {
      const diff = +new Date(targetDate) - +new Date()

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (diff / (1000 * 60 * 60)) % 24
          ),
          minutes: Math.floor(
            (diff / 1000 / 60) % 60
          ),
          seconds: Math.floor(
            (diff / 1000) % 60
          ),
        })
      }
    }

    calc()

    const t = setInterval(calc, 1000)

    return () => clearInterval(t)
  }, [targetDate])

  if (!mounted) return null

  const isArabic = language === "ar"

  const arabicFontFamily =
    "var(--font-arabic), ui-sans-serif, system-ui"

  const units = [
    {
      label: isArabic ? "يوم" : "DAYS",
      value: timeLeft.days,
      accent: "#F3E5D7",
    },
    {
      label: isArabic ? "ساعة" : "HOURS",
      value: timeLeft.hours,
      accent: "#F3E5D7",
    },
    {
      label: isArabic ? "دقيقة" : "MINS",
      value: timeLeft.minutes,
      accent: "#F3E5D7",
    },
    {
      label: isArabic ? "ثانية" : "SECS",
      value: timeLeft.seconds,
      accent: "#F3E5D7",
    },
  ]

  return (
    <section
      className="relative overflow-hidden px-4 pt-20 pb-6"
      style={{ background: weddingColors.bg }}
    >
      <Sparkles />

      <div
        className="relative z-10 mx-auto max-w-sm"
        style={
          isArabic
            ? { fontFamily: arabicFontFamily }
            : undefined
        }
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2
            className="mb-2 text-4xl text-[#F3E5D7]"
            style={{
              fontFamily: isArabic
                ? arabicFontFamily
                : "var(--font-script), 'Great Vibes', cursive",
            }}
          >
            {isArabic
              ? "العد التنازلي"
              : "Countdown"}
          </h2>

          <p className="text-sm text-[#F3E5D7]">
            {isArabic
              ? "حتى نلتقي في يومنا السعيد"
              : "Until we meet on our special day"}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.65,
            delay: 0.2,
          }}
          viewport={{ once: true }}
          className="grid grid-cols-4 gap-3"
        >
          {units.map((u, i) => (
            <motion.div
              key={u.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1 + i * 0.08,
              }}
              viewport={{ once: true }}
              className="flex flex-col items-center rounded-2xl py-5"
              style={{
                background: weddingColors.bgCard,
                border:
                  "1px solid rgba(247,240,236,0.32)",
                boxShadow: weddingColors.shadow,
                backdropFilter: "blur(10px)",
              }}
            >
              {/* Accent dot */}
              <div
                className="mb-3 h-2 w-2 rounded-full"
                style={{
                  background: u.accent,
                  opacity: 0.8,
                }}
              />

              <p className="mb-2 text-3xl leading-none text-[#F3E5D7] tabular-nums md:text-4xl font-light">
                {String(u.value).padStart(2, "0")}
              </p>

              <p className="text-[9px] text-[#F3E5D7]">
                {u.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 flex justify-center">
          <svg
            width="100"
            height="22"
            viewBox="0 0 110 28"
            fill="none"
            className="opacity-70"
          >
            <path
              d="M5,14 Q20,4 38,14 Q55,24 72,14 Q90,4 105,14"
              stroke="#F3E5D7"
              strokeWidth="1.25"
              fill="none"
            />

            <circle
              cx="55"
              cy="14"
              r="3.5"
              fill="#F3E5D7"
              opacity="0.7"
            />

            <circle
              cx="38"
              cy="14"
              r="2"
              fill="#F3E5D7"
              opacity="0.55"
            />

            <circle
              cx="72"
              cy="14"
              r="2"
              fill="#F3E5D7"
              opacity="0.55"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}