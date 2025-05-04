const AdvisoryCommittee = () => {
    const advisoryMembers = [
        "Dr. R. S. Joshi, President, JSPM University, Pune.",
        "Mr. Anil Bhosale, Director, JSPM, Pune, India.",
        "Dr. A. S. Devasthali, Deputy Director, RSCOE, Pune, India.",
        "Dr. A. M. Badadhe, Deputy Director, RSCOE, Pune, India.",
        "Dr. B. B. Gupta, Asia University, Taiwan.",
        "Dr. Sachin M. Shendokar, Intel Corporation Hillsboro, Oregon, United States.",
        "Dr. Bimlesh Wadhwa, NSU, Singapore.",
        "Dr. Nilanjan Dey, Techno International New Town, Kolkata.",
        "Prof. Hardik Gohel, Director of MS DS Program & Applied AI Research, UHV-North.",
        "Dr. B. B. Ahuja, Vice Chancellor, JSPM University, Pune, India.",
        "Dr. Manimala Puri, Vice-Chancellor (I/C), Pimpri Chinchwad University, India.",
        "Dr. M. A. Zaveri, NIT, Surat, India.",
        "Dr. P. J. Kulkarni, WIT, Sangli, India.",
        "Dr. Sanjeev Wagh, Professor, COE, Karad, India.",
        "Dr. D. S. Bormane, Principal, AISSMS, Pune, India.",
        "Dr. Aditya Abhyankar, Professor and Head, Dept of Technology, SPPU, Pune, India.",
        "Dr. Pramod Patil, Dean, Science and Technology Department, SPPU, Pune, India.",
        "Dr. P. N. Mahalle, Professor and Dean R & D VIIT, Pune, India.",
        "Mr. Sagnik Ghosh, Co-Founder and CEO of WorqHat, Pune, India.",
        "Mr. Parth Pandya, Founder of Varahi Gmbh, Germany.",
    ];

    return (
        <div className="bg-gradient-to-r from-blue-50 to-gray-100 min-h-screen py-12">
            <div className="container mx-auto px-6 sm:px-10 lg:px-16">
                <h1 className="text-4xl font-bold text-center text-blue-500 mb-12">
                    Advisory Committee
                </h1>

                <div className="w-full p-6 bg-white rounded-2xl shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {advisoryMembers.map((member, index) => (
                            <div
                                key={index}

                            >
                                <p className="text-gray-800 text-lg">{member}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvisoryCommittee;
