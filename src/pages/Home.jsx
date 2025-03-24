import React, { useState, useEffect } from 'react';
import '@fontsource/unifrakturmaguntia';

// Event Date for Countdown
const eventDate = new Date('2025-04-23T00:00:00').getTime();

// Custom Hook for Countdown
const useCountdown = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const countdown = setInterval(() => {
            const now = new Date().getTime();
            const distance = eventDate - now;

            if (distance < 0) {
                clearInterval(countdown);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            });
        }, 1000);

        return () => clearInterval(countdown);
    }, []);

    return timeLeft;
};

// Home Component
const Home = () => {
    const timeLeft = useCountdown();

    return (
        <div className="p-4 sm:p-8 flex flex-col items-center justify-center text-gray-800 animate-fadeIn w-full">
            {/* College Details */}
            <div className="text-center mb-6">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-white">KONGU ENGINEERING COLLEGE</h2>
                <h3 className="text-lg sm:text-xl font-semibold text-pink-300">(Autonomous)</h3>
                <h3 className="text-2xl sm:text-3xl font-semibold mt-2 text-sky-500/100 drop-shadow-md shadow-black">
                    NATIONAL SERVICE SCHEME
                </h3>
                <p className="text-md sm:text-lg italic mt-1 text-lime-500/100">"Not Me, But You"</p>
            </div>

            {/* Event Title */}
            <div className="text-center mt-4 mb-6">
                <div className="flex justify-center items-center h-full">
                    <img src="/Prasidhi.png" alt="PRASIDHI Poster" className="rounded-lg w-64 sm:w-80 h-auto hover:scale-105 transition duration-300" />
                </div>
                <p className="text-lg sm:text-2xl font-medium text-gray-900">A National-Level Symposium</p>
                <p className="text-md sm:text-lg font-medium mt-2 text-rose-500/100">April 23, 2025</p>
                <p className="text-lg sm:text-xl italic font-bold mt-4 text-gray-900">
                Theme: <span className="text-green-600">{'RRR (Reduce, Reuse, Recycle)'}</span>
                </p>
            </div>

            {/* Event Logos */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-40">
                <img src="/img1.png" alt="PRASIDHI Logo" className="w-32 sm:w-52 h-auto hover:scale-105 transition duration-300" />
                <div className="p-1 rounded-lg bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 animate-borderMove bg-[length:200%_200%]">
                    <img src="/poster1.jpg" alt="PRASIDHI Poster" className="rounded-lg shadow-lg w-64 sm:w-80 h-auto hover:scale-105 transition duration-300" />
                </div>
                <img src="/img1.png" alt="PRASIDHI Logo" className="w-32 sm:w-52 h-auto hover:scale-105 transition duration-300" />
            </div>

            {/* Countdown + GIFs Section */}
            <div className="mt-10 flex flex-col items-center w-full">
                <div className="flex flex-wrap items-center justify-center w-full gap-4 sm:gap-30">
                    {/* Left GIF */}
                    <div className="w-20 sm:w-28 h-20 sm:h-28 flex items-center justify-center">
                        <img src="https://media.baamboozle.com/uploads/images/87532/c023a116-d28f-466b-ad38-2179b715d57b.gif" alt="Recycling Animation" className="w-full h-auto rounded-lg shadow-lg hover:scale-110 transition-transform duration-300" />
                    </div>

                    {/* Countdown Timer */}
<div className="p-1 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-borderMove bg-[length:200%_200%] w-full max-w-md sm:max-w-lg lg:max-w-xl">
    <div className="p-2 bg-gray-100 rounded-lg shadow-md text-center">
        <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold mb-1 lg:mb-2 text-red-700">Time Left Until the Event</h2>
        <div className="flex justify-center gap-1 sm:gap-2 lg:gap-4 text-xs sm:text-sm lg:text-base">
            {Object.entries(timeLeft).map(([unit, value]) => (
                <div
                    key={unit}
                    className={`p-1 sm:p-2 lg:p-3 rounded-md shadow-md w-16 sm:w-20 lg:w-24 text-center ${
                        unit === 'days' ? 'bg-blue-600' : unit === 'hours' ? 'bg-green-600' : unit === 'minutes' ? 'bg-yellow-500' : 'bg-red-500'
                    } text-white`}
                >
                    <p className="text-base sm:text-xl lg:text-2xl font-semibold">{value}</p>
                    <p className="text-xs sm:text-sm lg:text-base">{unit.charAt(0).toUpperCase() + unit.slice(1)}</p>
                </div>
            ))}
        </div>
    </div>
</div>

                    {/* Right GIF */}
                    <div className="w-20 sm:w-28 h-20 sm:h-28 flex items-center justify-center">
                        <img src="https://media2.giphy.com/media/ZI4owdgI8ob1LtkFjt/giphy.gif" alt="Recycle Animation" className="w-full h-auto rounded-lg shadow-lg hover:scale-110 transition-transform duration-300" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
