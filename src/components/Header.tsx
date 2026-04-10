"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, Volume2, VolumeX } from "lucide-react";
import Image from "next/image";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        audioRef.current = new Audio("/background-music.mp3");
        audioRef.current.loop = true;

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.src = "";
            }
        };
    }, []);

    const toggleAudio = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(e => console.error("Audio play failed:", e));
            }
            setIsPlaying(!isPlaying);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Inicio", href: "#" },
        { name: "Galería", href: "#galeria" },
        { name: "Menú", href: "#menu" },
        { name: "Nosotros", href: "#nosotros" },
        { name: "Contacto", href: "#contacto" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/90 backdrop-blur-md py-4 border-b border-dark-border" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
                <a href="#" className="flex-shrink-0 hover:opacity-90 transition-opacity p-1 md:p-2 cursor-pointer z-50 mix-blend-lighten" style={{ filter: "brightness(1.1) contrast(1.1)" }}>
                    <Image
                        src="/logo.png?v=2"
                        alt="Living Vino Vida"
                        width={580}
                        height={240}
                        className="h-28 md:h-36 w-auto object-contain"
                        priority
                        unoptimized={true}
                    />
                </a>

                <div className="flex items-center gap-4 md:gap-8">
                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm uppercase tracking-widest hover:text-gold-400 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contacto"
                            className="px-6 py-2 bg-gradient-gold text-black font-semibold uppercase tracking-wider text-sm hover:opacity-90 transition-opacity"
                        >
                            Reservar
                        </a>
                    </nav>

                    {/* Audio Toggle */}
                    <button
                        onClick={toggleAudio}
                        className="p-2 text-gold-400/80 hover:text-gold-400 transition-colors rounded-full border border-gold-400/20 hover:border-gold-400/50 bg-black/30 backdrop-blur-sm flex items-center justify-center transition-all"
                        title={isPlaying ? "Silenciar música" : "Reproducir música"}
                        aria-label="Alternar música de fondo"
                    >
                        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
                    </button>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white hover:text-gold-400 transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Menu principal"
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-dark-border shadow-2xl">
                    <nav className="flex flex-col px-6 py-8 gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-lg uppercase tracking-widest text-white/80 hover:text-gold-400 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contacto"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="mt-4 text-center px-6 py-3 bg-gradient-gold text-black font-semibold uppercase tracking-wider text-sm hover:opacity-90 transition-opacity"
                        >
                            Reservar Mi Tabla
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}
