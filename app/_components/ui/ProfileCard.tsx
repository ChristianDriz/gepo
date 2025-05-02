import { PersonProp } from "@/lib/interfaces";
import Image from "next/image";



export default function ProfileCard({ name, role, isAlive, profile_photo, } : PersonProp  ) {

    return (
        <article 
            className={`bg-[var(--subtle-background)] rounded-lg px-3 py-4 w-32 flex flex-col justify-center items-center gap-2 relative  
                ${(role === "child" || role === "grandchild") ? "before:content-[''] before:absolute before:-top-10 before:w-px before:h-10 before:bg-gray-300" : ""}`
            }>
            <Image 
                src={profile_photo || '/asd.png'}
                alt={''}
                width='200'
                height='400'
                className={`rounded-full w-20 h-20 object-cover border border-[var(--border-subtle)] ${!isAlive ? 'grayscale-50' : ''}`}
            />
            <p className="text-sm/4 text-center tracking-tight min-h-8">{name}</p>
        </article>
    )
}
