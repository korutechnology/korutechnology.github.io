export default function AboutSection() {
    return (
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                    <img
                        src={"/images/about.avif"}
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
                                At Koru Strategy Advisors, we bridge the gap
                                between talent and opportunity. With years of
                                experience in tech and retail, we provide
                                unparalleled consulting and staffing solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
