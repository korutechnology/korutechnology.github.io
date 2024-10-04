import { Code, ShoppingBag, Users, Brain } from "lucide-react";
import ServiceCard from "./ServiceCard";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ServicesSection() {
    const ref = useRef(null);
    const inView = useInView(ref);

    return (
        <section
            id="services"
            className="w-full py-12 md:py-24 lg:py-32 bg-gray-300"
            ref={ref}
        >
            <div className="container px-4 md:px-6 mx-auto">
                <motion.div
                    className="flex flex-col items-center justify-center space-y-4 text-center"
                    initial={{ opacity: 0, y: -70 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
                        Our Services
                    </h2>
                </motion.div>
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    <motion.div
                        className="flex flex-col items-center justify-center space-y-4 text-center"
                        initial={{ opacity: 0, y: -70 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1 }}
                    >
                        <ServiceCard
                            icon={<Code className="h-12 w-12" />}
                            title="Tech Consulting"
                            description="Cutting-edge solutions for your technology needs. From software development to IT strategy."
                        />
                    </motion.div>
                    <motion.div
                        className="flex flex-col items-center justify-center space-y-4 text-center"
                        initial={{ opacity: 0, y: -70 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1 }}
                    >
                        <ServiceCard
                            icon={<ShoppingBag className="h-12 w-12" />}
                            title="Retail Business"
                            description="Comprehensive consulting for F&B, commercial, and other retail sectors. Boost your market presence."
                        />
                    </motion.div>

                    <motion.div
                        className="flex flex-col items-center justify-center space-y-4 text-center"
                        initial={{ opacity: 0, y: -70 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1 }}
                    >
                        <ServiceCard
                            icon={<Users className="h-12 w-12" />}
                            title="Talent Solutions"
                            description="Connect with top-tier professionals. Our talent pool spans tech, retail, and beyond."
                        />
                    </motion.div>
                    <motion.div
                        className="flex flex-col items-center justify-center space-y-4 text-center"
                        initial={{ opacity: 0, y: -70 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1 }}
                    >
                        <ServiceCard
                            icon={<Brain className="h-12 w-12" />}
                            title="AI Consultation"
                            description="Harness the power of artificial intelligence for your business. From machine learning integration to AI strategy development."
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
