import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function HeroSection() {
    // Define animations for the section and elements
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.section
            className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white"
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            transition={{ duration: 0.5 }}
        >
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                    <motion.img
                        src={import.meta.env.BASE_URL + "/images/talent.avif"}
                        width={600}
                        height={400}
                        alt="Consulting team collaborating"
                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last transition-transform duration-300 ease-in-out transform hover:scale-105"
                        loading="lazy"
                        variants={imageVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5 }}
                    />
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <motion.h1
                                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                                variants={textVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ duration: 0.5 }}
                            >
                                Elevate Your Business with Koru Strategy
                                Advisors
                            </motion.h1>
                            <motion.p
                                className="max-w-[600px] text-gray-300 md:text-xl"
                                variants={textVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ duration: 0.5 }}
                            >
                                Expert consulting and talent solutions for tech
                                and retail industries. Unlock your potential
                                today.
                            </motion.p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Link
                                className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-black shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50"
                                to="#contact"
                            >
                                Get Started
                            </Link>
                            <Link
                                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-400 px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50"
                                to="#services"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
