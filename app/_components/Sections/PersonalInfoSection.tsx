import { PersonalInfo } from "@/lib/queries";
import { FiMapPin, FiCalendar  } from "react-icons/fi";
import { formatDate } from "@/lib/formatDate";
import Image from "next/image";


export default function PersonalInfoSection({personalInfos} : PersonalInfo ) {
    return (
        <section className="max-w-7xl mx-auto">
            <div className="h-70 md:h-90 lg:h-110 xl:h-140 ">
                <Image 
                    src={personalInfos[0].backgroundPhoto.url}
                    alt='Profile Photo'
                    width={450}
                    height={450}
                    className="w-full h-full object-cover rounded-b-xl"
                />
            </div>
            <div className="px-3 md:px-4 flex flex-col lg:flex-row justify-center items-center lg:items-end gap-2 -mt-14 md:-mt-20 relative ">
                <div className='w-40 h-40 md:w-70 md:h-70 p-3 bg-white rounded-full '>
                    <Image 
                        src={personalInfos[0].profilePhoto.url}
                        alt='Profile Photo'
                        width={450}
                        height={450}
                        className='max-w-full max-h-full rounded-full object-cover'
                    />
                </div>
                <div className="flex flex-col items-center lg:items-start ">
                    <h1 className="text-center lg:text-left text-5xl font-[merriweather]">{personalInfos[0].fullName}</h1>
                    <div className="text-black/60 text-lg mt-4">
                        <div className="flex items-center gap-2">
                            <FiMapPin />
                            <p>{formatDate(personalInfos[0].birthDate.toLocaleString())}</p>
                            <span>-</span>
                            <p>{formatDate(personalInfos[0].deathDate.toLocaleString())}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FiCalendar />
                            <p>{personalInfos[0].placeOfBirth}</p>
                        </div>      
                    </div>
                    
                </div>
            </div>
        </section>
    )
}
