import { FavoriteItem } from "@/lib/interfaces";


export default function Card({ title, content } : FavoriteItem  ) {
    return (
        <div className="p-4 rounded-lg bg-[var(--subtle-background)] ">
            <h4 className="font-medium text-cyan-500">{title}</h4>
            <p className="text-[var(--muted-text)]">{content}</p>
        </div>
    )
}
