import React from 'react'
import { Navigation, PersonalInfo } from '@/lib/constants'
import Link from 'next/link';

export default function Footer() {

    const navlinks = Navigation;
    const date = new Date();
    const year = date.getFullYear();

    return (
        <div className='hidden md:block max-w-7xl mx-auto py-10 text-center text-[var(--muted-text)]'>
            <h2 className="text-xl tracking-widest font-bold uppercase font-['Cormorant'] mb-2">Gepo</h2>
            <h4 className='font-medium text-lg '>In Loving Memory of {PersonalInfo.name}. A tribute to a life well lived.</h4>        
            <ul className="flex justify-center gap-6 my-10">
                {navlinks.map((navlink, index) => (
                <li key={index} className="capitalize hover:underline">
                    <Link href={`#${navlink.link}`}>{navlink.link}</Link>
                </li>
                ))} 
            </ul>
            <div className='border-t border-[var(--border-subtle)] pt-6'>
                <p className='mb-2'>© {year} GEPO | All Rights Reserved.</p>
                <p>Created by Christian Joseph Driz Dimla</p>
            </div>
        </div>
    )
}
