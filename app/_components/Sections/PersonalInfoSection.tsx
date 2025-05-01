import { PersonalInfoProp } from "@/lib/interfaces";
import { Icon } from '@iconify/react';
import Image from "next/image";

export default function PersonalInfoSection({personalInfo, id } : PersonalInfoProp ) {
    return (
        <section className="max-w-7xl mx-auto md:mt-4 " id={id}>
            <div className="h-70 md:h-90 lg:h-110 xl:h-140 md:px-4 ">
                <Image 
                    src={personalInfo.background}
                    alt='Background Photo'
                    width={450}
                    height={450}
                    className="w-full h-full object-cover object-top md:rounded-xl"
                />
            </div>
            <div className="px-4 -mt-26 md:-mt-32 lg:-mt-38 w-full flex flex-col items-start md:items-center ">
                <div className='w-40 h-40 md:w-50 md:h-50 lg:w-60 lg:h-60 p-2 bg-[var(--background)] rounded-full '>
                    <Image 
                        src={personalInfo.profile}
                        alt='Profile Photo'
                        width={450}
                        height={450}
                        className='max-w-full max-h-full rounded-full object-cover '
                    />
                </div>
                <h1 className="my-3 text-3xl md:text-5xl font-semibold font-['Cormorant'] text-[var(--foreground)]">{personalInfo.name}</h1>
                <div className="flex items-center gap-2 md:text-lg font-medium text-[var(--muted-text)]">
                    <Icon icon="mynaui:calendar"/>
                    <p className="flex items-center gap-1">
                        {personalInfo.birthDate}
                    </p>
                    <span>-</span>
                    <p className="flex items-center gap-1">
                        {personalInfo.deathDate}
                    </p>
                </div>
                <div className="flex items-center gap-2 md:text-lg font-medium text-[var(--muted-text)]">
                    <Icon icon="mynaui:location"/>
                    <p>{personalInfo.placeOfBirth}</p>
                </div>
            </div>
        </section>
    )
}
