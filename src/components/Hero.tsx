"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Image - Charcuterie hero shot */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/hero-bg.png')" }}
            />

            {/* Dark overlay to ensure text readability */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

            <div className="container relative z-10 mx-auto px-6 flex flex-col items-center text-center mt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="max-w-4xl"
                >
                    <span className="text-gold-400 tracking-[0.2em] uppercase text-sm md:text-base font-semibold mb-6 block">
                        Elegancia en cada detalle
                    </span>
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
                        <span className="text-gradient">Living Vino Vida</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-cream/90 font-light mb-12 max-w-2xl mx-auto">
                        Tablas de quesos y charcutería para ocasiones inolvidables en Toluca, Metepec y Zinacantepec, Estado de México.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-6"
                >
                    <a
                        href="#contacto"
                        className="px-8 py-4 bg-gradient-gold text-black font-bold uppercase tracking-widest hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                    >
                        Reservar Mi Tabla
                    </a>
                    <a
                        href="#menu"
                        className="px-8 py-4 border border-gold-400 text-gold-400 font-bold uppercase tracking-widest hover:bg-gold-400 hover:text-black transition-colors duration-300 backdrop-blur-sm"
                    >
                        Ver Menú
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-cream/60 uppercase tracking-widest text-xs font-semibold">Descubre</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-gold-400/80 to-transparent" />
            </motion.div>
        </section>
    );
}
