"use client"

import { useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

function Sparkles() {
  const sparkles = [
    { top: "12%", left: "18%", size: 28, delay: 0 },
    { top: "18%", left: "72%", size: 22, delay: 0.8 },
    { top: "34%", left: "82%", size: 18, delay: 1.4 },
    { top: "25%", left: "15%", size: 24, delay: 0.3 },
    { top: "45%", left: "65%", size: 20, delay: 1.1 },
    { top: "60%", left: "30%", size: 26, delay: 0.6 },
    { top: "75%", left: "85%", size: 16, delay: 1.7 },
    { top: "85%", left: "45%", size: 22, delay: 0.9 },
  ]

  return (
    <div className="pointer-events-none absolute inset-0 z-[3]">
      {sparkles.map((s, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
          }}
          animate={{
            opacity: [0.25, 1, 0.25],
            scale: [0.75, 1.15, 0.75],
          }}
          transition={{
            duration: 2.4,
            delay: s.delay,
            repeat: Infinity,
          }}
        >
          <svg viewBox="0 0 40 40" className="h-full w-full">
            <path
              d="M20 1 C22 13 27 18 39 20 C27 22 22 27 20 39 C18 27 13 22 1 20 C13 18 18 13 20 1Z"
              fill="none"
              stroke="#F6EBDD"
              strokeWidth="1.4"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  )
}

export { Sparkles }

