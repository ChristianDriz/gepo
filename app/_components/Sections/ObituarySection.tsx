import { ObituaryProp } from "@/lib/interfaces";

export default function ObituarySection({ obituary, id } : ObituaryProp ) {
    return (
        <section className="max-w-7xl mx-auto px-4 mt-16" id={id}>
            <h2 className="capitalize mb-4" data-aos="fade-up" data-aos-duration="800">{id}</h2>
            <p 
                className="text-[var(--muted-text)] first-letter:text-[var(--foreground)] first-letter:text-5xl first-letter:float-left first-letter:mr-1.5 first-letter:font-['Playfair_Display']" 
                dangerouslySetInnerHTML={{ __html: obituary }}
                data-aos="fade-up" data-aos-duration="800"
            />
        </section>
    )
}
