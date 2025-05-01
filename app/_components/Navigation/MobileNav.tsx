import { NavigationProp } from '@/lib/interfaces'
import { Icon } from '@iconify/react';

import Link from 'next/link'
import React from 'react'


export default function MobileNav({ navlinks } : NavigationProp ) {
    return (
        <nav className='fixed bottom-0 z-10 w-full bg-[var(--subtle-background)] border-t border-[var(--border-subtle)] md:hidden'>
            <ul className='flex justify-evenly items-center p-4 '>
                {navlinks.map((navlink, index) => (
                <li key={index}>
                    <Link href={`#${navlink.link}`} className='text-2xl text-[var(--foreground)]'>
                        <Icon icon={navlink.icon}/>
                    </Link>
                </li>
                ))}
            
            </ul>
        </nav>
    )
}
