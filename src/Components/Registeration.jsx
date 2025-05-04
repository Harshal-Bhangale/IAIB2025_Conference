const Registration = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br flex justify-center items-center py-12 px-6">
            <div className="backdrop-blur-md bg-white/30 shadow-xl rounded-2xl p-8 max-w-4xl w-full">
                <h1 className="text-4xl font-bold text-center text-blue-500 mb-6">Conference Registration</h1>

                <p className="text-lg text-gray-800 mb-6">
                    Payment of fees must accompany all registration forms. Your registration <strong>WILL NOT</strong> be confirmed until payment is received in full. Payment must be made in USD/INR. The conference organizer will not accept any bank charges associated with the transfer of money.
                </p>

                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Registration Fees</h2>
                    <table className="min-w-full table-auto text-gray-800">
                        <thead>
                            <tr className="bg-blue-200/50">
                                <th className="py-2 px-4 border-b border-gray-400 text-left">Category</th>
                                <th className="py-2 px-4 border-b border-gray-400 text-left">Registration Fees</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border-b border-gray-300">UG Students</td>
                                <td className="py-2 px-4 border-b border-gray-300">INR 12000</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b border-gray-300">PG Students/PhD Scholars</td>
                                <td className="py-2 px-4 border-b border-gray-300">INR 13000</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b border-gray-300">Industry Delegates and Academicians</td>
                                <td className="py-2 px-4 border-b border-gray-300">INR 14000</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b border-gray-300">International Delegates</td>
                                <td className="py-2 px-4 border-b border-gray-300">USD 200</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="space-y-4 mb-6">
                    <p className="text-lg text-gray-800">
                        The regular fees will be charged for up to 6 pages. After that, additional charges will apply:
                        <ul className="list-disc pl-6">
                            <li>USD 5.75 / INR 500 per page</li>
                        </ul>
                    </p>
                </div>

                <div className="space-y-4 mb-6">
                    <p className="text-lg text-grey-700">
                        <strong>Note:</strong> All accepted and presented papers will be published in Scopus Indexed Book (CRC Press, Taylor and Francis).
                    </p>

                </div>

                <div className="flex justify-center">
                    <a
                        href="https://forms.gle/FzhXwVhNoevjeMJB6"
                        className="bg-blue-300 text-white text-lg font-semibold py-2 px-6 rounded-full hover:bg-blue-700 transition duration-200 shadow-lg"
                    >
                        Register Now
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Registration;
