"use client"

import { PersonalInfoProp } from "@/lib/interfaces";
import { motion } from "motion/react"
import Image from "next/image";

export default function PersonalInfoSection({personalInfo, id } : PersonalInfoProp ) {

    return (
        <section className="max-w-7xl mx-auto h-[calc(100dvh-60px)] min-h-full px-4 pb-10 md:pb-0 flex flex-col md:flex-row justify-center overflow-hidden" id={id}>
            <motion.div 
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 4.3, ease: "easeInOut" }}
                className="relative min-h-96 w-auto md:order-2 animate-[fade-in 1s]">
                <Image 
                    src={personalInfo.profile}
                    alt={personalInfo.profile}
                    height={200}
                    width={400}
                    priority
                    className="h-full w-full object-contain object-bottom " 
                />
                <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-0 w-90 h-130 md:w-120 md:h-180 rounded-full blur-3xl bg-lime-100/50 -z-10"/>
            </motion.div>
            <motion.div 
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 4.3, ease: "easeInOut" }}
                className=" max-md:mt-4 text-center max-w-sm md:max-w-full md:flex-1 mx-auto flex flex-col justify-center">
                <h1 className="font-black text-[clamp(3rem,8vw,8rem)] leading-[clamp(3rem,8vw,8rem)] uppercase font-['Playfair_Display'] text-transparent 
                    bg-clip-text bg-cover bg-right bg-[url(/images/bg-mask.jpg)]" >
                    {personalInfo.name}
                </h1>
                <div className="mt-4">
                    <h3 className="text-[clamp(1rem,2vw,2rem)] font-medium font-['Playfair_Display'] italic">
                        {personalInfo.quote}
                    </h3>
                    <p className="text-[clamp(1rem,2vw,1.5rem)] font-medium">{personalInfo.birthDate} <span>-</span> {personalInfo.deathDate}</p>
                </div>
            </motion.div>
        </section>
    )
}
