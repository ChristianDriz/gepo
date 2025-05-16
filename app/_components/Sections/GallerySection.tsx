"use client"

import { GalleryProp } from "@/lib/interfaces";
import { useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { motion } from "motion/react"
import { Icon } from "@iconify/react/dist/iconify.js";

import 'react-photo-view/dist/react-photo-view.css';
import Image from "next/image";
import SectionTitle from "../ui/SectionTitle";


export default function GallerySection({ galleries, id } : GalleryProp ) {

    const [slicedImages, setSlicedImages] = useState(12);
    const categories = ["all", ...new Set(galleries.map(item => item.category))];
    const [selectedCategory, setSelectedCategory] = useState('all');

    const filteredImages = selectedCategory === 'all' ? galleries : galleries.filter(item => item.category === selectedCategory);

    const medias = filteredImages.flatMap(item => item.medias.map(image => image.url));
    const MotionImage = motion(Image); 

    // Function to handle the click event on category buttonss
    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
        setSlicedImages(12); // Reset the sliced images when a new category is selected
    }

   const handleExpandClick = () => {
        setSlicedImages(prev => prev + 12);
    }
    

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
                            onClick={() => handleCategoryClick(category)} 
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
                <div className="columns-2 md:columns-4 gap-3 ">
                    {medias.slice(0, slicedImages).map((url, index) => (
                    <PhotoView key={url} src={url}>
                        <MotionImage 
                            src={url}
                            alt={`img-${index}`}
                            width={450}
                            height={450}
                            className="h-full rounded-md object-cover mb-3 cursor-pointer"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, transition: "easeOut" }}
                        />
                    </PhotoView>
                    ))}
                </div>
            </PhotoProvider>
           
            
            {slicedImages < medias.length && (
                <motion.div 
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, transition: "easeOut" }}
                    className="w-full flex flex-col gap-3 items-center justify-center mt-8">
                    <button onClick={handleExpandClick} className="bg-white p-2 rounded-full cursor-pointer" >
                        <Icon icon="fe:arrow-down" className="w-6 h-6" />
                    </button>
                    <span className="uppercase text-[var(--muted-text)] text-sm font-medium">expand gallery</span>
                </motion.div>
            )}

        </section>
    )
}
