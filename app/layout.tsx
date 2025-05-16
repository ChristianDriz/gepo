
import type { Metadata } from "next";
import { Playfair_Display , Work_Sans } from 'next/font/google';
import { Navigation } from '../lib/constants'
import "./globals.css";
import Navbar from "./_components/Navigation/Navbar";
import Footer from "./_components/Footer/footer";
import Wrapper from "./_components/ui/Wrapper";

const playfair = Playfair_Display({
    weight: ['400', '500', '600', '700', '800', '900'], 
    subsets: ['latin'],
    display: 'swap',
})

const work_sans = Work_Sans ({
    weight: ['400', '500', '600', '700'], 
    subsets: ['latin'],
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'GEPO',
    description: `In Loving Memory of Michael Angelo. A tribute to a life well lived.`,
    // icons: { icon: "/MovieDrixLogo.png" },
    metadataBase: new URL('https://michaelangelodrizdimla.vercel.app'),
    creator: "Christian Joseph Driz Dimla",
    openGraph: {
        title: 'GEPO',
        url: 'https://michaelangelodrizdimla.vercel.app',
        description: `In Loving Memory of Michael Angelo. A tribute to a life well lived.`,
        type: 'website',
        images: [
            {
                url: '/images/background.jpg',
                width: 800,
                height: 800,
                alt: "GEPO",
            },
        ],
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" >
            <body className={`${playfair.className} ${work_sans.className} antialiased relative`}>     
                <Wrapper>
                    <Navbar navlinks={Navigation} />
                    <main className="relative">{children}</main>
                    <footer className="w-full bg-[var(--subtle-background)]">
                        <Footer />
                    </footer>       
                </Wrapper>
            </body>
        </html>
    );
}
