const LandingPage = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/assets/worldMap.jpg')" }}
    >
      {/* Add padding to avoid overlap with navbar */}
      <div className="relative w-full">
        {/* World Map Image */}

        {/* Content Overlay */}
        <div className="flex flex-col text-center bg-opacity-60 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white">
            International Conference
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl mt-4 text-white">
            on Artificial Intelligence and Beyond: Emerging Innovations and
            Applications
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl mt-6 text-white">
            (IAIB 2025)
          </p>
          <p className="text-lg sm:text-xl lg:text-2xl mt-6 text-white">
            Hybrid Mode
          </p>
          <p className="text-base sm:text-lg lg:text-xl mt-4 text-white">
            27th - 28th June, 2025 | Pune, Maharashtra
          </p>
          <div className="mt-8">
            <a
              href="#register"
              className="bg-blue-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
