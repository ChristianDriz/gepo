import React from 'react'
import { Navigation, PersonalInfo } from '@/lib/constants'
import Link from 'next/link';

export default function Footer() {

    const navlinks = Navigation;
    const date = new Date();
    const year = date.getFullYear();

    return (
        <div className=' max-w-7xl mx-auto p-4 text-center text-[var(--muted-text)]'>
                <div className='my-4'>
                    <h2 className="text-xl tracking-widest font-bold uppercase font-['Cormorant'] mb-2">Gepo</h2>
                    <h4 className=' text-lg leading-6'>In Loving Memory of {PersonalInfo.name}. A tribute to a life well lived.</h4>  
                </div>
                <ul className="flex flex-col md:flex-row border-t border-[var(--border-subtle)] md:border-none py-4 items-center justify-center gap-2 md:gap-6 md:mb-2">
                    {navlinks.map((navlink, index) => (
                    <li key={index} className="capitalize hover:underline">
                        <Link href={`#${navlink.link}`}>{navlink.link}</Link>
                    </li>
                    ))} 
                </ul>
                
           
            <div className='border-t border-[var(--border-subtle)] pt-6'>
                <p className='mb-1'>© {year} GEPO | All Rights Reserved.</p>
                <p>Created by Christian Joseph Driz Dimla</p>
            </div>
        </div>
    )
}
