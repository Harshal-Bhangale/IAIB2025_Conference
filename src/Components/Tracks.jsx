import { useState } from 'react';
import { FaGraduationCap, FaCity, FaHeartbeat, FaSeedling, FaChartLine, FaHome, FaTshirt } from 'react-icons/fa';

const TracksPage = () => {
    const [activeCard, setActiveCard] = useState(null);

    const handleCardClick = (index) => {
        // Toggle the card state on click


        setActiveCard(activeCard === index ? null : index);
    };
    const tracks = [
        {
            title: "AI in Education and Skill Development",
            description: [
                "Intelligent tutoring systems and adaptive learning platforms.",
                "AI-powered tools for personalized learning and skill enhancement.",
                "Gamification and VR for education and training.",
            ],
            icon: <FaGraduationCap className="w-12 h-12 text-blue-400" />,
        },
        {
            title: "AI in Governance and Sustainable Development",
            description: [
                "AI solutions for policy-making and resource optimization.",
                "Smart city initiatives and sustainable urban development.",
                "AI for monitoring and achieving SDGs.",
            ],
            icon: <FaCity className="w-12 h-12 text-blue-400" />,
        },
        {
            title: "AI for Healthcare",
            description: [
                "AI in diagnostics, predictive analytics, and remote health monitoring.",
                "Virtual assistants and wearable devices for patient care.",
                "AI in drug discovery and personalized treatment.",
            ],
            icon: <FaHeartbeat className="w-12 h-12 text-blue-400" />,
        },
        {
            title: "AI for Agriculture Development",
            description: [
                "Precision farming and smart irrigation systems.",
                "AI-based pest detection and crop yield optimization.",
                "AI for weather prediction and food supply chain management.",
            ],
            icon: <FaSeedling className="w-12 h-12 text-blue-400" />,
        },
        {
            title: "AI for Data Science and Analytics",
            description: [
                "AI for big data processing, predictive analytics, and insights.",
                "NLP applications for unstructured data analysis.",
                "Ethical considerations in AI-driven analytics.",
            ],
            icon: <FaChartLine className="w-12 h-12 text-blue-400" />,
        },
        {
            title: "AI for Rural Development",
            description: [
                "AI for rural healthcare, education, and digital literacy.",
                "Solutions for rural infrastructure and financial inclusion.",
                "Challenges in deploying AI in remote areas.",
            ],
            icon: <FaHome className="w-12 h-12 text-blue-400" />,
        },
        {
            title: "AI for Fashion Industry",
            description: [
                "AI in trend forecasting and virtual try-ons.",
                "AI-driven supply chain and sustainable fashion design.",
                "Personalized shopping and consumer data privacy.",
            ],
            icon: <FaTshirt className="w-12 h-12 text-blue-400" />,
        },
    ];

    return (
        <div className="bg-gradient-to-br from-blue-50 min-h-screen flex justify-center items-center px-6 py-12">
            <section className="w-full max-w-7xl">
                <h1 className="text-4xl font-bold text-center text-blue-500 mb-12">
                    Conference Tracks
                </h1>
                <div className="grid grid-cols-1 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tracks.map((track, index) => (
                        <div
                            key={index}
                            className={`group relative p-6 rounded-2xl shadow-lg bg-gradient-to-tl from-white/30 to-blue-100/20 backdrop-blur-md border border-blue-200 hover:shadow-2xl hover:bg-white transition-all duration-300 h-[350px] flex flex-col items-center justify-center ${activeCard === index ? 'bg-white' : ''
                                }`}
                            onClick={() => handleCardClick(index)}
                        >
                            {/* Icon */}
                            <div className="mb-4">
                                {track.icon}
                            </div>
                            {/* Title */}
                            <h2 className={`text-2xl font-semibold text-blue-600 text-center transition-opacity duration-300 ${activeCard === index ? 'opacity-0' : 'group-hover:opacity-0'
                                }`}>
                                {track.title}
                            </h2>
                            {/* Description - Shown on hover (desktop) or click (mobile) */}
                            <div className={`absolute inset-0 flex flex-col justify-center items-center bg-blue-500/90 text-white p-6 rounded-2xl transition-opacity duration-300 overflow-y-auto ${activeCard === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                                }`}>
                                <ul className="text-lg list-disc list-inside space-y-2">
                                    {track.description.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default TracksPage;