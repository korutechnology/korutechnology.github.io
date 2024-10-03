import { Link } from "react-router-dom";
import CareerCard from "./CareerCard";

export default function CareersSection({ careers }: { careers: any[] }) {
    return (
        <section
            id="careers"
            className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
        >
            <div className="px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Join Our Team
                        </h2>
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            We're always looking for talented individuals to
                            join our growing team. Explore our current openings
                            and take the next step in your career.
                        </p>
                    </div>
                </div>
                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {careers.map((career, idx) => (
                        <CareerCard key={idx} career={career} />
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <Link
                        to="#"
                        className="inline-flex h-9 items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-black/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                        View All Openings
                    </Link>
                </div>
            </div>
        </section>
    );
}
