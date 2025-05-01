"use client"

import { CategoryProp } from "@/lib/interfaces";
// import Image from "next/image";
import { useState } from "react";

export default function GallerySection({ categories } : CategoryProp ) {


    // const allImageUrls = galleries.flatMap(gallery =>
    //     gallery.galleryComponent.images.map(image => image.url)
    // );

    // const categories = ["all", ...new Set(galleries.map(item => item.category))];

    const [selectedCategory, setSelectedCategory] = useState('portraits');
    console.log(selectedCategory);

    return (
        <section id="gallery" className="max-w-7xl mx-auto my-10 p-3 md:p-4">
            <h2 className="text-2xl font-bold">Gallery</h2>
            <ul className="flex gap-2 mt-2 mb-4">
                {categories.map((category, index) => (
                <li key={index}>
                    <button
                        onClick={() => setSelectedCategory(category)} 
                        className="px-4 py-2 rounded shadow-xl cursor-pointer capitalize text-black/70">
                            {category}
                    </button>
                </li>
                ))}
                
            </ul>
            <div className="flex flex-wrap gap-2">
            {/* {allImageUrls.map((url, index) => (
                <Image 
                    key={index}
                    src={url}
                    alt={`img-${index}`}
                    width={450}
                    height={450}
                    className=" h-full rounded object-cover grow"
                />
            ))} */}
            </div>
        </section>
    )
}
