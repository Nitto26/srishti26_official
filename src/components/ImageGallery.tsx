"use client";
import React from 'react';
import Image from 'next/image';

const images = [
    { src: "/images/2026.png", alt: "Srishti 2.6", hint: "event logo" },
    { src: "https://picsum.photos/seed/gallery_strip_2/800/600", alt: "Image 2", hint: "audience cheering" },
    { src: "https://picsum.photos/seed/gallery_strip_3/800/600", alt: "Image 3", hint: "laser show" },
    { src: "https://picsum.photos/seed/gallery_strip_4/800/600", alt: "Image 4", hint: "dj console" },
    { src: "https://picsum.photos/seed/gallery_strip_5/800/600", alt: "Image 5", hint: "people dancing" }
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
