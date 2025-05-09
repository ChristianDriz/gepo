"use client"

import { NavigationProp } from "@/lib/interfaces";
import { FiBarChart2 } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-scroll";

export default function DesktopNav({ navlinks } : NavigationProp ) {

    const [isToggle, setToggle] = useState<boolean>(false);
    const handleToggle = () => {
        setToggle(!isToggle);
    }

    return (
        <nav className="sticky top-0 z-10 bg-[var(--background)] text-[var(--foreground)]">
            <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
                <Link to={'/'} className="text-xl tracking-widest font-bold uppercase font-['Playfair_Display'] ">Gepo</Link>
                <ul className="hidden md:flex  ">
                    {navlinks.map((navlink, index) => (
                    <li key={index} >
                        <Link 
                            to={navlink.link}
                            spy={true}
                            smooth='easeInOut'
                            duration={600}
                            offset={-60}
                            isDynamic={true}
                            activeClass='text-[#7D8F69]'
                            className="capitalize cursor-pointer px-4 py-2 font-medium"
                        >
                            {navlink.link}
                        </Link>
                    </li>
                    ))}     
                </ul>

                <div className="flex items-center md:hidden">
                    <button onClick={handleToggle} className="cursor-pointer">
                        <FiBarChart2 className="-rotate-90 w-6 h-6 "/>
                    </button>
                    <div className={`bg-[var(--background)] shadow-xl fixed max-w-70 w-full h-full top-0 right-0 z-30 transition-all ease-in-out duration-300 px-4 py-4.5
                        ${isToggle ? 'translate-x-0' : 'translate-x-full'}`}
                    >
                        <div className=" w-full flex items-center justify-end">
                            <button onClick={handleToggle} className="cursor-pointer">
                                <FiBarChart2 className="-rotate-90 w-6 h-6 "/>
                            </button>
                        </div>
                        <ul className="flex flex-col gap-3 px-2 py-6">
                            {navlinks.map((navlink, index) => (
                            <li key={index} className="capitalize ">
                                <Link 
                                    to={navlink.link}
                                    spy={true}
                                    smooth='easeInOut'
                                    duration={600}
                                    offset={-60}
                                    isDynamic={true}
                                    activeClass='text-[#7D8F69]'
                                >
                                    {navlink.link}
                                </Link>
                            </li>
                            ))}     
                        </ul>
                    </div>
                    <div 
                        className={`fixed backdrop-blur-sm z-20 transition-opacity inset-0 w-full ${isToggle ? 'opacity-100 visible ' : 'opacity-0 invisible'}`} 
                        onClick={handleToggle}
                    />
                </div>
            </div>
        </nav>
        
    )
}
