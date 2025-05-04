const ContactUs = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <div className="flex-grow flex flex-col items-center justify-center">
                <div className="max-w-6xl w-full bg-white shadow-lg rounded-lg p-6 sm:p-8">
                    {/* Title Section */}
                    <h1 className="text-4xl sm:text-4xl font-bold text-blue-500 text-center mb-6">
                        Contact Us
                    </h1>

                    {/* Content Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        {/* Left Column - Content */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-semibold text-gray-800">Venue</h2>
                            <p className="text-lg text-gray-700">
                                <strong>JSPM's Rajarshi Shahu College of Engineering</strong>
                            </p>
                            <p className="text-lg text-gray-700">
                                Survey No.80, Pune-Mumbai Bypass Highway, Tathawade, Pune, Maharashtra - 411033
                            </p>
                            <p className="text-lg text-gray-700">
                                <strong>Mobile No:</strong> +91-9860678131
                            </p>
                            <p className="text-lg text-gray-700">
                                <strong>Phone No:</strong> (020)-22933423
                            </p>
                            <p className="text-lg text-gray-700">
                                <strong>Fax No:</strong> (020)-22933424
                            </p>
                            <p className="text-lg text-gray-700">
                                <strong>Email:</strong>{' '}
                                <a
                                    href="mailto:iaib2025@jspmrscoe.edu.in"
                                    className="text-blue-600 underline hover:text-blue-800"
                                >
                                    iaib2025@jspmrscoe.edu.in
                                </a>
                            </p>
                        </div>

                        {/* Right Column - Map */}
                        <div className="flex justify-center items-center">


                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.9771551135045!2d73.74462247465448!3d18.620097266127623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbbc138acb7b%3A0x67043867a211a31d!2sJSPM%20Rajarshi%20Shahu%20College%20Of%20Engineering%20%2C%20Tathawade!5e0!3m2!1sen!2sin!4v1739457962887!5m2!1sen!2sin"

                                width="100%"
                                height="100%"
                                allowFullScreen=""
                                loading="lazy"
                                className="rounded-lg border border-gray-300"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Map"


                            ></iframe>


                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-800 text-white text-center py-4">
                <p className="text-sm sm:text-base">
                    &copy; 2025 JSPM Rajarshi Shahu College of Engineering. All rights reserved.
                </p>
            </footer>
        </div >
    );
};

export default ContactUs;
