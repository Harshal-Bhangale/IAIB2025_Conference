const CallForPapers = () => {
    return (
        <div className="bg-gradient-to-r min-h-screen flex justify-center items-center py-12">
            <div className="bg-white shadow-lg rounded-2xl p-8 max-w-4xl w-full">
                <h1 className="text-4xl sm:text-4xl font-bold text-center text-blue-500 mb-8"> Paper Submission</h1>

                <p className="text-lg sm:text-xl text-gray-700 mb-6">
                    Authors are invited to submit the Full papers of their Research/Review Papers. The papers will be peer-reviewed, and only the accepted and registered papers will be considered for presentation during the conference and publication in the proceedings.
                </p>

                <p className="text-lg sm:text-xl text-gray-700 mb-6">
                    <strong>Note:</strong> Acceptance of a full-length submission is strictly based on the reviewers’ comments. All submissions must be made through the CMT platform using the link:{" "}
                    <a
                        href="https://cmt3.research.microsoft.com/IAIB2025"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 font-semibold hover:underline"
                    >
                        https://cmt3.research.microsoft.com/IAIB2025
                    </a>.
                </p>

                <p className="text-lg sm:text-xl text-gray-700 mb-6">
                    At least one of the authors of an accepted paper needs to register for the conference and present the paper(s).
                </p>

                <p className="text-lg sm:text-xl text-gray-700 mb-6">
                    All manuscripts should be prepared using the CRC Press Book Chapter template. Templates can be downloaded from the following links:
                </p>

                <ul className="list-disc list-inside text-lg sm:text-xl text-gray-700 space-y-2 mb-6">
                    <li>
                        <a
                            href="CRC_Format.docx"
                            download="CRC_Format"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 font-semibold hover:underline"
                        >
                            Word Template Download
                        </a>
                    </li>
                    <li>
                        <a
                            href="CRC_Format.pdf"
                            download='CRC_Format'
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 font-semibold hover:underline"
                        >
                            PDF Template Download
                        </a>
                    </li>
                </ul>

                <div className="flex justify-center">
                    <a
                        href="https://cmt3.research.microsoft.com/IAIB2025"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-300 text-white text-lg font-semibold py-2 px-6 rounded hover:bg-blue-700 transition duration-200"
                    >
                        Submit Your Paper
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CallForPapers;
