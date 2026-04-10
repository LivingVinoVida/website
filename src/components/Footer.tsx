import { Instagram, Facebook } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-black py-20 border-t border-dark-border/50">
            <div className="container mx-auto px-6 max-w-6xl flex flex-col items-center justify-center">
                <a href="#" className="mb-12 hover:opacity-90 transition-opacity p-4 block mix-blend-lighten" style={{ filter: "brightness(1.1) contrast(1.1)" }}>
                    <Image
                        src="/logo.png"
                        alt="Living Vino Vida"
                        width={600}
                        height={240}
                        className="h-36 md:h-56 w-auto object-contain"
                        priority
                        unoptimized={true}
                    />
                </a>

                <div className="flex gap-6 mb-12">
                    <a href="https://www.instagram.com/living.vinovida?igsh=emd1eTJ3MWlkOXlh" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-dark-border flex items-center justify-center text-cream/60 hover:text-gold-400 hover:border-gold-400 transition-colors">
                        <Instagram size={18} />
                    </a>
                    <a href="https://www.facebook.com/share/188L7Q2d4X/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-dark-border flex items-center justify-center text-cream/60 hover:text-gold-400 hover:border-gold-400 transition-colors">
                        <Facebook size={18} />
                    </a>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-6 text-cream/40 text-sm font-light uppercase tracking-widest">
                    <a href="#" className="hover:text-gold-400 transition-colors">Términos y Condiciones</a>
                    <span className="hidden md:inline">•</span>
                    <a href="#" className="hover:text-gold-400 transition-colors">Aviso de Privacidad</a>
                    <span className="hidden md:inline">•</span>
                    <p>&copy; {new Date().getFullYear()} Living Vino Vida</p>
                </div>
            </div>
        </footer>
    );
}
