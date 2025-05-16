"use client"

import { FavoritesProp } from "@/lib/interfaces";
import { motion } from "motion/react"
import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";

export default function FavoriteSection({ favorites, id } : FavoritesProp ) {

    return (
        <section className="max-w-7xl mx-auto px-4 py-8 " id={id}>
            <SectionTitle title={id}/>  
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
               {Object.entries(favorites).map(([category, items]) => (
                <div key={category} className="pt-2">
                    <motion.h3 
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, transition: "easeOut" }}
                        className="text-center capitalize mb-2 font-medium">{category}
                    </motion.h3>
                    <ul className="grid gap-4 ">
                        {items.map((item) => (
                        <li key={item.name} >
                            <Card 
                                type={category}
                                name={item.name}
                                description={item.description}
                                image={item.image}
                                artist={item.artist}
                                src={item.src}
                                cover={item.cover}
                            />
                        </li>
                        ))}
                    </ul>
                </div>
               ))}
            </div>
        </section>
    )
}
