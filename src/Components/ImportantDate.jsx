const ImportantDates = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
            <div className="bg-white shadow-lg rounded-lg p-12 max-w-2xl w-full">
                <h1 className="text-4xl font-bold text-center text-blue-500 mb-8">Important Dates</h1>

                <div className="space-y-8">
                    <div className="flex justify-between items-center">
                        <span className="text-xl font-medium text-gray-700">Conference Date:</span>
                        <span className="text-xl text-gray-500">27th - 28th June, 2025</span>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="text-xl font-medium text-gray-700">Paper Submission Deadline:</span>
                        <span className="text-xl text-gray-500">20th April, 2025</span>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="text-xl font-medium text-gray-700">Acceptance Notification:</span>
                        <span className="text-xl text-gray-500">10th May, 2025</span>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="text-xl font-medium text-gray-700">Registration & Camera Ready Paper Submission:</span>
                        <span className="text-xl text-gray-500">20th May, 2025</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImportantDates;
