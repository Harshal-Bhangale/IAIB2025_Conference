const AboutUs = () => {
    return (
        <div className="bg-gradient-to-r min-h-screen flex justify-center items-center">
            <section className="bg-white w-full max-w-6xl mx-auto px-8 sm:px-12 lg:px-16 py-2 sm:py-6 lg:py-2 shadow-lg rounded-2xl">
                <h1 className="text-4xl sm:text-5xl lg:text-4xl font-bold text-center text-blue-500 mb-8 sm:mb-10 lg:mb-12">
                    About the Conference
                </h1>
                <p className="text-lg sm:text-xl lg:text-xl leading-relaxed text-gray-800 text-justify ml-3 mr-3">
                    The objective of <span className="font-bold text-blue-500">IAIB 2025</span> is to explore the latest advancements and transformative potential of AI technologies.
                    It aims to bring together researchers, practitioners, and industry experts to discuss innovative applications, emerging trends, and the future impact of AI across various domains.
                    The conference will feature traditional paper presentations as well as keynote speeches by prominent speakers who will focus on related state-of-the-art technologies in the areas of the conference.
                </p>
                <p className="text-lg sm:text-xl lg:text-xl leading-relaxed text-gray-800 text-justify mt-6 ml-3 mr-3">
                    We strive to provide an inclusive platform for knowledge exchange and collaboration, fostering growth and innovation in AI and its applications.
                </p>
                <div className="text-lg sm:text-xl lg:text-2xl font-medium text-center text-gray-800 mt-10">
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
