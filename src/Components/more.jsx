// src/Components/MorePage.jsx
import { Link } from 'react-router-dom';

const More = () => {
    return (
        <div className="bg-white text-black p-6">
            <h1 className="text-3xl font-bold mb-4">More Information</h1>
            <ul className="space-y-4">
                <li>
                    <h2 className="text-2xl font-semibold">College Info</h2>
                    <p>
                        Learn more about our institution, its history, and academic programs.
                    </p>
                    <Link to="/college-info" className="text-blue-600 hover:underline">
                        Read More
                    </Link>
                </li>
                <li>
                    <h2 className="text-2xl font-semibold">Committee</h2>
                    <p>
                        Meet the dedicated team organizing the event and their roles.
                    </p>
                    <Link to="/committee" className="text-blue-600 hover:underline">
                        Meet the Team
                    </Link>
                </li>
                <li>
                    <h2 className="text-2xl font-semibold">Brochure</h2>
                    <p>
                        Access the official event brochure for detailed information.
                    </p>
                    <Link to="/brochure" className="text-blue-600 hover:underline">
                        Download Brochure
                    </Link>
                </li>
                <li>
                    <h2 className="text-2xl font-semibold">Venue - </h2>
                    <p>
                        Find out more about the event venue, including location and facilities.
                    </p>
                    <Link to="/venue" className="text-blue-600 hover:underline">
                        View Venue Details
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default More;
