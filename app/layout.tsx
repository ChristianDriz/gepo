import type { Metadata } from "next";
import { Cormorant , Quicksand } from 'next/font/google';
import "./globals.css";
import DesktopNav from "./_components/Navigation/DesktopNav";
import MobileNav from "./_components/Navigation/MobileNav";
import { Navigation } from '../lib/constants'

const cormorant = Cormorant({
    weight: ['400', '500', '600', '700'], 
    subsets: ['latin'],
    display: 'swap',
})

const quicksand = Quicksand({
    weight: ['400', '500', '600', '700'], 
    subsets: ['latin'],
    display: 'swap',
})

export const metadata: Metadata = {
    title: "Michael Angelo Driz Dimla",
    description: "In memories of Michael Angelo (Gepo)",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" >
            <body className={`${cormorant.className} ${quicksand.className} antialiased relative`}>                
                <DesktopNav navlinks={Navigation}/>
                <MobileNav navlinks={Navigation}/> 
                <main className="relative">
                    {children}
                </main>
            </body>
        </html>
    );
}
