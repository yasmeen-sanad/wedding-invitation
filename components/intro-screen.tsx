

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { playBackgroundMusic } from "@/components/background-music"

interface IntroScreenProps {
  onOpen: () => void
  language: "en" | "ar"
}

export function IntroScreen({ onOpen, language }: IntroScreenProps) {
  const [isPressed, setIsPressed] = useState(false)

  const isArabic = language === "ar"
  const arabicFontFamily = "var(--font-arabic), ui-sans-serif, system-ui"
  const scriptFont = 'var(--font-script), "Great Vibes", cursive'

  const copy = isArabic
    ? {
       
        byWillOfGod: "وذلك بمشيئة الله",
        invitationDate: "٢٩ أبريل",
      }
    : {
        byWillOfGod: "By the will of God",
        invitationDate: "April 29",
      }

  const handleClick = () => {
    if (isPressed) return
    setIsPressed(true)
    playBackgroundMusic()
  }

  const handleScrollDown = () => {
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
      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* PAGE COMING OUT OF ENVELOPE */}
      <motion.div
        className="absolute inset-0 z-[5] overflow-hidden"
        initial={false}
        animate={
          isPressed
            ? { scale: 1, y: 0, opacity: 1 }
            : { scale: 0.38, y: "62%", opacity: 0 }
        }
        transition={{
          duration: 3,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{ transformOrigin: "center bottom" }}
      >
        <motion.div
          className="relative h-full w-full"
          animate={
            isPressed
              ? { scale: 1, filter: "blur(0px)" }
              : { scale: 1.08, filter: "blur(8px)" }
          }
          transition={{
            duration: 2.4,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <video
            autoPlay
            muted
            playsInline
            preload="auto"
            loop
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/videos/first.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-[#2a0508]/20" />

         <div className="relative z-10 flex min-h-[100svh] items-center justify-center px-8 pt-18">
  <motion.div
    className="mx-auto flex w-full max-w-[320px] flex-col items-center justify-center text-center"
    initial={{ opacity: 0, y: 34 }}
    animate={isPressed ? { opacity: 1, y: 0 } : {}}
    transition={{
      delay: 1.35,
      duration: 1,
      ease: "easeOut",
    }}
  >
    <h1
  className="text-center text-[34px] leading-none tracking-[0.02em] text-[#F6EBDD] drop-shadow-[0_2px_10px_rgba(255,240,220,0.18)]"
  style={{ fontFamily: scriptFont }}
>
  Waleed
</h1>

<p
  className="my-2 text-center text-[18px] text-[#F3E5D7]"
  style={{ fontFamily: scriptFont }}
>
  &
</p>

<h1
  className="text-center text-[34px] leading-none tracking-[0.02em] text-[#F6EBDD] drop-shadow-[0_2px_10px_rgba(255,240,220,0.18)]"
  style={{ fontFamily: scriptFont }}
>
  Weaam
</h1>

    <p
      className="mt-5 text-center text-[18px] tracking-[0.18em] text-[#F3E5D7]"
      style={{ fontFamily: scriptFont }}
    >
      Wedding Invitation
    </p>

    <p
      className="mt-7 text-center text-[18px] tracking-[0.08em] text-[#F6EBDD] drop-shadow-[0_2px_10px_rgba(255,240,220,0.18)]"
      style={{ fontFamily: scriptFont }}
    >
      13 / 6
    </p>
  </motion.div>
</div>

{isPressed && (
  <motion.button
    type="button"
    onClick={handleScrollDown}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay: 2,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="absolute bottom-45 left-1/2 z-[90] flex -translate-x-1/2 items-center justify-center"
  >
    <div className="flex items-center justify-center rounded-full border border-[#F6EBDD]/30 bg-[rgba(90,10,10,0.38)] px-4 py-[3px] backdrop-blur-sm">
      <span
        className="text-center text-[9px] font-medium uppercase tracking-[0.24em] text-[#F6EBDD]"
        style={{
          lineHeight: 1,
        }}
      >
        View Details
      </span>
    </div>
  </motion.button>
)}
        </motion.div>
      </motion.div>

      {/* top flap */}
      <motion.div
        className="absolute left-0 top-0 z-30 h-[56%] w-full pointer-events-none"
        animate={
          isPressed
            ? { y: "-70%", rotateX: 62, opacity: 0.9 }
            : { y: 0, rotateX: 0, opacity: 1 }
        }
        transition={{ duration: 1.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          clipPath: "polygon(0 0, 100% 0, 50% 100%)",
          background:
            "linear-gradient(180deg, #8a3037 0%, #681d24 52%, #4c1016 100%)",
          transformOrigin: "top center",
          boxShadow: "0 30px 70px rgba(0,0,0,0.42)",
        }}
      />

      {/* left flap */}
      <motion.div
        className="absolute left-0 bottom-0 z-20 h-[72%] w-[62%] pointer-events-none"
        animate={
          isPressed
            ? { x: "-72%", rotate: -5, opacity: 0.88 }
            : { x: 0, rotate: 0, opacity: 1 }
        }
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          clipPath: "polygon(0 0, 100% 58%, 0 100%)",
          background:
            "linear-gradient(135deg, #7e2930 0%, #54141a 58%, #31070b 100%)",
          boxShadow: "18px 0 45px rgba(0,0,0,0.28)",
        }}
      />

      {/* right flap */}
      <motion.div
        className="absolute right-0 bottom-0 z-20 h-[72%] w-[62%] pointer-events-none"
        animate={
          isPressed
            ? { x: "72%", rotate: 5, opacity: 0.88 }
            : { x: 0, rotate: 0, opacity: 1 }
        }
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          clipPath: "polygon(100% 0, 0 58%, 100% 100%)",
          background:
            "linear-gradient(225deg, #7e2930 0%, #58171d 55%, #30070b 100%)",
          boxShadow: "-18px 0 45px rgba(0,0,0,0.28)",
        }}
      />

      {/* bottom front flap */}
      <motion.div
        className="absolute left-0 bottom-0 z-40 h-[56%] w-full pointer-events-none"
        animate={
          isPressed
            ? { y: "72%", opacity: 0.86 }
            : { y: 0, opacity: 1 }
        }
        transition={{ duration: 1.75, ease: [0.22, 1, 0.36, 1] }}
        style={{
          clipPath: "polygon(0 100%, 50% 0, 100% 100%)",
          background:
            "linear-gradient(180deg, #842a31 0%, #651b22 48%, #3b090d 100%)",
          boxShadow: "0 -24px 60px rgba(0,0,0,0.38)",
        }}
      />

      {/* heart seal */}
      {!isPressed && (
        <motion.button
          type="button"
          onClick={handleClick}
          className="absolute left-1/2 top-[48%] z-50 -translate-x-1/2 -translate-y-1/2 border-none bg-transparent p-0 outline-none"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: [1, 1.025, 1], y: 0 }}
          transition={{
            opacity: { delay: 0.35, duration: 0.8 },
            scale: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          style={{ width: "min(50vw, 14rem)" }}
        >
          <Image
            src="/images/heart-invitation.png"
            alt="Wedding Invitation"
            width={1024}
            height={1024}
            className="h-auto w-full"
            priority
            style={{
              filter: "drop-shadow(0 22px 45px rgba(0,0,0,0.55))",
            }}
          />
        </motion.button>
      )}
    </motion.div>
  )
}