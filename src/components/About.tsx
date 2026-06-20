"use client";

import { motion } from "framer-motion";
import { Wine, Plus, Quote } from "lucide-react";

export default function About() {
    const features = [
        {
            title: "Quesos Curados",
            desc: "Selección de importación europea y artesanal mexicana.",
        },
        {
            title: "Charcutería",
            desc: "Cortes premium: Jamon serrano iberico, salami trufado y más.",
        },
        {
            title: "Maridaje Perfecto",
            desc: "Maridaje diseñado para resaltar notas de vino y sabores.",
        },
    ];

    return (
        <section id="nosotros" className="py-24 bg-dark-surface relative">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col items-center text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-serif text-4xl md:text-5xl text-white mb-6"
                    >
                        Experiencia <span className="text-gradient">Gastronómica Elevada</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="w-24 h-[1px] bg-gold-600 mb-8"
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="max-w-2xl text-cream/80 text-lg font-light leading-relaxed"
                    >
                        En Living Vino Vida, transformamos momentos ordinarios en recuerdos extraordinarios a través de la seleccion meticulosa de sabores, texturas y presentaciones visuales impactantes.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20">
                    {features.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="flex flex-col items-center text-center p-8 bg-black/40 border border-dark-border hover:border-gold-600/50 transition-colors"
                        >
                            <div className="w-16 h-16 rounded-full border border-gold-400/30 flex items-center justify-center mb-6 text-gold-400">
                                <Wine size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-serif text-2xl text-white mb-4">{feature.title}</h3>
                            <p className="text-cream/70 font-light">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Photo Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                        "/gallery/acerca1.jpg",
                        "/gallery/acerca2.jpg",
                        "/gallery/acerca3.jpg",
                    ].map((src, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="relative aspect-square overflow-hidden group cursor-pointer"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url('${src}')` }}
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
