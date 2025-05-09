"use client"

import { TimelineProp } from "@/lib/interfaces";
import { motion } from "motion/react"
import SectionTitle from "../ui/SectionTitle";

export default function TimelineSection({ timeline, id } : TimelineProp ) {
    return (
        <section className="max-w-7xl mx-auto px-4 py-8 " id={id}>
            <SectionTitle title={id}/>
            <div className="flex flex-col sm:items-center overflow-hidden">
                <ul className="lg:w-[70%] relative before:content-[''] before:absolute before:top-0 before:left-1 sm:before:left-[50%] before:w-0.5 before:h-full before:bg-gray-300 ">
                    
                    {timeline.map((data, index) => {
                    const isLast = index === timeline.length - 1
                    const isOdd = index % 2 === 0
 
                    return (
                        <li 
                            key={index} 
                            className={`            
                                gap-4 flex w-full sm:w-1/2 ${isOdd ? 'float-left clear-right ' : 'float-right clear-left '}`}   
                        >   
                            <span className={` w-2.5 h-2.5 rounded-full bg-gray-300 ${isOdd ? 'sm:order-2 sm:translate-x-1.5' : 'sm:-translate-x-1'}`}/>
                            <motion.div 
                                initial={{ opacity: 0, x: isOdd? -100 : 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: false, amount: 0.6 }} 
                                className="flex-1"  >
                                <p className="w-32 hidden sm:flex text-sm mb-2">{data.date}</p>
                                <div className={` 
                                    rounded-2xl rounded-tl-none px-6 py-4 bg-[var(--subtle-background)] text-[var(--muted-text)]
                                    ${isLast ? 'mb-0' : 'mb-4 sm:mb-10'}
                                    ${isOdd ? 'sm:rounded-tr-none sm:rounded-tl-2xl' : 'sm:rounded-tl-none sm:rounded-tr-2xl'}`}
                                >
                                    <p className="w-32 mb-1 sm:hidden text-sm">{data.date}</p>
                                    <h4 className="text-lg font-medium">{data.title}</h4> 
                                    <p className="mt-1">{data.description}</p>
                                </div>
                            </motion.div>
                        </li>
                        );
                    })}
                    
                
                    
                </ul>
            </div>
        </section>
    )
}
