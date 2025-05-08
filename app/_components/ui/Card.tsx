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
        <div className="px-5 py-4 rounded-lg bg-[var(--subtle-background)]" data-aos="fade-up" data-aos-duration="1500">
            <h4 className="font-medium text-[var(--cool-blue)]">{title}</h4>
            <p className="text-[var(--muted-text)]">{content}</p>
        </div>
    )
}
