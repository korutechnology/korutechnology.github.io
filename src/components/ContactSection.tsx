export default function ContactSection() {
    return (
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
            <div className="px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Get in Touch
                        </h2>
                        <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Ready to elevate your business? Contact us today for
                            a consultation.
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
    );
}
