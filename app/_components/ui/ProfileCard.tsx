import { PersonProp } from "@/lib/interfaces";
import Image from "next/image";



export default function ProfileCard({ name, profile_photo } : PersonProp  ) {
    return (
        <article className="bg-[var(--subtle-background)] rounded-lg p-4 w-32 flex flex-col ">
            <Image 
                src={profile_photo || '/asd.png'}
                alt={''}
                width='200'
                height='400'
                className="rounded-full w-20 h-20 "
            />
            <h4 className="text-sm ">{name}</h4>
        </article>
    )
}
