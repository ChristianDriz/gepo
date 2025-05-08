"use client"

import { GalleryProp } from "@/lib/interfaces";
import { useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import 'react-photo-view/dist/react-photo-view.css';
import Image from "next/image";

export default function GallerySection({ galleries, id } : GalleryProp ) {

    const categories = ["all", ...new Set(galleries.map(item => item.category))];
    const [selectedCategory, setSelectedCategory] = useState('all');

    const filteredImages = selectedCategory === 'all' ? 
        galleries : galleries.filter(item => item.category === selectedCategory);

    const images = filteredImages.flatMap(item => item.images.map(image => image.url));

    return (
        <section id={id} className="max-w-7xl mx-auto my-10 p-3 md:p-4">
            <h2 className="mb-4 capitalize" data-aos="fade-up" data-aos-duration="800">{id}</h2>
            <div className="flex items-center justify-start mb-4" data-aos="fade-up" data-aos-duration="800">
                <ul className="flex items-center justify-center bg-[var(--subtle-background)] p-2 rounded-xl overflow-auto">
                    {categories.map((category, index) => (
                    <li key={index}>
                        <button
                            onClick={() => setSelectedCategory(category)} 
                            className={`
                                capitalize px-4 py-2 rounded-lg text-sm cursor-pointer
                                ${selectedCategory === category ? 'bg-[var(--cool-red)] text-white font-medium' : 'text-[var(--muted-text)] '}`}
                            >
                                {category}
                        </button>
                    </li>
                    ))}
                    
                </ul>
            </div>
            <PhotoProvider>
                <div className="grid grid-cols-2 gap-2 md:grid-cols-3 cursor-pointer">
                    {images.map((url, index) => (
                    <PhotoView key={url} src={url}>
                        <Image 
                            src={url}
                            alt={`img-${index}`}
                            width={450}
                            height={450}
                            className="h-full rounded-md object-cover "
                            data-aos="fade-up" data-aos-duration="800"
                        />
                    </PhotoView>
                    ))}
                </div>
            </PhotoProvider>
        </section>
    )
}
