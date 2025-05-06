"use client"

import { FavoriteItem } from "@/lib/interfaces";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

export default function Card({ title, content } : FavoriteItem  ) {

    useEffect(() => {
        AOS.init({});
    }, []);    

    return (
        <div className="p-4 rounded-lg bg-[var(--subtle-background)]" data-aos="flip-right" data-aos-duration="500">
            <h4 className="font-medium text-cyan-500">{title}</h4>
            <p className="text-[var(--muted-text)]">{content}</p>
        </div>
    )
}
