import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Monitor scroll position
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 32) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Toggle mobile menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
        setIsDropdownOpen(false); // Close dropdown when mobile menu is opened
    };

    // Toggle dropdown
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Close dropdown when clicking outside
    // useEffect(() => {
    //     const handleClickOutside = (event) => {
    //         if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
    //             setIsDropdownOpen(false);
    //         }
    //     };

    //     document.addEventListener("mousedown", handleClickOutside);
    //     return () => document.removeEventListener("mousedown", handleClickOutside);
    // }, []);

    return (
        <nav
            className={`top-0 bg-blue-800 text-white shadow-lg fixed left-0 w-full z-50 transition-all duration-300`}

        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <div className="flex-shrink-0">
                            <img
                                src="/assets/confLogo1.png"
                                alt="Conference Logo"
                                className="w-50 h-34 object-contain"
                            />
                        </div>
                        {/* <Link to="/" className="flex-shrink-0 flex items-center space-x-2">
                            <span className="text-2xl font-bold text-white">
                                IAIB 2025
                            </span>
                        </Link> */}
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6 items-center">
                        <Link to="/" className="hover:text-blue-300 transition duration-200">
                            Home
                        </Link>
                        <Link to="/call-for-papers" className="hover:text-blue-300 transition duration-200">
                            Call for Paper
                        </Link>
                        <Link to="/paper-submission" className="hover:text-blue-300 transition duration-200">
                            Paper Submission
                        </Link>
                        <Link to="/important-dates" className="hover:text-blue-300 transition duration-200">
                            Important Dates
                        </Link>
                        <Link to="/registration" className="hover:text-blue-300 transition duration-200">
                            Registration
                        </Link>
                        <Link to="/contact" className="hover:text-blue-300 transition duration-200">
                            Contact
                        </Link>

                        {/* More Dropdown */}
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={toggleDropdown}
                                className="hover:text-blue-300 transition duration-200 focus:outline-none"
                                aria-expanded={isDropdownOpen}
                                aria-haspopup="true"
                            >
                                More
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-20">
                                    <a
                                        href="https://jspmrscoe.edu.in/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block px-4 py-2 hover:bg-blue-500 hover:text-white transition duration-200"
                                    >
                                        College Info
                                    </a>
                                    <Link
                                        to="/more/committe"
                                        className="block px-4 py-2 hover:bg-blue-500 hover:text-white transition duration-200"
                                    >
                                        Committee
                                    </Link>
                                    <Link
                                        to="/Conference_Poster_IAIB.pdf"
                                        target="_blank" // Opens in a new tab
                                        rel="noopener noreferrer"
                                        className="block px-4 py-2 hover:bg-blue-500 hover:text-white transition duration-200"
                                    >
                                        Brochure
                                    </Link>

                                    <Link
                                        to="/more/venue"
                                        className="block px-4 py-2 hover:bg-blue-500 hover:text-white transition duration-200"
                                    >
                                        Venue
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-white focus:outline-none"
                            aria-expanded={isOpen}
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-blue-700 transition-all duration-300">
                    <div className="space-y-2 px-4 py-4">
                        <Link
                            to="/"
                            className="block hover:text-blue-300 transition duration-200"
                            onClick={toggleMenu}
                        >
                            Home
                        </Link>
                        <Link
                            to="/call-for-papers"
                            className="block hover:text-blue-300 transition duration-200"
                            onClick={toggleMenu}
                        >
                            Call for Paper
                        </Link>
                        <Link
                            to="/paper-submission"
                            className="block hover:text-blue-300 transition duration-200"
                            onClick={toggleMenu}
                        >
                            Paper Submission
                        </Link>
                        <Link
                            to="/important-dates"
                            className="block hover:text-blue-300 transition duration-200"
                            onClick={toggleMenu}
                        >
                            Important Dates
                        </Link>
                        <Link
                            to="/registration"
                            className="block hover:text-blue-300 transition duration-200"
                            onClick={toggleMenu}
                        >
                            Registration
                        </Link>
                        <Link
                            to="/contact"
                            className="block hover:text-blue-300 transition duration-200"
                            onClick={toggleMenu}
                        >
                            Contact
                        </Link>

                        {/* More Dropdown */}
                        <div className="space-y-2">
                            <a
                                href="https://jspmrscoe.edu.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block hover:text-blue-300 transition duration-200"
                                onClick={toggleMenu}
                            >
                                College Info
                            </a>
                            <Link
                                to="/more/committe"
                                className="block hover:text-blue-300 transition duration-200"
                                onClick={toggleMenu}
                            >
                                Committee
                            </Link>
                            <Link
                                to="/ConferencePoster.pdf"
                                target="_blank" // Opens in a new tab
                                rel="noopener noreferrer"
                                className="block px-4 py-2 hover:bg-blue-500 hover:text-white transition duration-200"
                            >
                                Brochure
                            </Link>

                            <Link
                                to="/more/venue"
                                className="block hover:text-blue-300 transition duration-200"
                                onClick={toggleMenu}
                            >
                                Venue
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
