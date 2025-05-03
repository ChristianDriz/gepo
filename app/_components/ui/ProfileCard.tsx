import { PersonProp } from "@/lib/interfaces";
import Image from "next/image";

export default function ProfileCard({ name, gender, birthdate, role, isAlive, profile_photo, } : PersonProp  ) {

    // const todate = new Date();
    // const age = todate.toLocaleDateString() - birthdate;
    
    return (
        <article 
            className={`relative rounded-lg flex gap-2 bg-[var(--subtle-background)] p-3 
                ${(role === "child" || role === "grandchild") ? "before:content-[''] before:absolute before:-left-8 before:top-1/2 before:h-px before:w-8 before:bg-gray-300" : ""}`
            }>
            <div className="w-20 h-20 rounded-full border border-[var(--border-subtle)]">
                <Image 
                    src={`${ profile_photo ? profile_photo : `${gender === 'male' ? '/images/default-male-img.png' : '/images/default-female-img.png'}` }`}
                    alt={''}
                    width='80'
                    height='80'
                    className={`rounded-full w-full h-full object-cover ${!isAlive ? 'grayscale-50' : ''}`}
                />
            </div>
            <div className="flex flex-col gap-1.5 flex-1 w-32 text-left text-[var(--muted-text)] tracking-tight ">
                <h4 className="text-base/4 font-medium">{name}</h4>
                <p className="text-sm/3.5">{birthdate} </p>
            </div>
        </article>
    )
}
