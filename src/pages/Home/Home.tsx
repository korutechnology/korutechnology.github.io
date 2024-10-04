import careersData from "@/assets/careers.json";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";
import ServicesSection from "../../components/ServiceSection";
import AboutSection from "../../components/AboutSection";
import CareersSection from "../../components/CareerSection";
import Footer from "../../components/Footer";
import Parallax from "@/components/Parallax";
import Motivation from "@/components/Motivation";

export default function LandingPage() {
    const [careers, setCareers] = useState<any[]>([]);

    useEffect(() => {
        setCareers(careersData);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        section?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header scrollToSection={scrollToSection} />
            <main className="flex-1 bg-black">
                <HeroSection />
                <Motivation />
                <Parallax />
                <ServicesSection />
                <AboutSection />
                <CareersSection careers={careers} />
            </main>
            <Footer />
        </div>
    );
}
