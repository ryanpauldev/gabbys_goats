"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import "@/app/css/background-images.css";

const imagesList = [
    "/images/goat.png",
    "/images/peace.png",
    "/images/heart.png",
    "/images/gabby.png",
];

const getRandomPosition = (pageHeight: number) => ({
    top: `${Math.random() * pageHeight}px`, // Spread across full page height
    left: `${Math.random() * 90}vw`, // Keep within screen width
});

const BackgroundImages = () => {
    const [images, setImages] = useState<
        { src: string; top: string; left: string }[]
    >([]);
    const contentRefs = useRef<NodeListOf<Element> | null>(null);

    useEffect(() => {
        const pageHeight = document.body.scrollHeight; // Get full page height
        contentRefs.current = document.querySelectorAll("h1, h2, h3, p, img, button, a");

        const isOverlapping = (top: string, left: string) => {
            if (!contentRefs.current) return false;

            const tempDiv = document.createElement("div");
            tempDiv.style.position = "absolute";
            tempDiv.style.top = top;
            tempDiv.style.left = left;
            tempDiv.style.width = "100px";
            tempDiv.style.height = "100px";
            tempDiv.style.opacity = "0";
            document.body.appendChild(tempDiv);

            const overlapping = Array.from(contentRefs.current).some((element) => {
                const rect1 = tempDiv.getBoundingClientRect();
                const rect2 = element.getBoundingClientRect();
                return !(
                    rect1.right < rect2.left ||
                    rect1.left > rect2.right ||
                    rect1.bottom < rect2.top ||
                    rect1.top > rect2.bottom
                );
            });

            document.body.removeChild(tempDiv);
            return overlapping;
        };

        const newImages = [];
        for (let i = 0; i < 25; i++) { // Increase number of images
            let position;
            let attempts = 0;

            do {
                position = getRandomPosition(pageHeight);
                attempts++;
            } while (isOverlapping(position.top, position.left) && attempts < 10);

            newImages.push({
                src: imagesList[i % imagesList.length], // Cycle through images
                ...position,
            });
        }

        setImages(newImages);
    }, []);

    return (
        <div className="background-container">
            {images.map(({ src, top, left }, index) => (
                <Image
                    key={index}
                    src={src}
                    alt={`background-${index}`}
                    width={100}
                    height={100}
                    className="bg-img"
                    style={{ position: "absolute", top, left }}
                />
            ))}
        </div>
    );
};

export default BackgroundImages;
