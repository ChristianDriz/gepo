import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "motion/react"
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

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
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isMediaOpen, setIsMediaOpen] = useState(false);  
    const [currentIndex, setCurrentIndex] = useState(index);

    const currentMedia = medias[currentIndex];

    const handlePrevious = () => {
        setCurrentIndex(currentIndex => (currentIndex - 1 + medias.length) % medias.length); // loop back to start
    }

    const handleNext = () => {
        setCurrentIndex(currentIndex => (currentIndex + 1 ) % medias.length); // loop to end
    }

    const handleMediaClick = () => {
        setIsMediaOpen(!isMediaOpen); // toggle media viewer
    }

    const handleClose = () => {
        setIsMediaOpen(false);  // close media viewer
        setCurrentIndex(index); // reset to original index

        if (videoRef.current) {
            videoRef.current.pause(); // pause video after close
        }
    };

    useEffect(() => {
        if (isMediaOpen) {
            document.body.style.overflow = 'hidden'; // disable scroll
        } else {
            document.body.style.overflow = ''; // reset to default
        }
    }, [isMediaOpen]);

    console.log(medias.length)

    return (
        <>  
            {/* grid media */}
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
                    className="h-full rounded-md object-cover mb-3 cursor-pointer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, transition: "easeOut" }}
                    onClick={handleMediaClick}
                />
            )}

            {/*pop up fullscreen media */}
            <div className={`media-viewer ${isMediaOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} fixed flex 
                inset-0 w-full min-h-dvh bg-black z-10 transition-opacity duration-500 overflow-hidden`}>        
                <p className="absolute text-white/70 top-3 left-3 z-10 text-sm">{currentIndex + 1} / {medias.length}</p>
                {/* close button */}
                <button 
                    onClick={handleClose} 
                    className="absolute right-3 top-3 z-10 cursor-pointer"
                >
                    <Icon icon="fe:close" className="w-7 h-7 text-white/70 hover:text-white/100"/>  
                </button>
                
                {medias.length !== 1 && (
                <>
                    {/* previous button */}
                    <button 
                        onClick={handlePrevious} 
                        className="absolute top-1/2 -translate-y-1/2 left-2 text-white/70 hover:text-white/100 pl-1.5 pr-2.5 py-2 rounded-full bg-black/50 cursor-pointer"
                    >
                        <Icon icon="fe:arrow-left" className="w-8 h-8 "/>  
                    </button>
                    {/* next button */}
                    <button 
                        onClick={handleNext} 
                        className="absolute top-1/2 -translate-y-1/2 right-2 text-white/70 hover:text-white/100 pr-1.5 pl-2.5 py-2 rounded-full bg-black/50 cursor-pointer"
                    >
                        <Icon icon="fe:arrow-right" className="w-8 h-8 "/>  
                    </button>
                </>
                )}

                {/* media */}
                {/* {medias.map((media, i) => ( */}
                <div className="flex items-center justify-center min-h-full min-w-full ">
                    {currentMedia.type === 'video' ? (
                    <motion.video 
                        ref={videoRef}
                        controls
                        src={currentMedia.url} 
                        className="h-full w-auto max-h-full max-w-full object-contain focus:outline-none" 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, transition: "easeOut" }}
                    />
                    ) : (
                    <Image 
                        src={currentMedia.url} 
                        alt={`img-${index}`}
                        width={0}
                        height={0}
                        unoptimized
                        className="h-full w-auto max-h-full max-w-full object-contain"
                    />
                    )}
                </div>
                {/* ))} */}
            </div>
        </>
    )
}
