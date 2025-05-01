import { ObituaryProp } from "@/lib/interfaces";

export default function ObituarySection({ obituary, id } : ObituaryProp ) {
    return (
        <section className="max-w-7xl mx-auto px-4 mt-16" id={id}>
            <h2 className="capitalize mb-4">{id}</h2>
            <p 
                className="text-[var(--foreground)] first-letter:text-5xl first-letter:float-left first-letter:mr-1.5 first-letter:font-['Cormorant']" 
                dangerouslySetInnerHTML={{ __html: obituary }}
            />
        </section>
    )
}
