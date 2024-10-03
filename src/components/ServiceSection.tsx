import { Code, ShoppingBag, Users } from "lucide-react";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
    return (
        <section
            id="services"
            className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
        >
            <div className="px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
                    Our Services
                </h2>
                <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
                    <ServiceCard
                        icon={<Code className="h-12 w-12" />}
                        title="Tech Consulting"
                        description="Cutting-edge solutions for your technology needs. From software development to IT strategy."
                    />
                    <ServiceCard
                        icon={<ShoppingBag className="h-12 w-12" />}
                        title="Retail Business"
                        description="Comprehensive consulting for F&B, commercial, and other retail sectors. Boost your market presence."
                    />
                    <ServiceCard
                        icon={<Users className="h-12 w-12" />}
                        title="Talent Solutions"
                        description="Connect with top-tier professionals. Our talent pool spans tech, retail, and beyond."
                    />
                </div>
            </div>
        </section>
    );
}
