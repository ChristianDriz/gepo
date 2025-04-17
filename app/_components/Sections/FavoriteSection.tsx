import { FavoritesProp } from "@/lib/queries";

export default function FavoriteSection({ favorites } : { favorites: FavoritesProp[] }) {
    return (
        <section
            id={favorites[0].slug}
            className="max-w-7xl mx-auto"
        >
            FavoriteSection
        </section>
    )
}
