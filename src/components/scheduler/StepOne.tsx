import { useState, } from 'react'
import { User, Phone, Mail, Scissors } from 'lucide-react' 
import type { Service } from '../../types/Service'
import type { AppointmentDraft } from '../../types/AppointmentDraft'
import {AnimatePresence, motion } from 'framer-motion'

interface StepOneProps {
  services: Service[]
  draft: AppointmentDraft
  onChange: (draft: AppointmentDraft) => void
  onNext: () => void
}

// 2. Definir la variante de animación (Elegante y suave)
const variants = {
  initial: { opacity: 0, x: 10 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -10 },
}

export default function StepOne({
  services,
  draft,
  onChange,
  onNext,
}: StepOneProps) {

  const [open, setOpen] = useState(false)

  function updateDraft<K extends keyof AppointmentDraft>(
    key: K,
    value: AppointmentDraft[K]
  ) {
    onChange({ ...draft, [key]: value })
  }

  const isValid =
    Boolean(draft.name) &&
    Boolean(draft.phone) &&
    Boolean(draft.email) &&
    Boolean(draft.service)

  // Clases reutilizables para los inputs
  const inputClasses = `
    w-full rounded-xl border border-primary bg-zinc-900/50 px-4 py-3 text-white 
    placeholder:text-zinc-500 transition-all duration-200 
    focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500 [&:-webkit-autofill]:shadow-[0_0_0_1000px_#141414_inset] [&:-webkit-autofill]:[-webkit-text-fill-color:white]
  `
  const labelClasses = "flex items-center gap-2 text-primary text-sm font-medium mb-2"  

  return (
    <section className="max-w-md mx-auto bg-transparent text-zinc-100  ">
      <AnimatePresence mode="wait">
        <motion.div // Clave única para que Framer sepa que el componente cambió
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {/* Header Estilo Premium */}
          <div className="text-center mb-4">
            <h1 className="text-4xl font-serif mb-1 tracking-wide">
              Premium Barbershop
            </h1>
            <p className="text-zinc-400 font-light">Agenda tu cita</p>
          </div>

          {/* Indicador de Pasos */}
          <div className="flex gap-1.5 mb-6 justify-center">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`h-1 w-8 rounded-full ${
                  step === 1 ? "bg-primary" : "bg-primary/20"
                }`}
              />
            ))}
          </div>

          {/* Formulario */}
          <form className="space-y-5" onSubmit={onNext}>
            {/* Nombre */}
            <div>
              <label htmlFor="Name" className={labelClasses}>
                <User size={18} /> Nombre completo
              </label>
              <input
                id="Name"
                placeholder="Tu nombre"
                value={draft.name}
                onChange={(e) => updateDraft("name", e.target.value)}
                className={inputClasses}
              />
            </div>

            {/* Teléfono y Correo en Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="Number" className={labelClasses}>
                  <Phone size={18} /> Teléfono
                </label>
                <input
                  id="Number"
                  type="tel"
                  placeholder="10 Dígitos"
                  value={draft.phone}
                  onChange={(e) => updateDraft("phone", e.target.value)}
                  className={inputClasses}
                  pattern="[0-9]{10}"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className={labelClasses}>
                  <Mail size={18} /> Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={draft.email}
                  onChange={(e) => updateDraft("email", e.target.value)}
                  className={inputClasses}
                  required
                />
              </div>
            </div>

            {/* Servicio */}
            <div>
              <label htmlFor="service" className={labelClasses}>
                <Scissors size={18} /> Servicio
              </label>

              <div className="relative">
                <div className="relative">
                  <button
                    type="button"
                    id="service"
                    onClick={() => setOpen(!open)}
                    className={`${inputClasses} w-full text-left flex justify-between items-center cursor-pointer rounded`}
                  >
                    <span
                      className={draft.service ? "text-white" : "text-zinc-400"}
                    >
                      {draft.service
                        ? draft.service.name
                        : "Selecciona un servicio"}
                    </span>
                    <span className="text-zinc-400">▾</span>
                  </button>

                  {open && (
                    <div className="absolute z-20 w-full bg-zinc-900 border border-zinc-700 rounded-lg overflow-hidden">
                      {services.map((service) => (
                        <button
                          key={service.id}
                          type="button"
                          onClick={() => {
                            updateDraft("service", service);
                            setOpen(false);
                          }}
                          className={`w-full px-4 py-3 flex justify-between items-center text-white
                            hover:bg-primary hover:text-black transition rounded-lg`}
                        >
                          <span>{service.name}</span>
                          <span className="font-semibold">
                            ${service.price}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Botón Principal con Efecto Glow */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={!isValid}
                className="
                  w-full py-4 bg-yellow-500 text-black rounded-xl font-bold text-lg
                  transition-all duration-300 transform active:scale-[0.98]
                  hover:bg-yellow-400 hover:shadow-[0_0_25px_rgba(234,179,8,0.4)]
                  disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-none hover:cursor-pointer
                "
              >
                Consultar disponibilidad
              </button>
            </div>
          </form>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}