import { TimelineProp } from "@/lib/interfaces";
// import { Icon } from '@iconify/react';

export default function TimelineSection({ timeline, id } : TimelineProp ) {

    return (
        <section className="max-w-7xl mx-auto px-4 mt-16 " id={id}>
            <h2 className="capitalize mb-10 ">{id}</h2>
            <div className="flex flex-col sm:items-center relative mt-6">
                <ul className="sm:w-[70%] ml-10 sm:ml-0 before:content-[''] before:absolute before:top-0 before:left-4 sm:before:left-[50%] before:w-0.5 before:h-full before:bg-gray-300 ">
                    {timeline.map((data, index) => {
                    const isLast = index === timeline.length - 1
                    const isOdd = index % 2 === 0
 
                    return (
                        <li 
                            key={index} 
                            className={`
                                sm:-mt-6 flex flex-col w-full sm:w-1/2 before:content-[''] before:absolute before:w-5 before:h-5 before:rounded-full before:bg-gray-300 before:-translate-y-3 sm:before:translate-y-4
                                ${isOdd ? 'float-left clear-right sm:-translate-x-6 before:left-1.5 sm:before:left-auto sm:before:-right-[35px]' : 'float-right clear-left sm:translate-x-6 before:left-1.5 sm:before:-left-[33px]'}`}   
                        >   
                            <p className="w-32 hidden sm:block text-sm mb-2">{data.date}</p>
                            <div className={` 
                                rounded-2xl rounded-tl-none px-6 py-4 bg-[var(--subtle-background)] 
                                ${isLast ? 'mb-0' : 'mb-4 sm:mb-10'}
                                ${isOdd ? 'sm:rounded-tr-none sm:rounded-tl-2xl' : 'sm:rounded-tl-none sm:rounded-tr-2xl'}`}
                            >
                                <p className="w-32 sm:hidden text-sm  ">{data.date}</p>
                                <h4 className="text-lg font-medium">{data.title}</h4> 
                                <p className="text-[var(--muted-text)]">{data.description}</p>
                            </div>
                        </li>
                        );
                    })}
                    
                
                    
                </ul>
            </div>
        </section>
    )
}
