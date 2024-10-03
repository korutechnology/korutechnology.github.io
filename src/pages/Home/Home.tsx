import { Code, ShoppingBag, Users } from "lucide-react";
import { Link } from "react-router-dom";
import careersData from "../../assets/careers.json";
import { useEffect, useState } from "react";
import CareerCard from "../../components/CareerCard";

export default function LandingPage() {
    const [careers, setCareers] = useState<any[]>([]);
    useEffect(() => {
        // Simulate fetching the data
        setCareers(careersData);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        section?.scrollIntoView({ behavior: "smooth" });
    };
    console.log(careers);
    return (
        <div className="flex flex-col min-h-screen">
            <header className="px-4 lg:px-6 h-16 flex items-center">
                <Link className="flex items-center justify-center gap-1" to="#">
                    <img
                        src={"/src/assets/images/white-logo.png"}
                        alt="Koru Strategy Advisors Logo"
                        className="h-[40px]"
                        loading="lazy"
                    />
                    <span className="hidden md:block font-bold">
                        Koru Strategy Advisors
                    </span>
                    <span className="md:hidden font-bold">Koru</span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link
                        className="text-sm font-medium hover:underline underline-offset-4"
                        to="#services"
                        onClick={() => scrollToSection("services")}
                    >
                        Services
                    </Link>
                    <Link
                        className="text-sm font-medium hover:underline underline-offset-4"
                        to="#about"
                        onClick={() => scrollToSection("about")}
                    >
                        About
                    </Link>
                    <Link
                        className="text-sm font-medium hover:underline underline-offset-4"
                        to="#careers"
                        onClick={() => scrollToSection("careers")}
                    >
                        Careers
                    </Link>
                    <Link
                        className="text-sm font-medium hover:underline underline-offset-4"
                        to="#contact"
                        onClick={() => scrollToSection("contact")}
                    >
                        Contact
                    </Link>
                </nav>
            </header>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                            <img
                                src={"/src/assets/images/talent.avif"}
                                width={600}
                                height={400}
                                alt="Consulting team collaborating"
                                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                                loading="lazy"
                            />
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                        Elevate Your Business with Koru Strategy
                                        Advisors
                                    </h1>
                                    <p className="max-w-[600px] text-gray-300 md:text-xl">
                                        Expert consulting and talent solutions
                                        for tech and retail industries. Unlock
                                        your potential today.
                                    </p>
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
                </section>
                <section
                    id="services"
                    className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
                >
                    <div className="px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
                            Our Services
                        </h2>
                        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
                            <div className="flex flex-col items-center space-y-4 text-center">
                                <Code className="h-12 w-12" />
                                <h3 className="text-xl font-bold">
                                    Tech Consulting
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Cutting-edge solutions for your technology
                                    needs. From software development to IT
                                    strategy.
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-4 text-center">
                                <ShoppingBag className="h-12 w-12" />
                                <h3 className="text-xl font-bold">
                                    Retail Business
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Comprehensive consulting for F&B,
                                    commercial, and other retail sectors. Boost
                                    your market presence.
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-4 text-center">
                                <Users className="h-12 w-12" />
                                <h3 className="text-xl font-bold">
                                    Talent Solutions
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Connect with top-tier professionals. Our
                                    talent pool spans tech, retail, and beyond.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="about" className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                            <img
                                src={"/src/assets/images/about.jpg"}
                                width={600}
                                height={400}
                                alt="Our team at work"
                                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                                loading="lazy"
                            />
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                        About Koru Strategy Advisors
                                    </h2>
                                    <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                        At Koru Strategy Advisors, we bridge the
                                        gap between talent and opportunity. With
                                        years of experience in tech and retail,
                                        we provide unparalleled consulting and
                                        staffing solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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
                                    We're always looking for talented
                                    individuals to join our growing team.
                                    Explore our current openings and take the
                                    next step in your career.
                                </p>
                            </div>
                        </div>
                        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {careers.map((career: any, idx: number) => {
                                return <CareerCard key={idx} career={career} />;
                            })}
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
                <section
                    id="contact"
                    className="w-full py-12 md:py-24 lg:py-32"
                >
                    <div className="px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Get in Touch
                                </h2>
                                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Ready to elevate your business? Contact us
                                    today for a consultation.
                                </p>
                            </div>
                            <div className="w-full max-w-sm space-y-2">
                                <form className="flex flex-col gap-2">
                                    <input
                                        className="max-w-lg flex-1 rounded-md px-2 py-1 border border-gray-300"
                                        placeholder="Enter your email"
                                        type="email"
                                    />
                                    <button
                                        type="submit"
                                        className="bg-black transition-colors hover:bg-black/80 text-white rounded-md px-3 py-2"
                                    >
                                        Contact Us
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                <p className="text-xs text-gray-500">
                    © 2024 Koru Strategy Advisors. All rights reserved.
                </p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link
                        className="text-xs hover:underline underline-offset-4"
                        to="#"
                    >
                        Terms of Service
                    </Link>
                    <Link
                        className="text-xs hover:underline underline-offset-4"
                        to="#"
                    >
                        Privacy
                    </Link>
                </nav>
            </footer>
        </div>
    );
}
