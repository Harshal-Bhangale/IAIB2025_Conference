import TracksPage from './Tracks';

const CallForPapers = () => {
    return (
        <div className="min-h-screen  flex justify-center items-center py-12 p-8">
            <div className="bg-grey-700 shadow-xl rounded-lg p-8 max-w-4xl w-full">
                <h1 className="text-4xl font-bold text-center text-blue-500 mb-6">Call For Papers</h1>
                <p className="text-lg text-grey-700 mb-6">
                    Researchers, Academicians, and Professionals are invited to submit their research work for the technical sessions of <strong>IAIB 2025  (Hybrid Mode)</strong>.
                </p>

                <p className="text-lg text-grey-700 mb-6">
                    All paper submissions will be peer-reviewed and evaluated based on originality, technical and/or research content/depth, correctness, relevance to the conference, contributions, and readability.
                </p>

                <div className="space-y-4 mb-6">
                    <p className="text-lg text-grey-700">
                        <strong>Note:</strong> All accepted and presented papers will be published in Scopus Indexed Book (CRC Press, Taylor and Francis).
                    </p>

                </div>
                <TracksPage />
                <div className="flex justify-center">
                    <a
                        href="https://cmt3.research.microsoft.com/IAIB2025"
                        className="bg-blue-300 text-grey-700 text-lg font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
                    >
                        Submit Your Paper
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CallForPapers;
