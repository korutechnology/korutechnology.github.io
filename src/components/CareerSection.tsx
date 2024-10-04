import { Link } from "react-router-dom";
import CareerCard from "./CareerCard";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CareersSection({ careers }: { careers: any[] }) {
    const ref = useRef(null);
    const inView = useInView(ref);

    return (
        <section
            id="careers"
            className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
            ref={ref}
        >
            <div className="px-4 md:px-6">
                <motion.div
                    className="flex flex-col items-center justify-center space-y-4 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1 }}
                >
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
                </motion.div>
                <motion.div
                    className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={{
                        hidden: {
                            opacity: 0,
                            y: 20,
                        },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                staggerChildren: 0.4,
                            },
                        },
                    }}
                >
                    {careers.map((career, idx) => (
                        <motion.div
                            key={idx}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <CareerCard career={career} />
                        </motion.div>
                    ))}
                </motion.div>
                <motion.div
                    className="mt-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1 }}
                >
                    <Link
                        to="#"
                        className="inline-flex h-9 items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-black/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                        View All Openings
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
