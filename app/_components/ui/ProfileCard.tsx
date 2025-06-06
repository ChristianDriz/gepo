"use client"

import { PersonProp } from "@/lib/interfaces";
import { formatDate, calcAge } from "@/lib/formatDate";
import { motion } from "motion/react"
import Image from "next/image";

export default function ProfileCard({ name, gender, birthdate, role, isAlive, profile_photo, } : PersonProp  ) {

    return (
        <motion.article 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, transition: "easeOut" }}
            // viewport={{ once: false, amount: 0.5 }} 
            className={`relative rounded-lg flex gap-3 bg-[var(--subtle-background)] p-3 
                ${(role === "child" || role === "grandchild") ? "before:content-[''] before:absolute before:-left-8 before:top-1/2 before:h-px before:w-8 before:bg-gray-300" : ""}`
            }>
            <div className="w-18 h-18 rounded-full border border-[var(--border-subtle)]">
                <Image 
                    src={`${ profile_photo ? profile_photo : `${gender === 'male' ? '/images/default-male-img.png' : '/images/default-female-img.png'}` }`}
                    alt={''}
                    width='80'
                    height='80'
                    className={`rounded-full w-full h-full object-cover ${!isAlive ? 'grayscale-50' : ''}`}
                />
            </div>
            <div className="flex flex-col justify-center gap-2 flex-1 w-32 text-left text-[var(--muted-text)] tracking-tight ">
                <h4 className="text-sm/4.5 font-medium">{name}</h4>
                <p className="text-sm/3.5">{formatDate(birthdate)} | {calcAge(birthdate)} </p>
            </div>
        </motion.article>
    )
}
