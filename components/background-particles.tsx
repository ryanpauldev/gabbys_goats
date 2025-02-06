"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const BackgroundParticles = () => {
    const particlesInit = useCallback(async (engine: any) => {
        console.log("Initializing particles engine...");
        await loadSlim(engine); // ✅ Correct initialization
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full -z-50 pointer-events-none">

            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    particles: {
                        number: { value: 100, density: { enable: true, area: 2000 } }, // Spread-out particles
                        color: { value: "#ffffff" },
                        shape: {
                            type: "image",
                            image: [
                                { src: "/images/goat.png", width: 50, height: 50 },
                                { src: "/images/heart.png", width: 50, height: 50 },
                                { src: "/images/peace.png", width: 50, height: 50 },
                                { src: "/images/gabby.png", width: 50, height: 50 },
                            ],
                        },
                        opacity: {
                            value: 1,
                            random: true,
                            animation: { enable: true, speed: 1, minimumValue: 0.3, sync: false },
                        },
                        size: {
                            value: { min: 10, max: 30 },
                        },
                        move: {
                            enable: true,
                            speed: 0.3,
                            direction: "none",
                            random: true,
                            straight: false,
                            outModes: { default: "out" },
                        },
                        // ✅ Restrict particles to the left & right margins
                        random: {
                            position: {
                                x: () => (Math.random() < 0.5 ? Math.random() * 10 : Math.random() * 10 + 90), // Left (0-10%) or Right (90-100%)
                                y: Math.random() * 100, // Full height
                            },
                        },
                    },
                    detectRetina: true,
                }}
            />
        </div>
    );
};

export default BackgroundParticles;
