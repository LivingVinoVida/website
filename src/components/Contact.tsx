"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import React, { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        nombre: "",
        telefono: "",
        email: "",
        fecha: "",
        tipo: "íntima",
        comentarios: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Enviar a WhatsApp o API
        const text = `Hola Living Vino Vida. Deseo reservar una tabla:\nNombre: ${formData.nombre}\nTel: ${formData.telefono}\nTipo: ${formData.tipo}\nFecha: ${formData.fecha}\nComentarios: ${formData.comentarios}`;
        const url = `https://wa.me/527222502404?text=${encodeURIComponent(text)}`;
        window.open(url, "_blank");
    };

    return (
        <section id="contacto" className="py-24 bg-dark-surface relative border-t border-dark-border">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Info Section */}
                    <div className="lg:w-5/12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-serif text-4xl md:text-5xl text-white mb-6"
                        >
                            Reserva tu <span className="text-gradient">Tabla</span>
                        </motion.h2>
                        <p className="text-cream/70 text-lg font-light mb-12">
                            Permítenos ser parte de tu próxima celebración. Completa el formulario o contáctanos directamente.
                        </p>

                        <div className="flex flex-col gap-8">
                            <motion.div
                                className="flex items-start gap-5"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                            >
                                <div className="w-12 h-12 flex-shrink-0 bg-black border border-dark-border rounded-full flex items-center justify-center text-gold-400">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold uppercase tracking-widest text-sm mb-1">WhatsApp</h4>
                                    <a href="https://wa.me/527222502404" className="text-cream/60 hover:text-gold-400 transition-colors font-light">+52 72 2250 2404</a>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-start gap-5"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="w-12 h-12 flex-shrink-0 bg-black border border-dark-border rounded-full flex items-center justify-center text-gold-400">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold uppercase tracking-widest text-sm mb-1">Email</h4>
                                    <a href="mailto:contacto@livingvinovida.com" className="text-cream/60 hover:text-gold-400 transition-colors font-light">contacto@livingvinovida.com</a>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-start gap-5"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                <div className="w-12 h-12 flex-shrink-0 bg-black border border-dark-border rounded-full flex items-center justify-center text-gold-400">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold uppercase tracking-widest text-sm mb-1">Área de Entrega</h4>
                                    <p className="text-cream/60 font-light">Especializados en Toluca y Metepec, Estado de México.</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Form Section */}
                    <motion.div
                        className="lg:w-7/12 bg-black p-8 md:p-12 border border-dark-border relative"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gold-600/10 blur-[80px]" />

                        <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="nombre" className="text-xs uppercase tracking-widest text-cream/50">Nombre Completo</label>
                                    <input required type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} className="bg-transparent border-b border-dark-border focus:border-gold-400 py-3 text-white transition-colors outline-none font-light" placeholder="Ej. Ana García" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="telefono" className="text-xs uppercase tracking-widest text-cream/50">WhatsApp / Teléfono</label>
                                    <input required type="tel" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} className="bg-transparent border-b border-dark-border focus:border-gold-400 py-3 text-white transition-colors outline-none font-light" placeholder="+52 722..." />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-xs uppercase tracking-widest text-cream/50">Correo Electrónico (Opcional)</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="bg-transparent border-b border-dark-border focus:border-gold-400 py-3 text-white transition-colors outline-none font-light" placeholder="hola@ejemplo.com" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="fecha" className="text-xs uppercase tracking-widest text-cream/50">Fecha de Entrega</label>
                                    <input required type="date" id="fecha" name="fecha" value={formData.fecha} onChange={handleChange} className="bg-transparent border-b border-dark-border focus:border-gold-400 py-3 text-white transition-colors outline-none font-light [color-scheme:dark]" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="tipo" className="text-xs uppercase tracking-widest text-cream/50">Tipo de Tabla</label>
                                    <select required id="tipo" name="tipo" value={formData.tipo} onChange={handleChange} className="bg-black border-b border-dark-border focus:border-gold-400 py-3 text-white transition-colors outline-none font-light appearance-none">
                                        <option value="íntima">Íntima (2 pers) - $850</option>
                                        <option value="familiar">Familiar (4 pers) - $1,450</option>
                                        <option value="premium">Premium (6 pers) - $2,200</option>
                                        <option value="executive">Ejecutiva (8 pers) - $3,100</option>
                                        <option value="boda">Boda / Evento - Cotizar</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="comentarios" className="text-xs uppercase tracking-widest text-cream/50">Comentarios Adicionales</label>
                                <textarea id="comentarios" name="comentarios" value={formData.comentarios} onChange={handleChange} rows={3} className="bg-transparent border-b border-dark-border focus:border-gold-400 py-3 text-white transition-colors outline-none font-light resize-none" placeholder="Alergias, preferencias especiales, o detalles del evento..." />
                            </div>

                            <button type="submit" className="mt-6 w-full py-4 bg-gradient-gold text-black font-bold uppercase tracking-widest hover:opacity-90 transition-opacity flex justify-center items-center">
                                Confirmar Reserva
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
