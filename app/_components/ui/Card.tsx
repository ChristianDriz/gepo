"use client"

import { FavoriteItem } from "@/lib/interfaces";
import { motion } from "motion/react"
import Image from "next/image";
import MusicPlayer from "./MusicPlayer";

export default function Card({ type, name, description, image, artist, src, cover } : FavoriteItem  ) {

    return (
        <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, transition: "easeOut" }}
            className="p-3 rounded-lg flex gap-3 bg-[var(--subtle-background)]" 
        >   
            {type === 'music' ? (
            <MusicPlayer
                title={name}
                description={description}
                artist={artist!}
                cover={cover!} 
                src={src!}
            />       
            ) : ( 
            <>
                <div className="w-30 h-30 rounded-md">
                    <Image
                        src={image!}
                        alt={name}
                        width={100}
                        height={100}
                        className="rounded-lg object-cover w-full h-full "
                    />
                </div>
                <div className="flex-1 ">
                    <h4 className="font-medium mb-1 text-[var(--foreground)]">{name}</h4> 
                    <p className="text-[var(--muted-text)] leading-5">{description}</p>
                </div>
  
            </>    
            )}
          
        </motion.div>
    )
}
