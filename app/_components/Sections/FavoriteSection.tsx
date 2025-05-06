import { FavoritesProp } from "@/lib/interfaces";
import Card from "../ui/Card";

export default function FavoriteSection({ favorites, id } : FavoritesProp ) {
    
    return (
        <section className="max-w-7xl mx-auto px-4 mt-16" id={id}>
            <h2 className="mb-4 capitalize">{id}</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {favorites.map((favorite, index) => (
                    <li key={index}>
                        <Card     
                            title={favorite.title} 
                            content={favorite.content}
                        />
                    </li>
                ))} 
            </ul> 
        </section>
    )
}
