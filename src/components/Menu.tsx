"use client";

import { motion } from "framer-motion";

const menuItems = [
    { name: "Íntima (2 pers)", quesos: "3", embutidos: "2", frutas: "Sí", precio: "$850" },
    { name: "Familiar (4 pers)", quesos: "5", embutidos: "4", frutas: "Sí", precio: "$1,450" },
    { name: "Premium (6 pers)", quesos: "7", embutidos: "6", frutas: "Sí", precio: "$2,200", highlight: true },
    { name: "Executive", quesos: "8", embutidos: "8", frutas: "Gourmet", precio: "$3,100" },
    { name: "Boda", quesos: "Personalizada", embutidos: "Personalizada", frutas: "Sí", precio: "Consulta" },
    { name: "Evento", quesos: "Personalizada", embutidos: "Personalizada", frutas: "Sí", precio: "Consulta" },
];

export default function Menu() {
    return (
        <section id="menu" className="py-24 bg-black relative">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-600/50 to-transparent" />

            <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-serif text-4xl md:text-5xl text-white mb-6"
                    >
                        Nuestra <span className="text-gradient">Colección</span>
                    </motion.h2>
                    <p className="text-cream/70 text-lg font-light">Diseñadas a la medida para deleitar paladares exigentes.</p>
                </div>

                <div className="overflow-x-auto">
                    <motion.table
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="w-full text-left border-collapse"
                    >
                        <thead>
                            <tr className="border-b border-dark-border text-gold-400 font-serif italic uppercase text-sm tracking-wider">
                                <th className="py-6 px-4 font-normal">Tabla</th>
                                <th className="py-6 px-4 font-normal">Quesos</th>
                                <th className="py-6 px-4 font-normal">Embutidos</th>
                                <th className="py-6 px-4 font-normal hidden md:table-cell">Frutas/Nueces</th>
                                <th className="py-6 px-4 font-normal text-right">Precio MXN</th>
                            </tr>
                        </thead>
                        <tbody>
                            {menuItems.map((item, index) => (
                                <tr
                                    key={item.name}
                                    className={`border-b border-dark-border/50 transition-colors hover:bg-dark-surface/50 ${item.highlight ? "bg-dark-surface border-gold-600/30" : ""
                                        }`}
                                >
                                    <td className="py-6 px-4">
                                        <div className="font-serif text-xl text-white flex items-center gap-3">
                                            {item.name}
                                            {item.highlight && (
                                                <span className="text-[10px] uppercase tracking-widest bg-gold-600/20 text-gold-400 px-2 py-1 rounded-sm border border-gold-600/30">
                                                    Best Seller
                                                </span>
                                            )}
                                        </div>
                                    </td>
                                    <td className="py-6 px-4 text-cream/80 font-light">{item.quesos}</td>
                                    <td className="py-6 px-4 text-cream/80 font-light">{item.embutidos}</td>
                                    <td className="py-6 px-4 text-cream/80 font-light hidden md:table-cell">{item.frutas}</td>
                                    <td className="py-6 px-4 text-right text-gold-400 font-semibold">{item.precio}</td>
                                </tr>
                            ))}
                        </tbody>
                    </motion.table>
                </div>

                <div className="mt-16 text-center">
                    <p className="text-cream/50 text-sm font-light italic mb-8">
                        *Todas nuestras tablas incluyen galletas horneadas, confituras y elementos decorativos florales.<br />
                        Los precios pueden variar según temporada. Necesario reservar con 48 hrs de anticipación.
                    </p>
                </div>
            </div>
        </section>
    );
}
