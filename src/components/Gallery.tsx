"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const photos = [
    "/gallery/Paquete.png",
    "/gallery/individual.png",
    "/gallery/redonda2.png",
    "/gallery/foto5.jpg",
    "/gallery/foto6.jpg",
    "/gallery/Caja.png",
    "/gallery/corazon.jpeg",
    "/gallery/redonda.png",
    "/gallery/foto1.jpg",
    "/gallery/carrete.png",
    "/gallery/foto7.jpg",
];

export default function Gallery() {
    const scrollRef = useRef<HTMLDivElement>(null);

    // Auto scroll effect for continuous subtle movement
    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        let animationId: number;
        let scrollPos = 0;

        const scroll = () => {
            if (el) {
                scrollPos += 0.5;
                if (scrollPos >= el.scrollWidth / 2) {
                    scrollPos = 0;
                }
                el.scrollLeft = scrollPos;
            }
            animationId = requestAnimationFrame(scroll);
        };

        animationId = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationId);
    }, []);

    return (
        <section id="galeria" className="py-24 bg-dark-surface overflow-hidden">
            <div className="container mx-auto px-6 mb-16 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-serif text-4xl md:text-5xl text-white mb-6"
                >
                    El Arte del <span className="text-gradient">Buen Vivir</span>
                </motion.h2>
            </div>

            <div className="relative w-full overflow-hidden">
                {/* We duplicate the photos array to create an infinite scroll effect effortlessly with JS tracking */}
                <div
                    ref={scrollRef}
                    className="flex gap-4 sm:gap-6 overflow-x-hidden w-full px-4 items-center no-scrollbar"
                >
                    {[...photos, ...photos].map((src, i) => (
                        <motion.div
                            key={i}
                            className="relative min-w-[280px] sm:min-w-[350px] aspect-[4/5] overflow-hidden group flex-shrink-0"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                                style={{ backgroundImage: `url('${src}')` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
