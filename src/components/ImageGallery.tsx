"use client";
import React from 'react';
import Image from 'next/image';

const images = [
    { src: "/images/2012.jpg", alt: "Srishti 2.6", hint: "event logo" },
    { src: "/images/2018.jpg", alt: "Image 2", hint: "audience cheering" },
    { src: "/images/2024.jpeg", alt: "Image 3", hint: "laser show" },
    { src: "/images/2025.png", alt: "Image 4", hint: "dj console" },
    { src: "/images/2026.png", alt: "Image 5", hint: "people dancing" }
];

export function ImageGallery() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
                    Glimpses of Srishti
                </h2>
                <div className="wrapper">
                    <div className="gallery">
                        {images.map((image, index) => (
                            <div className="image" key={index}>
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={800}
                                    height={600}
                                    data-ai-hint={image.hint}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
