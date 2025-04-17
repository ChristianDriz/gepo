import { DataProp } from "@/lib/queries";
import Link from "next/link";


export default function Navbar({ obituaries, favorites, timelines, galleries, familyTrees } : DataProp ) {
    return (
        <nav className="max-w-xl mx-auto shadow-2xl rounded-lg my-10">
            <ul className="flex items-center justify-evenly capitalize p-2 text-black/70">
                <li>
                    <Link href={`#${obituaries[0].slug}`}>{obituaries[0].slug}</Link>
                </li>
                <li>
                    <Link href={`#${favorites[0].slug}`}>{favorites[0].slug}</Link>
                </li>
                <li>
                    <Link href={`#${timelines[0].slug}`}>{timelines[0].slug}</Link>
                </li>
                <li>
                    <Link href={`#${galleries[0].slug}`}>{galleries[0].slug}</Link>
                </li>
                <li>
                    <Link href={`#${familyTrees[0].slug}`}>{familyTrees[0].slug}</Link>
                </li>
            </ul>
        </nav>
    )
}
