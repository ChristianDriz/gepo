"use client"

import { GalleryProp } from "@/lib/interfaces";
import { useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { motion } from "motion/react"
import 'react-photo-view/dist/react-photo-view.css';
import Image from "next/image";
import SectionTitle from "../ui/SectionTitle";

export default function GallerySection({ galleries, id } : GalleryProp ) {

    const categories = ["all", ...new Set(galleries.map(item => item.category))];
    const [selectedCategory, setSelectedCategory] = useState('all');

    const filteredImages = selectedCategory === 'all' ? 
        galleries : galleries.filter(item => item.category === selectedCategory);

    const images = filteredImages.flatMap(item => item.images.map(image => image.url));

    const MotionImage = motion(Image); 

    return (
        <section id={id} className="max-w-7xl mx-auto px-3 py-8 md:px-4 ">
            <SectionTitle title={id}/>
            <motion.div 
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, transition: "easeOut" }}
                className="flex items-center justify-start mb-4" >
                <ul className="flex items-center justify-center bg-[var(--subtle-background)] p-2 rounded-xl overflow-auto">
                    {categories.map((category, index) => (
                    <li key={index}>
                        <button
                            onClick={() => setSelectedCategory(category)} 
                            className={`
                                capitalize px-4 py-2 rounded-lg text-sm cursor-pointer
                                ${selectedCategory === category ? 'bg-[var(--foreground)] text-white font-medium' : 'text-[var(--muted-text)] '}`}
                            >
                                {category}
                        </button>
                    </li>
                    ))}
                    
                </ul>
            </motion.div>
            <PhotoProvider>
                <div className="grid grid-cols-2 gap-2 md:grid-cols-4 cursor-pointer">
                    {images.map((url, index) => (
                    <PhotoView key={url} src={url}>
                        <MotionImage 
                            src={url}
                            alt={`img-${index}`}
                            width={450}
                            height={450}
                            className="h-full rounded-md object-cover "
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, transition: "easeOut" }}
                             viewport={{ once: false, amount: 0.3 }} 
                        />
                    </PhotoView>
                    ))}
                </div>
            </PhotoProvider>
        </section>
    )
}
