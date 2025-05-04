
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Address Section */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                        <p className="text-lg mb-2">JSPM Rajarshi Shahu College of Engineering, Survey No.80, Pune-Mumbai Bypass Highway, Tathawade, Pune, Maharashtra - 411033</p>

                        <p className="text-lg">
                            <strong>Phone No:</strong> 020 2293 3423, 9850250540, 9763722242
                        </p>
                        <p className="text-lg">
                            <strong>Email:</strong> icatcsit2020@gmail.com
                        </p>
                    </div>

                    {/* Additional Info Section */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
                        <div className="flex space-x-4">
                            <a
                                href="https://facebook.com"
                                className="text-white hover:text-blue-500 transition duration-200"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Facebook
                            </a>
                            <a
                                href="https://twitter.com"
                                className="text-white hover:text-blue-400 transition duration-200"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Twitter
                            </a>
                            <a
                                href="https://linkedin.com"
                                className="text-white hover:text-blue-600 transition duration-200"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="text-center mt-8 border-t pt-6">
                    <p className="text-lg">&copy; {new Date().getFullYear()} JSPM Rajarshi Shahu College of Engineering. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
