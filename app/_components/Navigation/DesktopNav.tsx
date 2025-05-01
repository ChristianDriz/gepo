import { NavigationProp } from "@/lib/interfaces";
import Link from "next/link";


export default function DesktopNav({ navlinks } : NavigationProp ) {
    return (
        <nav className="sticky top-0 z-10 bg-[var(--subtle-background)] text-[var(--foreground)]">
            <div className="max-w-7xl mx-auto hidden md:flex justify-between items-center px-4 py-5 ">
                <Link href={'/'} className="text-xl tracking-widest font-bold uppercase font-['Cormorant']">Gepo</Link>
                <ul className="flex gap-6">
                    {navlinks.map((navlink, index) => (
                    <li key={index} className="capitalize ">
                        <Link href={`#${navlink.link}`}>{navlink.link}</Link>
                    </li>
                    ))}
                    
                </ul>
            </div>
        </nav>
        
    )
}
