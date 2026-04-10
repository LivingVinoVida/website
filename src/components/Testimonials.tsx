"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
    {
        quote: "La tabla más hermosa que he visto. Cada detalle estaba cuidado con una presentación inigualable.",
        author: "Alejandra G.",
        role: "Amiversario",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
    },
    {
        quote: "Increíble selección de quesos y carnes frías. Fue el centro de atención en nuestra reunión.",
        author: "Roberto M.",
        role: "Cena",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop"
    },
    {
        quote: "Presentación de lujo, sabor exquisito, y servicio impecable de principio a fin.",
        author: "Elena R.",
        role: "Reunion de amigas",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    },
    {
        quote: "Espectacular. Una verdadera joya gastronómica que elevó nuestra celebración al siguiente nivel.",
        author: "Carlos T.",
        role: "Cumpleaños",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-24 bg-black relative flex items-center justify-center min-h-[60vh]">
            {/* Decorative Gold Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-600/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-600/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
                <motion.div
                    className="mx-auto w-16 h-16 rounded-full bg-dark-surface border border-gold-600/30 flex items-center justify-center mb-10 text-gold-400"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <Quote size={24} className="opacity-80" />
                </motion.div>

                <div className="relative h-[250px] sm:h-[200px]">
                    {testimonials.map((testimonial, i) => (
                        <motion.div
                            key={i}
                            className="absolute inset-0 flex flex-col items-center justify-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{
                                opacity: currentIndex === i ? 1 : 0,
                                y: currentIndex === i ? 0 : 20,
                                pointerEvents: currentIndex === i ? "auto" : "none"
                            }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <p className="font-serif text-2xl md:text-3xl text-white italic mb-10 leading-relaxed px-4">
                                &ldquo;{testimonial.quote}&rdquo;
                            </p>

                            <div className="flex items-center gap-4">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.author}
                                    className="w-12 h-12 rounded-full border border-gold-600/50 object-cover"
                                />
                                <div className="text-left">
                                    <h4 className="text-gold-400 font-semibold tracking-wide uppercase text-sm">{testimonial.author}</h4>
                                    <p className="text-cream/50 text-xs tracking-widest uppercase">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Carousel Indicators */}
                <div className="flex justify-center gap-3 mt-12">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === i ? "w-8 bg-gold-400" : "bg-dark-border hover:bg-gold-600/50"
                                }`}
                            aria-label={`Ir al testimonio ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
