"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { playBackgroundMusic } from "@/components/background-music"

interface IntroScreenProps {
  onOpen: () => void
  language: "en" | "ar"
}

export function IntroScreen({ onOpen, language }: IntroScreenProps) {
  const isArabic = language === "ar"
  const arabicFontFamily = "var(--font-arabic), ui-sans-serif, system-ui"

  const handleClick = () => {
    playBackgroundMusic()
    onOpen()
  }

  return (
    <motion.div
      key="intro-envelope"
      className="fixed inset-0 z-50 overflow-hidden"
      style={{
        ...(isArabic ? { fontFamily: arabicFontFamily } : null),
        background:
          "radial-gradient(circle at 50% 38%, #8a2f35 0%, #5b171d 46%, #2a0508 100%)",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="absolute inset-0 z-[12] pointer-events-none"
        style={{
          background: "#ffffff",
          boxShadow: "0 28px 80px rgba(0,0,0,0.2)",
        }}
      />

      <motion.div
        className="absolute left-0 bottom-0 z-20 h-[72%] w-[62%] pointer-events-none"
        style={{
          clipPath: "polygon(0 0, 100% 58%, 0 100%)",
          background:
            "linear-gradient(135deg, #ffffff 0%, #fafafa 55%, #f0f0f0 100%)",
          boxShadow:
            "inset -1px 0 0 rgba(0,0,0,0.05), 12px 0 36px rgba(0,0,0,0.1)",
        }}
      />

      <motion.div
        className="absolute right-0 bottom-0 z-20 h-[72%] w-[62%] pointer-events-none"
        style={{
          clipPath: "polygon(100% 0, 0 58%, 100% 100%)",
          background:
            "linear-gradient(225deg, #ffffff 0%, #fafafa 55%, #f0f0f0 100%)",
          boxShadow:
            "inset 1px 0 0 rgba(0,0,0,0.05), -12px 0 36px rgba(0,0,0,0.1)",
        }}
      />

      <motion.div
        className="absolute left-0 top-0 z-30 h-[56%] w-full pointer-events-none"
        style={{
          clipPath: "polygon(0 0, 100% 0, 50% 100%)",
          background:
            "linear-gradient(180deg, #ffffff 0%, #fafafa 50%, #f2f2f2 100%)",
          transformOrigin: "top center",
          boxShadow:
            "inset 0 -1px 0 rgba(0,0,0,0.06), 0 24px 56px rgba(0,0,0,0.12)",
        }}
      />

      <motion.div
        className="absolute left-0 bottom-0 z-40 h-[56%] w-full pointer-events-none"
        style={{
          clipPath: "polygon(0 100%, 50% 0, 100% 100%)",
          background:
            "linear-gradient(180deg, #ffffff 0%, #fafafa 45%, #f0f0f0 100%)",
          boxShadow:
            "inset 0 1px 0 rgba(0,0,0,0.05), 0 -20px 50px rgba(0,0,0,0.1)",
        }}
      />

<svg
  className="absolute inset-0 z-[45] h-full w-full pointer-events-none"
  viewBox="0 0 100 100"
  preserveAspectRatio="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
    <linearGradient id="redSeam" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#c96b6b" stopOpacity="0.08" />
      <stop offset="50%" stopColor="#b43b3b" stopOpacity="0.22" />
      <stop offset="100%" stopColor="#7e1f1f" stopOpacity="0.08" />
    </linearGradient>
  </defs>

  {/* Top flap */}
  <line
    x1="0"
    y1="0"
    x2="50"
    y2="56"
    stroke="url(#redSeam)"
    strokeWidth="0.22"
  />

  <line
    x1="100"
    y1="0"
    x2="50"
    y2="56"
    stroke="url(#redSeam)"
    strokeWidth="0.22"
  />

  {/* Bottom flap */}
  <line
    x1="0"
    y1="100"
    x2="50"
    y2="44"
    stroke="url(#redSeam)"
    strokeWidth="0.22"
  />

  <line
    x1="100"
    y1="100"
    x2="50"
    y2="44"
    stroke="url(#redSeam)"
    strokeWidth="0.22"
  />

  {/* Outer border */}
  <rect
    x="0"
    y="0"
    width="100"
    height="100"
    fill="none"
    stroke="rgba(140,40,40,0.10)"
    strokeWidth="0.22"
  />
</svg>

      <motion.button
        type="button"
        onClick={handleClick}
        className="absolute left-1/2 top-[48%] z-50 -translate-x-1/2 -translate-y-1/2 cursor-pointer border-none bg-transparent p-0 outline-none"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        style={{ width: "min(50vw, 14rem)" }}
      >
        <Image
    src="/images/logoheart.png"
    alt="Wedding Invitation"
    width={500}
    height={500}
    className="h-auto w-full drop-shadow-[0_10px_28px_rgba(0,0,0,0.18)]"
    priority
  />

  {/* W&W فوق القلب */}
  <Image
    src="/images/w&w.png"
    alt="W&W"
    width={220}
    height={120}
    className="
      absolute
      left-1/2
      top-1/2
      w-[42%]
      -translate-x-1/2
      -translate-y-1/2
      object-contain
      opacity-95
      drop-shadow-[0_2px_10px_rgba(0,0,0,0.18)]
    "
    priority
  />
      </motion.button>
    </motion.div>
  )
}