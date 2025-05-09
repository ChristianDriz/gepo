"use client"

import { ObituaryProp } from "@/lib/interfaces";
import { motion } from "motion/react"
import SectionTitle from "../ui/SectionTitle";

export default function ObituarySection({ obituary, id } : ObituaryProp ) {

    return (
        <section className="max-w-7xl mx-auto px-4 py-8 " id={id}>
            <SectionTitle title={id}/>
            <motion.p        
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-[var(--muted-text)] first-letter:text-[var(--foreground)] first-letter:text-5xl first-letter:float-left first-letter:mr-1.5 first-letter:font-['Playfair_Display']" 
                dangerouslySetInnerHTML={{ __html: obituary }}
            />
        </section>
    )
}
