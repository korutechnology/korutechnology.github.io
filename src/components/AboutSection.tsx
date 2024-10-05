import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
    const ref = useRef(null);
    const inView = useInView(ref);

    return (
        <section
            id="about"
            className="w-full py-12 md:py-24 lg:py-32 bg-gray-200"
        >
            <div className="px-4 md:px-6 lg:px-12 2xl:px-24">
                <div ref={ref} className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                    <motion.img
                        src={import.meta.env.BASE_URL + "/images/about.avif"}
                        width={600}
                        height={400}
                        alt="Our team at work"
                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last transition-transform duration-300 ease-in-out transform hover:scale-105"
                        loading="lazy"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5 }}
                    />
                    <motion.div
                        className="flex flex-col justify-center space-y-4"
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <div className="space-y-2">
                            <motion.h2
                                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                                initial={{ opacity: 0, y: -20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                About Koru Strategy Advisors
                            </motion.h2>
                            <motion.p
                                className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.7 }}
                            >
                                At Koru Strategy Advisors, we bridge the gap
                                between talent and opportunity. With years of
                                experience in tech and retail, we provide
                                unparalleled consulting and staffing solutions.
                            </motion.p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
