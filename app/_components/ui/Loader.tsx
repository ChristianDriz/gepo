'use client'

import { motion } from 'framer-motion'

export default function Loader() {
    const line1 = "In Loving Memory of"
    const line2 = "Michael Angelo"
    const delayPerChar = 0.1
    const line1Delay = line1.length * delayPerChar

    const getLetters = (text: string, startDelay = 0) =>
        text.split("").map((char, index) => (
        <motion.span
            key={index + char}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.3,
                delay: startDelay + index * delayPerChar,
            }}
        >
            {char === " " ? "\u00A0" : char}
        </motion.span>
        ))

    return (
        <div className="absolute inset-0 flex items-center justify-center bg-[var(--background)] z-10 px-4">
            <div className="text-center text-[var(--muted-text)] font-bold font-['Cormorant'] italic leading-tight">
                <motion.h1 className="text-3xl sm:text-5xl">
                    {getLetters(line1)}
                </motion.h1>
                <motion.h1 className="text-3xl sm:text-5xl mt-1 sm:mt-2">
                    {getLetters(line2, line1Delay)}
                </motion.h1>
            </div>
        </div>
  )
}
