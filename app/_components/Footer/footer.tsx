"use client"

import React from 'react'
import { Navigation, PersonalInfo } from '@/lib/constants'
import { Link } from "react-scroll";

export default function Footer() {

    const navlinks = Navigation;
    const date = new Date();
    const year = date.getFullYear();

    return (
        <div className=' max-w-7xl mx-auto text-center text-[var(--foreground)]'>
            <div className='py-6 flex flex-col gap-4'>
                <h3 className="text-xl tracking-widest font-bold uppercase font-['Playfair_Display'] ">Gepo</h3>
                <p className='text-lg leading-6 font-medium '>In Loving Memory of {PersonalInfo.name}. <br/> A tribute to a life well lived.</p>  
                <ul className="flex flex-col gap-1 font-medium md:flex-row items-center justify-center md:gap-6">
                    {navlinks.map((navlink, index) => (
                    <li key={index} className="capitalize hover:underline">
                        <Link 
                            to={navlink.link}
                            spy={true}
                            smooth='easeInOut'
                            duration={600}
                            offset={-60}
                            isDynamic={true}
                        >{navlink.link}
                        </Link>
                    </li>
                    ))} 
                </ul>
            </div>
            <div className='border-t border-[var(--border-subtle)] text-[var(--muted-text)] py-6'>
                <p className='mb-2 text-base leading-4'>Created by Christian Joseph Driz Dimla</p>
                <p className='text-base leading-4'>© {year} GEPO. All Rights Reserved.</p>
            </div>
        </div>
    )
}
