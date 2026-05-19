

"use client"

import { useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { IntroScreen } from "@/components/intro-screen"
import { CountdownTimer } from "@/components/countdown-timer"
import { WeddingDetails } from "@/components/wedding-details"
import { weddingColors } from "@/lib/wedding-colors"

export default function WeddingInvitation() {
  const [isOpen, setIsOpen] = useState(false)
  const [language, setLanguage] = useState<"en" | "ar">("ar")

  const detailsRef = useRef<HTMLDivElement | null>(null)

  const isArabic = language === "ar"
  const arabicFontFamily = "var(--font-arabic), ui-sans-serif, system-ui"
  const scriptFont = "var(--font-script), 'Great Vibes', cursive"

  const copy = isArabic
    ? {
      together: [
        "في ليلةٍ مكبر غلاها فيها الفرح معقود",
       "تتشرف السيدة / منال علي والسيدة / نورية علي",
        "بدعوتكم لحضور زفاف ",
      ],
        byWillOfGod: "وذلك بمشيئة الله",
        venue: "الموقع",
        invitationDate: "١٣ يونيو",
        footerDate: "١٣ · ٠٦ · ٢٠٢٦",
        footerMessage: "لا يسعنا الانتظار للاحتفال معكم",
      }
    : {
      together: [
        "On a night filled",
        "with joy and cherished moments,",
        "Mrs. Manal Ali",
        "and Mrs. Noura Ali",
        "are honored to invite you",
        " to the wedding of",
      ],
        byWillOfGod: "By the will of God",
        venue: "Venue",
        invitationDate: "June 13",
        footerDate: "13 · 06 · 2026",
        footerMessage: "We can't wait to celebrate with you",
      }

  const openInvitation = () => {
    setIsOpen(true)

    requestAnimationFrame(() => {
      setTimeout(() => {
        detailsRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }, 250)
    })
  }

  return (
    <main
      className="relative min-h-screen scroll-smooth overflow-x-hidden bg-[#570f07]"
    >
  <AnimatePresence mode="sync">
  {!isOpen && (
    <IntroScreen
      key="intro"
      onOpen={() => setIsOpen(true)}
      language={language}
    />
  )}
</AnimatePresence>

      {isOpen && (
        <>
        <motion.div
          key="content"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Language Toggle */}
          <motion.div
            className="fixed right-4 top-4 z-50"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <button
              type="button"
              onClick={() => setLanguage(isArabic ? "en" : "ar")}
              className="rounded-full border border-white/55 bg-[#570f07]/80 px-4 py-1.5 text-xs text-[#F3E5D7] shadow-sm backdrop-blur-md transition hover:bg-[#570f07]/90"
              style={isArabic ? { fontFamily: arabicFontFamily } : undefined}
            >
              {isArabic ? "ENGLISH" : "العربية"}
            </button>
          </motion.div>

          {/* PAGE 1: Invitation with Video */}
          <section className="relative flex min-h-[110vh] flex-col items-center justify-center overflow-hidden bg-[#570f07] px-4">
            <video
              autoPlay
              muted
              playsInline
              preload="auto"
              loop
              className="absolute inset-0 h-full w-full object-cover md:object-cover object-center"
            >
              <source src="/videos/first.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 " />

            <motion.div
              initial={{ y: 52, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1.1,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative z-10 mx-2 w-full max-w-sm rounded-[1.75rem] px-7 py-11 text-center"
              style={isArabic ? { fontFamily: arabicFontFamily } : undefined}
            >
             <div
  className={`mt-38 mb-3 text-[#F3E5D7] ${
    isArabic
      ? "space-y-1 text-[16px] leading-8"
      : "text-[14px] leading-snug"
  }`}
>
  {isArabic ? (
    copy.together.map((line, index) => <p key={index}>{line}</p>)
  ) : (
    <p>{copy.together}</p>
  )}
</div>
              <h1
                className="mb-1 text-3xl text-[#F3E5D7] md:text-6xl"
                style={
                  isArabic
                    ? { fontFamily: arabicFontFamily }
                    : { fontFamily: scriptFont }
                }
              >
                {isArabic ? "وئام" : "Weaam"}
              </h1>

              <p
                className="my-1.5 text-sm text-[#F3E5D7]"
                style={
                  isArabic
                    ? { fontFamily: arabicFontFamily }
                    : { fontFamily: scriptFont }
                }
              >
                {isArabic ? "و" : "&"}
              </p>

              <h1
                className="mb-6 text-3xl text-[#F3E5D7] md:text-6xl"
                style={
                  isArabic
                    ? { fontFamily: arabicFontFamily }
                    : { fontFamily: scriptFont }
                }
              >
                {isArabic ? "وليد" : "Waleed"}
              </h1>

              <p className="mb-2 text-sm text-[#F3E5D7]">
                {copy.byWillOfGod}
              </p>

              <p
                className="text-2xl text-[#F3E5D7]"
                style={
                  isArabic
                    ? { fontFamily: arabicFontFamily }
                    : { fontFamily: scriptFont }
                }
              >
                {copy.invitationDate}
              </p>
            </motion.div>

            <motion.button
              type="button"
              onClick={() => {
                detailsRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }}
              className="absolute bottom-8 z-10 border-none bg-transparent text-2xl text-[#F3E5D7]"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            >
              ↓
            </motion.button>
          </section>

         {/* PAGE 2: Countdown with Image Background */}
<section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-4 py-8">
   
  <div className="absolute inset-0 bg-[#570f07]" />

  <div
    className="relative z-10 w-full"
    style={isArabic ? { fontFamily: arabicFontFamily } : undefined}
  >
    <CountdownTimer
      targetDate="2026-06-13T20:00:00"
      language={language}
    />
  </div>
</section>

         {/* PAGE 3: Details with Video Background */}
{/* PAGE 3: Details */}
<section
  ref={detailsRef}
  className="relative flex items-center justify-center overflow-hidden bg-[#570f07] px-4 pt-2 pb-6"
>
  <div className="absolute inset-0 bg-[#570f07]" />

  <div
    className="relative z-10 w-full"
    style={isArabic ? { fontFamily: arabicFontFamily } : undefined}
  >
    <WeddingDetails language={language} />
  </div>
</section>

{/* PAGE 4: Save the Date */}
<section className="relative overflow-hidden bg-[#570f07] px-7 pt-10 pb-10">
  <div className="absolute inset-0 bg-[#570f07]" />

  <div
    className="relative z-10 mx-auto w-full max-w-sm"
    style={isArabic ? { fontFamily: arabicFontFamily } : undefined}
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full overflow-hidden rounded-2xl"
      style={{
        background: weddingColors.bgCard,
        border: "1px solid rgba(247,240,236,0.32)",
        boxShadow: weddingColors.shadow,
      }}
    >
      <Image
        src="/images/save-date-bg.png"
        alt=""
        width={1254}
        height={1254}
        priority={false}
        className="h-auto w-full object-contain"
        sizes="(max-width: 640px) 100vw, 384px"
      />
    </motion.div>

    {/* Text UNDER image */}
    <div className="mt-6 text-center">
      <h2
        className="mb-2 text-xl text-[#F3E5D7]"
        style={{ fontFamily: scriptFont }}
      >
        13 · 06 · 2026
      </h2>

      <p
        className="whitespace-nowrap text-lg text-[#F3E5D7]"
        style={{ fontFamily: scriptFont }}
      >
        We can't wait to celebrate with you
      </p>
    </div>
  </div>
</section>
        </motion.div>
        </>
      )}
    </main>
  )
}