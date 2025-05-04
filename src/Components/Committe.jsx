import AdvisoryCommittee from "./AdvisoryCommitte";

const Committee = () => {
    const roles = [
        {
            title: "CHIEF PATRON",
            description: "Hon. Dr. T. J. Sawant, Founder Secretary, Jayawant Shikshan Prasarak Mandal, Pune.",
            img: "/assets/SawantSir.png",
        },
        {
            title: "PATRON",
            description: "Dr. Sudhir Bhilare, Executive Director, RSCOE, Pune",
            img: "/assets/bhilareSir.png",
        },
        {
            title: "PATRON",
            description: "Shri. Ravi Sawant, Director, RSCOE, Pune.",
            img: "/assets/RaviSawant.png",
        },
        {
            title: "CHAIRMAN",
            description: "Dr. Santosh P. Bhosle, Director, RSCOE, Pune.",
            img: "/assets/PrincipalSir.png",
        },
        {
            title: "CONVENER",
            description: "Dr. Seema V. Kedar, Head of Computer Engineering Department, RSCOE, Pune.",
            img: "/assets/KedareMam.png",
        },
        {
            title: "CO-CONVENER",
            description: "Dr. Rushali A. Deshmukh, Associate Professor, Computer Engineering Department, RSCOE, Pune.",
            img: "/assets/RushaliMam.png",
        },
        {
            title: "CO-ORDINATOR",
            description: "Dr. Prema B. Sahane, Asst. Professor, Computer Department, RSCOE, Pune. (Contact No: +91-9860678131)",
            img: "/assets/SahaneMam.png",
        },
    ];

    return (
        <div>
            <div className="bg-gradient-to-r from-blue-50 to-gray-100 min-h-screen py-12 mt-6">
                <div className="container mx-auto px-6 sm:px-10 lg:px-16">
                    <h1 className="text-4xl font-bold text-center text-blue-500 mb-12">
                        Committee Members
                    </h1>

                    {/* First Row: 4 Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        {roles.slice(0, 4).map((role, index) => (
                            <div
                                key={index}
                                className="relative group w-full p-6 bg-white rounded-2xl shadow-lg transition-all duration-300"
                            >
                                {/* Top Half Overlay */}
                                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-r from-blue-500 to-indigo-300 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-multiply"></div>

                                {/* Content */}
                                <div className="relative z-10 text-center">
                                    {/* Profile Picture */}
                                    <div className="w-24 h-24 mx-auto overflow-hidden rounded-full border-4 border-gray-200">
                                        <img
                                            src={role.img}
                                            alt={role.title}
                                            className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-90"
                                        />
                                    </div>
                                    {/* Role Title */}
                                    <h2 className="mt-4 text-xl font-semibold text-gray-800">
                                        {role.title}
                                    </h2>
                                    {/* Description */}
                                    <p className="mt-2 text-gray-600">
                                        {role.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Second Row: 3 Cards Centered */}
                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {roles.slice(4).map((role, index) => (
                                <div
                                    key={index + 4}
                                    className="relative group w-full p-6 bg-white rounded-2xl shadow-lg transition-all duration-300"
                                >
                                    {/* Top Half Overlay */}
                                    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-r from-blue-500 to-indigo-300 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-multiply"></div>

                                    {/* Content */}
                                    <div className="relative z-10 text-center">
                                        {/* Profile Picture */}
                                        <div className="w-24 h-24 mx-auto overflow-hidden rounded-full border-4 border-gray-200">
                                            <img
                                                src={role.img}
                                                alt={role.title}
                                                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-90"
                                            />
                                        </div>
                                        {/* Role Title */}
                                        <h2 className="mt-4 text-xl font-semibold text-gray-800">
                                            {role.title}
                                        </h2>
                                        {/* Description */}
                                        <p className="mt-2 text-gray-600">
                                            {role.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
            <AdvisoryCommittee />
        </div>

    );
};

export default Committee;
