import type { Metadata } from "next";
import { Merriweather, Quicksand } from 'next/font/google';
import "./globals.css";

const merriweather = Merriweather({
    weight: ['400', '700', '900'], 
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
            <body className={`${merriweather.className} ${quicksand.className} antialiased`}>
                <main className="scroll-smooth">
                    {children}
                </main>
            </body>
        </html>
    );
}
