export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t">
            <div className="mx-auto px-12 md:px-12 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <address className="text-sm text-gray-600 not-italic">
                            Madison Grande M9-10,
                            Boulevard Diponegoro Street<br />
                            South Tangerang City
                            Banten 15334, Indonesia
                        </address>
                    </div>
                </div>
                <div className="border-t border-gray-200 mt-8 pt-8">
                    <p className="text-sm text-gray-500 text-center">
                        © 2024 Koru Strategy Advisors. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
