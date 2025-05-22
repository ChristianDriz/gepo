"use client"

import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "motion/react"
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Portal from "./Portal";

type MediaViewerProps = {
    medias: {
        url: string;
        type: string;
    }[];
    src: string;
    type: string;
    index: number;
}

export default function MediaViewer({ medias, src, type, index } : MediaViewerProps ) {
    
    const MotionImage = motion(Image); 

    const scrollRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    const [isMediaOpen, setIsMediaOpen] = useState(false);  
    const [currentIndex, setCurrentIndex] = useState(index);

    // Scroll to the selected media index
    const scrollToIndex = (index: number) => {
        scrollRef.current?.scrollTo({
            left: index * window.innerWidth,
        });
    };

    // Show previous media
    const handlePrevious = useCallback(() => {
        if (currentIndex > 0) {
            const newIndex = currentIndex - 1;
            setCurrentIndex(newIndex);
            scrollToIndex(newIndex);
        }
    }, [currentIndex]);

    // Show next media
    const handleNext = useCallback(() => {
        if (currentIndex < medias.length - 1) {
            const newIndex = currentIndex + 1;
            setCurrentIndex(newIndex);
            scrollToIndex(newIndex);
        }
    }, [currentIndex, medias.length]);

    // Toggle full-screen media viewer
    const handleMediaClick = () => {
        setIsMediaOpen(!isMediaOpen);
    }

    // Close viewer and pause video
    const handleClose = useCallback(() => {
        setIsMediaOpen(false);  // close media viewer
        setCurrentIndex(index); // reset to original index

        videoRef.current?.pause();
    }, [index]);

    // Handle body scroll and key navigation while media viewer is open
    useEffect(() => {
        if (!isMediaOpen) {
            document.body.style.overflow = '';
            return;
        }

        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            scrollToIndex(currentIndex);
        }, 0);

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") handleNext();
            if (e.key === "ArrowLeft") handlePrevious();
            if (e.key === "Escape") handleClose();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isMediaOpen, currentIndex, handleNext, handlePrevious, handleClose]);

    return (
        <>  
            {/* Thumbnail Grid Preview */}
            {type === 'video' ? (
                <div className="relative">
                    <motion.video 
                        src={src} 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, transition: "easeOut" }}
                        onClick={handleMediaClick}
                        className="h-full rounded-md object-cover mb-3 cursor-pointer"
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full py-2 pl-2.5 pr-1.5 bg-black/50 pointer-events-none">
                        <Icon icon="fe:play" className="w-8 h-8 text-white"/>
                    </div>
                </div>
            ) : (
                <MotionImage 
                    src={src}
                    alt={`img-${index}`}
                    width={450}
                    height={450}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, transition: "easeOut" }}
                    onClick={handleMediaClick}
                    className="h-full rounded-md object-cover mb-3 cursor-pointer"
                />
            )}

            {/* Fullscreen Viewer */}
            {isMediaOpen && (
            <Portal>    
                <div 
                    ref={scrollRef}
                    className={`fixed flex gap-4 scrollbar-hide
                    inset-0 w-full min-h-dvh bg-black z-10 transition-opacity duration-300 overflow-auto snap-x snap-mandatory`}
                >        
                    {/* close button */}
                    <button onClick={handleClose} className="fixed right-3 top-3 z-10 cursor-pointer">
                        <Icon icon="fe:close" className="w-7 h-7 text-white/70 hover:text-white/100"/>  
                    </button>
                    
                     {/* Navigation Buttons */}
                    {medias.length > 1 && (
                    <div className="hidden md:block">
                        <button onClick={handlePrevious} className="fixed top-1/2 -translate-y-1/2 left-2 text-white/70 hover:text-white/100 pl-1.5 pr-2.5 py-2 rounded-full bg-black/50 cursor-pointer">
                            <Icon icon="fe:arrow-left" className="w-8 h-8 "/>  
                        </button>
                        <button onClick={handleNext} className="fixed top-1/2 -translate-y-1/2 right-2 text-white/70 hover:text-white/100 pr-1.5 pl-2.5 py-2 rounded-full bg-black/50 cursor-pointer" >
                            <Icon icon="fe:arrow-right" className="w-8 h-8 "/>  
                        </button>
                    </div>
                    )}

                    {/* Media Slides */}         
                    {medias.map((media, i) => (
                    <div key={i} className="flex items-center justify-center min-h-full min-w-full snap-center ">
                        {media.type === 'video' ? (
                        <video 
                            ref={videoRef}
                            controls
                            src={media.url} 
                            className="h-full w-auto max-h-full max-w-full object-contain focus:outline-none" 
                        />
                        ) : (
                        <Image 
                            src={media.url} 
                            alt={`img-${index}`}
                            width={0}
                            height={0}
                            unoptimized
                            className="h-full w-auto max-h-full max-w-full object-contain"
                        />
                        )}
                    </div>
                    ))} 
                </div>
            </Portal>
            )}
        </>
    )
}
