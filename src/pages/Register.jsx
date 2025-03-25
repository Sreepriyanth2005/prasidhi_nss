import React from 'react';

const Register = () => {
    // Lists of events
    const technicalEvents = [
        'Idea to Action Plan',
        'Project Showcase',
        'Bot in Action',
    ];

    const nonTechnicalEvents = [
        'The Think Tank',
        'Linkup',
        'Entrepreneurship',
    ];

    const renderEventList = (events) => (
        <ul className="list-disc ml-4 md:ml-6 text-gray-100">
            {events.map((event, index) => (
                <li key={index} className="mb-1">{event}</li>
            ))}
        </ul>
    );

    return (
        <div className="p-4 z-10 md:p-8 animate-fadeIn relative bg-grey-300">
            <h2 className="text-5xl font-bold text-blue-500 mb-6 text-center">Register</h2>
            <div className="flex flex-col lg:flex-row gap-6">

                {/* Technical and Non-Technical Registration Section */}
                <div className="flex-1 basis-3/5 bg-transparent p-4 md:p-6 hover:shadow-xl transition-shadow duration-300 rounded-lg shadow-md bg-gray-800">
                    <h2 className="text-xl md:text-3xl font-bold mb-4 text-orange-400">Technical and Non-Technical Registration</h2>
                    <div className="flex flex-col md:flex-row gap-4">

                        {/* Technical Events */}
                        <div className="flex-1 bg-transparent p-4 rounded-lg shadow-md">
                            <h3 className="text-lg md:text-2xl font-semibold mb-2">Technical Events</h3>
                            {renderEventList(technicalEvents)}
                        </div>

                        {/* Non-Technical Events */}
                        <div className="flex-1 bg-transparent p-4 rounded-lg shadow-md">
                            <h3 className="text-lg md:text-2xl font-semibold mb-2">Non-Technical Events</h3>
                            {renderEventList(nonTechnicalEvents)}
                        </div>
                    </div>
                    <br />
                    <p className="text-sm md:text-lg mb-2 text-gray-100">
                        <strong className="text-orange-400">NOTE :</strong> Technical events are in the forenoon and Non-Technical in the afternoon.
                    </p>
                    <p className="text-sm md:text-lg mb-2 text-gray-100">
                        📅 <strong className="text-orange-400">Event Date :</strong> 27th March 2025
                    </p>
                    <p className="text-sm md:text-lg mb-2 text-gray-100">
                        💰 <strong className="text-orange-400">Registration Fee :</strong> ₹250 per participant
                    </p>
                    <p className="text-sm md:text-lg mb-2 text-gray-100">
                        👥 <strong className="text-orange-400">Team Size :</strong> 2 - 4 members per team
                    </p>
                    <p className="text-sm md:text-lg mb-2 text-gray-100">
                        🍽 <strong className="text-orange-400">Food :</strong> Provided for all participants
                    </p>
                    <p className="text-sm md:text-lg mb-2 text-gray-100">
                        🛍️ <strong className="text-orange-400">Kit :</strong> Will be provided for all participants
                    </p>
                    <p className="text-sm md:text-lg mb-2 text-gray-100">
                        🏠 <strong className="text-orange-400">Accommodation :</strong> Available upon request (additional charges apply)
                    </p>
                    <a
                        href="https://nss.kongu.edu/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center mt-4 text-2xl md:text-xl text-blue-500 hover:underline cursor-pointer"
                    >
                        🔗 <strong>Register Now:</strong> Click Here!!
                    </a>
                </div>

                {/* Workshops Registration Section */}
                <div className="flex-1 basis-2/5 bg-transparent p-4 md:p-6 hover:shadow-xl transition-shadow duration-300 rounded-lg shadow-md bg-gray-800">
                    <h2 className="text-xl md:text-3xl font-bold mb-4 text-orange-400">Workshops Registration</h2>
                    <h3 className="text-lg md:text-2xl font-semibold mb-2">What is AI & Its Role in Sustainability?</h3>
                    <br></br>
                    <p className="text-sm md:text-lg mb-2 text-gray-100">
                        Prefer to go solo? Register individually and showcase your skills. Take on challenges, attend workshops, and make connections with like-minded innovators.
                    </p>
                    <p className="text-sm md:text-lg mb-2 text-gray-100">
                        <strong className="text-orange-400">NOTE :</strong> Full Day Workshop
                    </p>
                    <p className="text-sm md:text-lg mb-2 text-gray-100">
                        📅 <strong className="text-orange-400">Event Date :</strong> 27th March 2025
                    </p>
                    <p className="text-sm md:text-lg mb-2 text-gray-100">
                        💰 <strong className="text-orange-400">Registration Fee :</strong> ₹250 per participant
                    </p>
                    <p className="text-sm md:text-lg mb-2 text-gray-100">
                        👥 <strong className="text-orange-400">Individual :</strong> no teams
                    </p>
                    <p className="text-sm md:text-lg mb-2 text-gray-100">
                        🍽 <strong className="text-orange-400">Food :</strong> Provided for all participants
                    </p>
                    <p className="text-sm md:text-lg mb-2 text-gray-100">
                        🛍️ <strong className="text-orange-400">Kit :</strong> Will be provided for all participants
                    </p>
                    <p className="text-sm md:text-lg mb-2 text-gray-100">
                        🏠 <strong className="text-orange-400">Accommodation :</strong> Available upon request (additional charges apply)
                    </p>
                    <a
                        href="https://nss.kongu.edu/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center mt-4 text-2xl md:text-xl text-blue-500 hover:underline cursor-pointer"
                    >
                        🔗 <strong>Register Now:</strong> Click Here!!
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Register;
