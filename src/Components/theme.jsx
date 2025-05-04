

const ConferenceTheme = () => {
    const areasOfInterest = [
        'Artificial Intelligence',
        'Machine Learning',
        'Internet of Things (IoT)',
        'Pattern Recognition',
        'Image Processing',
        'Computational Biology',
        'Soft Computing',
        'Cryptography & Security',
        'Cloud/Grid/Parallel/Distributed Computing',
        'Software Engineering',
        'Human Computer Interaction',
        'Data Science',
        'Natural Language Processing',
        'Algorithms',
        'Bioinformatics',
        'Embedded Systems',
        'High Performance Computing',
        'Wireless Communication',
        'Mobile Computing',
        'Quantum Computation',
        'Probabilistic Computation',
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex justify-center items-center py-12">
            <div className="bg-white shadow-xl rounded-lg p-8 max-w-4xl w-full">
                <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Conference Theme</h1>

                <p className="text-lg text-gray-700 mb-6">
                    Papers are invited in the following areas of interest, but not limited to:
                </p>

                <ul className="list-disc pl-6 space-y-4 mb-6">
                    {areasOfInterest.map((area, index) => (
                        <li key={index} className="text-lg text-gray-700">{area}</li>
                    ))}
                </ul>

                <div className="flex justify-center">
                    <a
                        href="#submit"
                        className="bg-blue-600 text-white text-lg font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
                    >
                        Submit Your Paper
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ConferenceTheme;
