"use client"

import { Icon } from "@iconify/react/dist/iconify.js";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

type MusicPlayerProps = {
    title: string;
    description: string;
    artist: string;
    cover: string;
    src: string;
}

export default function MusicPlayer({ title, description, artist, cover, src } : MusicPlayerProps ) {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (audioRef.current.paused) {
            audioRef.current.play();
            setIsPlaying(true);
        } else {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
    };

    const onTimeUpdate = () => {
        if (!audioRef.current) return;
        setProgress(audioRef.current.currentTime);
    };

    const onLoadedMetadata = () => {
        if (!audioRef.current) return;
        setDuration(audioRef.current.duration);
    };

    const onSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!audioRef.current) return;
        const seekTime = Number(e.target.value);
        audioRef.current.currentTime = seekTime;
        setProgress(seekTime);
    };

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.load();
        }
    }, [src]);

    return (
        <>
            <div className="w-30 h-30 rounded-md relative">
                <Image
                    src={cover}
                    alt="music"
                    width={100}
                    height={100}
                    className="rounded-lg object-cover w-full h-full "
                />
            </div>
            <audio
                ref={audioRef}
                src={src}
                onTimeUpdate={onTimeUpdate}
                onLoadedMetadata={onLoadedMetadata}
            />
            <div className=" w-full flex-1 flex flex-col">
                <div className=" flex-1 ">
                    <h4 className="font-medium mb-1 text-[var(--foreground)]">{title}</h4>
                    <p className="text-[var(--muted-text)] leading-5 mb-1 hidden">{artist}</p>
                    <p className="text-[var(--muted-text)] leading-5">{description}</p>
                </div>
                <div className=" flex items-center gap-2 w-full px-1 text-sm">
                    <span>{formatTime(progress)}</span>
                    <input
                        type="range"
                        min={0}
                        max={duration}
                        value={progress}
                        onChange={onSeek}
                        className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer range-xs accent-[var(--cool-blue)] focus:outline-none"
                    />
                    <span>{formatTime(duration)}</span>   
                    <button onClick={togglePlay} className="cursor-pointer text-[var(--cool-blue)] hover:text-[var(--text)] transition-all duration-200 focus:outline-none"> 
                        <Icon icon={`${isPlaying ? 'fe:pause' : 'fe:play' }`} className="h-6 w-6 "/>
                    </button>    
                </div>
            </div>
        </>
    )
}
