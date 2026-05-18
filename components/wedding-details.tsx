"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { MapPin, Calendar, Clock, Users, Star } from "lucide-react"
import { Sparkles } from "@/components/WeddingInvitation"
import { weddingColors } from "@/lib/wedding-colors"

interface WeddingDetailsProps {
  language?: "en" | "ar"
}

export function WeddingDetails({ language = "en" }: WeddingDetailsProps) {
  const isArabic = language === "ar"
  const arabicFontFamily = "var(--font-arabic), ui-sans-serif, system-ui"
  const scriptFont = isArabic
    ? arabicFontFamily
    : "var(--font-script), 'Great Vibes', cursive"

  const timelineItems = [
    {
      time: isArabic ? "٨:٣٠ مساءً" : "8:30 PM",
      label: isArabic ? "استقبال الضيوف" : "Guest Arrival",
    },
    {
      time: isArabic ? "١٠:٣٠ مساءً" : "10:30 PM",
      label: isArabic ? "الزفة" : "Zaffah",
    },
    {
      time: isArabic ? "١٢:٠٠ صباحًا" : "12:00 AM",
      label: isArabic ? "العشاء" : "Dinner",
    },
  ]

  return (
    <section
      className="relative overflow-hidden px-4 pb-16 pt-4"
      style={{ background: weddingColors.bg }}
    >
      <Sparkles />

      <div
        className="relative z-10 mx-auto max-w-sm"
        style={isArabic ? { fontFamily: arabicFontFamily } : undefined}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <h2
            className="mb-2 text-4xl text-[#F3E5D7]"
            style={{ fontFamily: scriptFont }}
          >
            {isArabic ? "التفاصيل" : "Details of the Day"}
          </h2>

          <p className="text-sm text-[#F3E5D7]">
            {isArabic
              ? "كل ما تحتاجون معرفته عن يومنا السعيد"
              : "Everything you need to know about our special day"}
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          viewport={{ once: true }}
          className="relative z-20 mt-6 flex justify-center overflow-hidden rounded-2xl"
          style={{
            background: weddingColors.bgCard,
            border: "1px solid rgba(247,240,236,0.32)",
            boxShadow: weddingColors.shadow,
          }}
        >
          <div className="relative w-full max-w-[500px]">
            <Image
              src="/images/timeline.png"
              alt="Timeline"
              width={900}
              height={1100}
              className="h-auto w-full object-contain"
            />

            {/* Item 1 */}
            <div
              className="absolute left-[13%] top-[27%] text-left text-[#F3E5D7]"
              style={{ fontFamily: scriptFont }}
            >
              <p className="text-[10px] leading-none">
                {timelineItems[0].time}
              </p>
              <p className="mt-1 text-[14px] leading-none">
                {timelineItems[0].label}
              </p>
            </div>

            <div className="absolute left-[51%] top-[31.8%] flex h-[46px] w-[46px] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
              <Users className="h-5 w-5 text-[#F3E5D7]" strokeWidth={1.35} />
            </div>

            {/* Item 2 */}
            <div
              className="absolute right-[17%] top-[47.5%] text-left text-[#F3E5D7]"
              style={{ fontFamily: scriptFont }}
            >
              <p className="text-[10px] leading-none">
                {timelineItems[1].time}
              </p>
              <p className="mt-1 text-[16px] leading-none">
                {timelineItems[1].label}
              </p>
            </div>

            <div className="absolute left-[51%] top-[51.5%] flex h-[46px] w-[46px] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
              <Star className="h-5 w-5 text-[#F3E5D7]" strokeWidth={1.35} />
            </div>

            {/* Item 3 */}
            <div
              className="absolute left-[17%] top-[66.5%] text-left text-[#F3E5D7]"
              style={{ fontFamily: scriptFont }}
            >
              <p className="text-[10px] leading-none">
                {timelineItems[2].time}
              </p>
              <p className="mt-1 text-[16px] leading-none">
                {timelineItems[2].label}
              </p>
            </div>

            <div className="absolute left-[51%] top-[72.8%] flex h-[46px] w-[46px] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#F3E5D7"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 11h18" />
                <path d="M5 11a7 7 0 0 1 14 0" />
                <path d="M4 15h16" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Nasria photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative z-20 mb-9 mt-20 overflow-hidden rounded-2xl"
          style={{
            background: weddingColors.bgCard,
            border: "1px solid rgba(247,240,236,0.32)",
            boxShadow: weddingColors.shadow,
          }}
        >
          <div className="relative aspect-4/3 w-full">
            <Image
              src="/images/nasria.png"
              alt="Nasria"
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 100vw, 384px"
            />
          </div>
        </motion.div>

        {/* Info card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative z-20 mb-6 rounded-2xl p-6"
          style={{
            background: weddingColors.bgCard,
            border: "1px solid rgba(247,240,236,0.32)",
            boxShadow: weddingColors.shadow,
            backdropFilter: "blur(12px)",
          }}
        >
          <div className="space-y-3">
            <InfoRow
              isArabic={isArabic}
              icon={<MapPin className="h-4 w-4 shrink-0" style={{ color: "#c4a090" }} />}
              text={isArabic ? "قصر الناصريه للاحتفالات" : "Al Nasriyah Celebration Hall"}
            />

            <InfoRow
              isArabic={isArabic}
              icon={<Calendar className="h-4 w-4 shrink-0" style={{ color: "#a0b888" }} />}
              text={isArabic ? "السبت، ١٣ يونيو ٢٠٢٦" : "Saturday, 13.6.2026"}
            />

            <InfoRow
              isArabic={isArabic}
              icon={<Clock className="h-4 w-4 shrink-0" style={{ color: "#88aac0" }} />}
              text={isArabic ? "من الساعة ٨:٣٠ مساءً" : "From 8:30 PM"}
            />
          </div>

          {/* Notes */}
          <div className="mt-4 border-t border-[#d9c0ae]/30 pt-4">
            <p
              className={`mb-3 text-xs text-[#F3E5D7] ${
                isArabic ? "text-right" : "text-center"
              }`}
            >
              {isArabic ? "ملاحظات" : "Notes"}
            </p>

            <div className="flex flex-col gap-3">
              <NoteItem
                isArabic={isArabic}
                icon={<NoChildrenIcon />}
                text={
                  isArabic
                    ? "يُمنع حضور الأطفال منعًا باتًا"
                    : "Children are not allowed."
                }
              />

              <NoteItem
                isArabic={isArabic}
                icon={<GiftIcon />}
                text={
                  isArabic
                    ? "الدعوة شخصية؛ يُرجى الالتزام بالعدد المذكور من الحضور حيث لن يسمح بتجاوز العدد المحدد"
                    : "This invitation is personal; please adhere to the stated number of guests."
                }
              />

              <NoteItem
                isArabic={isArabic}
                icon={<NoCameraIcon />}
                text={
                  isArabic
                    ? "نأمل منكم إطفاء الجوالات ومنع التصوير احترامًا لخصوصية الحفل"
                    : "Please keep phones silent and avoid photography during the ceremony."
                }
              />
            </div>
          </div>
        </motion.div>

        {/* Map button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative z-20 mb-6"
        >
          <a
            href="https://maps.app.goo.gl/6yf1VSgt8r3faaNt7?g_st=iw"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-full py-4 font-medium text-[#570f07] transition-transform hover:scale-[1.02] active:scale-[0.98]"
            style={{ background: "#c4a090" }}
          >
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{isArabic ? "الموقع" : "Location"}</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function InfoRow({
  isArabic,
  icon,
  text,
}: {
  isArabic: boolean
  icon: React.ReactNode
  text: string
}) {
  return (
    <div
      className={`flex items-center gap-3 text-[#F3E5D7] ${
        isArabic ? "flex-row-reverse" : ""
      }`}
    >
      {icon}
      <span className={`text-sm ${isArabic ? "text-right" : ""}`}>{text}</span>
    </div>
  )
}

function NoteItem({
  isArabic,
  icon,
  text,
}: {
  isArabic: boolean
  icon: React.ReactNode
  text: string
}) {
  return (
    <div
      className={`flex items-start gap-2 ${
        isArabic ? "flex-row-reverse" : ""
      }`}
    >
      <div
        className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
        style={{
          background: weddingColors.bg,
          border: "0.5px solid #f7f0ec",
        }}
      >
        {icon}
      </div>

      <p
        className={`text-sm italic leading-relaxed text-[#F3E5D7] ${
          isArabic ? "text-right" : ""
        }`}
      >
        {text}
      </p>
    </div>
  )
}

function NoChildrenIcon() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#c4906e"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M20 21a8 8 0 1 0-16 0" />
      <line x1="15" y1="5" x2="21" y2="11" />
      <line x1="21" y1="5" x2="15" y2="11" />
    </svg>
  )
}

function GiftIcon() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#c4906e"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 12V22H4V12" />
      <path d="M22 7H2v5h20V7z" />
      <path d="M12 22V7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    </svg>
  )
}

function NoCameraIcon() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#c4906e"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 7h4l2-2h4l2 2h4v10H4z" />
      <circle cx="12" cy="12" r="3" />
      <line x1="5" y1="19" x2="19" y2="5" />
    </svg>
  )
}