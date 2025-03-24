import React, { useState, useEffect } from 'react';

const EventSection = ({ title, events, rotate, onEventClick }) => {
    return (
        <div className="flex-1 bg-transparent p-4 md:p-12 hover:shadow-2xl transition-shadow duration-300 rounded-lg shadow-lg bg-gray-100 w-full max-w-7xl mx-auto h-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-blue-600">{title}</h2>
            <ul className="flex flex-wrap justify-center gap-6 md:gap-12">
                {events.map((event, index) => (
                    <li
                        key={index}
                        className={`relative w-64 md:w-80 p-3 md:p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 cursor-pointer ${
                            rotate ? 'rotate-tech' : 'rotate-nontech'
                        }`}
                        onClick={() => onEventClick(event)}
                    >
                        <div className="overflow-hidden rounded-md relative group">
                            <img
                                src={event.image}
                                alt={event.title}
                                className="w-full h-40 md:h-48 object-cover rounded-md transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gray-800 bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-2 rounded-md">
                                <p className="text-white text-xs md:text-sm text-center">{event.brief}</p>
                            </div>
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold text-center text-gray-900 mt-2 md:mt-3">{event.title}</h3>
                        <button
                            className="mt-2 px-3 py-1 text-sm md:text-base bg-blue-500 text-white rounded-md hover:bg-blue-600 transition w-full"
                            onClick={(e) => {
                                e.stopPropagation();
                                onEventClick(event);
                            }}
                        >
                            Distribution
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const Modal = ({ event, onClose }) => {
    useEffect(() => {
        // Prevent scrolling when the modal is open
        if (event) {
            document.body.style.overflow = 'hidden';
        }

        // Re-enable scrolling when the modal is closed
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [event]);

    if (!event) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 bg-black bg-opacity-75" onClick={onClose}></div>
            <div
                className="relative bg-white p-6 md:p-8 rounded-lg w-full max-w-sm md:max-w-md shadow-xl mx-auto transition-transform transform scale-95 hover:scale-100"
                onClick={handleOverlayClick}
            >
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 transition"
                >
                    ✖
                </button>
                <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h2 className="text-xl md:text-2xl font-bold mb-2 text-center text-blue-600">
                    {event.title}
                </h2>
                <p className="text-gray-700 text-sm md:text-base mb-6 text-center">
                    {event.details}
                </p>
                <button
                    onClick={onClose}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition w-full"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

const Events = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);

    const technicalEvents = [
        {
            title: 'Idea to Action Plan',
            brief: 'Turn ideas into solutions.',
            details: 'Transform your innovative ideas into actionable solutions...',
            image: 'https://images.pexels.com/photos/3184303/pexels-photo-3184303.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
        {
            title: 'Project Showcase',
            brief: 'Showcase innovative projects.',
            details: 'Display your best projects, prototypes, or technical solutions...',
            image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
        {
            title: 'Bot in Action',
            brief: 'Demonstrate robotic skills.',
            details: 'Showcase your robotics and automation skills in this hands-on event...',
            image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c'
        }
    ];

    const nonTechnicalEvents = [
        {
            title: 'The Think Tank',
            brief: 'Engage in strategic discussions.',
            details: 'Engage in thought-provoking discussions and present solutions...',
            image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
        {
            title: 'Linkup',
            brief: 'Connect and collaborate.',
            details: 'A networking event where participants connect, collaborate...',
            image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f'
        },
        {
            title: 'Entrepreneurship',
            brief: 'Pitch innovative business ideas.',
            details: 'Step into the shoes of an entrepreneur and pitch your innovative business ideas...',
            image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2'
        }
    ];

    const workshopDetails = [
        {
            title: 'What is AI & Its Role in Sustainability?',
            brief: 'Explore AI for a better future.',
            details: 'Join this insightful workshop on Artificial Intelligence and its applications...',
            image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d'
        }
    ];

    const handleEventClick = (event) => {
        setSelectedEvent(event);
    };

    const handleCloseModal = () => {
        setSelectedEvent(null);
    };

    return (
        <div className="p-4 md:p-8 animate-fadeIn">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-400 text-center mb-6 md:mb-8">Events</h1>
            <div className="flex flex-col gap-6 md:gap-10 items-center">
                <EventSection title="Technical Events" events={technicalEvents} rotate={true} onEventClick={handleEventClick} />
                <EventSection title="Non-Technical Events" events={nonTechnicalEvents} rotate={true} onEventClick={handleEventClick} />
                <EventSection title="Workshops" events={workshopDetails} rotate={true} onEventClick={handleEventClick} />
            </div>
            {selectedEvent && <Modal event={selectedEvent} onClose={handleCloseModal} />}
        </div>
    );
};

export default Events;
