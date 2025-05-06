
import type { Metadata } from "next";
import { Cormorant , Quicksand } from 'next/font/google';
import { Navigation } from '../lib/constants'
import "./globals.css";
import DesktopNav from "./_components/Navigation/DesktopNav";
import MobileNav from "./_components/Navigation/MobileNav";
import Footer from "./_components/Footer/footer";
import Wrapper from "./_components/ui/Wrapper";

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
    title: "GEPO",
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
                <Wrapper>
                    <DesktopNav navlinks={Navigation} />
                    <MobileNav navlinks={Navigation} />
                    <main className="relative">{children}</main>
                    <footer className="w-full bg-[var(--subtle-background)]">
                        <Footer />
                    </footer>       
                </Wrapper>
            </body>
        </html>
    );
}
