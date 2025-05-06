"use client"

import { TimelineProp } from "@/lib/interfaces";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

export default function TimelineSection({ timeline, id } : TimelineProp ) {

    useEffect(() => {
        AOS.init({});
    }, []);

    return (
        <section className="max-w-7xl mx-auto px-4 mt-16 " id={id}>
            <h2 className="capitalize mb-4 ">{id}</h2>
            <div className="flex flex-col sm:items-center overflow-hidden">
                <ul className="lg:w-[70%] relative before:content-[''] before:absolute before:top-0 before:left-1 sm:before:left-[50%] before:w-0.5 before:h-full before:bg-gray-300 ">
                    
                    {timeline.map((data, index) => {
                    const isLast = index === timeline.length - 1
                    const isOdd = index % 2 === 0
 
                    return (
                        <li 
                            key={index} 
                            className={`            
                                gap-4 flex w-full sm:w-1/2 ${isOdd ? 'float-left clear-right ' : 'float-right clear-left '}`}   
                        >   
                            <span className={` w-2.5 h-2.5 rounded-full bg-gray-300  ${isOdd ? 'sm:order-2 sm:translate-x-1.5' : 'sm:-translate-x-1'}`}/>
                            <div className="flex-1" data-aos={`${isOdd ? "fade-right" : "fade-left"}`}>
                                <p className="w-32 hidden sm:flex text-sm mb-2">{data.date}</p>
                                <div className={` 
                                    rounded-2xl rounded-tl-none px-6 py-4 bg-[var(--subtle-background)] 
                                    ${isLast ? 'mb-0' : 'mb-4 sm:mb-10'}
                                    ${isOdd ? 'sm:rounded-tr-none sm:rounded-tl-2xl' : 'sm:rounded-tl-none sm:rounded-tr-2xl'}`}
                                >
                                    <p className="w-32 mb-1 sm:hidden text-sm">{data.date}</p>
                                    <h4 className="text-lg font-medium">{data.title}</h4> 
                                    <p className="text-[var(--muted-text)]">{data.description}</p>
                                </div>
                            </div>
                        </li>
                        );
                    })}
                    
                
                    
                </ul>
            </div>
        </section>
    )
}
