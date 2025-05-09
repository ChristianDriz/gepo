"use client"

import { motion } from "motion/react"

type SectionTitleProps = {
    title: string
}

export default function SectionTitle({ title } : SectionTitleProps ) {
    return (
        <motion.h2 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, transition: "easeOut" }}
            className="mb-4 capitalize" >
                {title}
        </motion.h2>
    )
}
