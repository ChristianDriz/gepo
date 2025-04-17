import { ObituaryProp } from "@/lib/queries";


export default function ObituarySection({ obituaries } : { obituaries: ObituaryProp[] }) {
    return (
        <>
        {obituaries.map((item, index) => (
            <section
                key={index}
                id={obituaries[0].slug}
                className="prose max-w-7xl mx-auto"
                dangerouslySetInnerHTML={{ __html: item.obituaryDetails.html }}
            />
        ))}
        </>
    )
}
