import { TimelineProp } from "@/lib/interfaces";
import { Icon } from '@iconify/react';

export default function TimelineSection({ timeline, id } : TimelineProp ) {

    return (
        <section className="max-w-7xl mx-auto px-4 mt-16" id={id}>
            <h2 className="capitalize mb-4">{id}</h2>
            <div className="flex flex-col gap-4">
                {timeline.map((data, index) => {
                const isLast = index === timeline.length - 1

                return (
                    <div key={index} className="flex gap-6 ">
                        <div className="relative">
                            <Icon icon={data.icon} className="h-8 w-8 p-1 bg-[var(--subtle-background)] drop-shadow-md rounded-full"/>
                            <span className={`${!isLast ? "after:content-[''] after:absolute after:w-px after:h-[calc(100%-16px)] after:left-[50%] after:bg-gray-300" : ""}`}></span>
                        </div>
                        <div className="p-5 rounded drop-shadow-md bg-white relative before:content-[''] before:absolute before:top-2.5 before:-left-2
                            before:-mb-2 before:border-t-8 before:border-t-transparent before:border-b-8 before:border-b-transparent before:border-r-8 before:border-r-white">
                            <p className="w-32 ">{data.date}</p>
                            <p>{data.title}</p>
                            <p>{data.description}</p>
                        </div>
                    </div>
                    );
                })}
            </div>
        </section>
    )
}
