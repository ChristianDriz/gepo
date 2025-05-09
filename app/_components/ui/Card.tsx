"use client"

import { FavoriteItem } from "@/lib/interfaces";
import { motion } from "motion/react"

export default function Card({ title, content } : FavoriteItem  ) {

    return (
        <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, transition: "easeOut" }}
            className="px-6 py-5 rounded-lg bg-[var(--subtle-background)]" 
        >
            <h4 className="font-medium text-[var(--foreground)] mb-1">{title}</h4>
            <p className="text-[var(--muted-text)] text-sm">{content}</p>
        </motion.div>
    )
}
