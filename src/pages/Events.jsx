import React, { useState, useEffect } from 'react';

const EventSection = ({ title, events, rotate, onEventClick }) => {
    return (
        <div className="flex-1 bg-transparent p-4 md:p-12 hover:shadow-2xl transition-shadow duration-300 rounded-lg shadow-lg bg-gray-100 w-full max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-blue-800">{title}</h2>
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
                            Details
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
        <div 
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-gray-900 bg-opacity-70 p-4"
            onClick={handleOverlayClick}
        >
            <div className="relative bg-white rounded-lg w-full max-w-md max-h-[90vh] ">
                <button
                    onClick={onClose}
                    className="absolute -top-2 -right-2 text-white w-10 h-10 flex items-center justify-center rounded-full  hover:text-gray-700 text-2xl z-10 bg-red-500"
                >
                    &times;
                </button>
                <div className="p-6">
                    <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <h2 className="text-2xl font-bold mb-3 text-blue-600">
                        {event.title}
                    </h2>
                    <p className="text-gray-700 mb-6">
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
        </div>
    );
};

const Events = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);

    const technicalEvents = [
        {
            title: 'Idea to Action Plan',
            brief: 'Turn ideas into solutions.',
            details: 'Transform your innovative ideas into actionable solutions through this technical challenge. Participants will identify real-world problems, conceptualize technical solutions, and present their implementation plans to a panel of judges. The event emphasizes practical problem-solving and innovative thinking in technology.',
            image: 'https://images.pexels.com/photos/3184303/pexels-photo-3184303.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
        {
            title: 'Project Showcase',
            brief: 'Showcase innovative projects.',
            details: 'Display your best projects, prototypes, or technical solutions to peers and judges. This event provides a platform for students to demonstrate their technical skills and creativity. Projects can range from software applications to hardware prototypes, with judging based on innovation, technical complexity, and real-world applicability.',
            image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
        {
            title: 'Bot in Action',
            brief: 'Demonstrate robotic skills.',
            details: 'Showcase your robotics and automation skills in this hands-on event. Participants will program robots to complete specific tasks or challenges, demonstrating their understanding of robotics principles, programming skills, and problem-solving abilities. Teams will compete to create the most efficient and innovative robotic solutions.',
            image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c'
        }
    ];

    const nonTechnicalEvents = [
        {
            title: 'The Think Tank',
            brief: 'Engage in strategic discussions.',
            details: 'Engage in thought-provoking discussions and present solutions to complex, real-world problems. This event challenges participants to think critically about societal issues, analyze different perspectives, and develop well-reasoned solutions. Judges will evaluate the depth of analysis, creativity of solutions, and presentation skills.',
            image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
        {
            title: 'Linkup',
            brief: 'Connect and collaborate.',
            details: 'A networking event where participants connect, collaborate, and build relationships with peers, professionals, and potential mentors. Through structured activities and informal networking, participants will develop their professional network and learn valuable interpersonal skills for career development.',
            image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f'
        },
        {
            title: 'Entrepreneurship',
            brief: 'Pitch innovative business ideas.',
            details: 'Step into the shoes of an entrepreneur and pitch your innovative business ideas to a panel of judges. Participants will develop business concepts, create pitch presentations, and answer questions about their business models. The event emphasizes creativity, market understanding, and presentation skills.',
            image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2'
        }
    ];

    const workshopDetails = [
        {
            title: 'What is AI & Its Role in Sustainability?',
            brief: 'Explore AI for a better future.',
            details: 'Join this insightful workshop on Artificial Intelligence and its applications in sustainability. Learn about AI fundamentals, machine learning techniques, and how these technologies are being used to address environmental challenges. The workshop includes hands-on activities and case studies of AI applications in sustainability projects.',
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
        <div className="min-h-screen p-4 md:p-8 bg-transparent">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600 text-center mb-8">Events</h1>
            <div className="flex flex-col gap-10 items-center">
                <EventSection 
                    title="Technical Events" 
                    events={technicalEvents} 
                    rotate={true} 
                    onEventClick={handleEventClick} 
                />
                <EventSection 
                    title="Non-Technical Events" 
                    events={nonTechnicalEvents} 
                    rotate={false} 
                    onEventClick={handleEventClick} 
                />
                <EventSection 
                    title="Workshops" 
                    events={workshopDetails} 
                    rotate={false} 
                    onEventClick={handleEventClick} 
                />
            </div>
            {selectedEvent && <Modal event={selectedEvent} onClose={handleCloseModal} />}
        </div>
    );
};

export default Events;