import { useState } from "react";
import { User, Phone, Mail, Scissors } from "lucide-react";
import type { Service } from "../../types/Service";
import type { AppointmentDraft } from "../../types/AppointmentDraft";

interface StepOneProps {
  services: Service[];
  draft: AppointmentDraft;
  setDraft: (draft: AppointmentDraft) => void;
  onNext: () => void;
}

export default function StepOne({
  services,
  draft,
  setDraft,
  onNext,
}: StepOneProps) {
  const [open, setOpen] = useState(false);

  // Guarda en el state lo que se escriba en el input
  function updateDraft<K extends keyof AppointmentDraft>(
    key: K,
    value: AppointmentDraft[K],
  ) {
    setDraft({ ...draft, [key]: value });
  }

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setDraft({
      ...draft,
      [name]: value,
    });
  };

  // Valida que los datos existan antes de continuar
  const isValid =
    Boolean(draft.name) &&
    Boolean(draft.phone) &&
    Boolean(draft.email) &&
    Boolean(draft.service.name);

  // Clases reutilizables para los inputs
  const inputClasses = `
    text-lg w-full rounded-xl border border-primary bg-zinc-900/50 px-4 py-3 text-white 
    placeholder:text-zinc-500 transition-all duration-200 
    focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500 [&:-webkit-autofill]:shadow-[0_0_0_1000px_#141414_inset] [&:-webkit-autofill]:[-webkit-text-fill-color:white]
  `;

  const labelClasses =
    "flex items-center gap-2 text-primary text-sm font-medium mb-2 md:text-xl";

  return (
    // Contenedor principal
    <section className="max-w-md mx-auto text-text animate-in fade-in slide-in-from-right-4 duration-500 py-2">
      <div className="text-center mb-4">
        <h1 className="text-4xl font-serif mb-1 tracking-wide">
          Agrega tus Datos
        </h1>
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
          <label htmlFor="name" className={labelClasses}>
            <User size={18} /> Nombre completo
          </label>
          <input
            name="name"
            placeholder="Tu nombre"
            value={draft.name}
            // onChange={(e) => updateDraft("name", e.target.value)}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>

        {/* Teléfono y Correo en Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="number" className={labelClasses}>
              <Phone size={18} /> Teléfono
            </label>
            <input
              name="phone"
              id="number"
              type="tel"
              placeholder="10 Dígitos"
              value={draft.phone}
              onChange={handleChange}
              className={inputClasses}
              pattern="[0-9]{10}"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className={labelClasses}>
              <Mail size={18} /> Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="tu@email.com"
              value={draft.email}
              onChange={handleChange}
              className={inputClasses}
              required
            />
          </div>
        </div>

        {/* Tipo servicio */}
        <div>
          <label htmlFor="service" className={labelClasses}>
            <Scissors size={18} /> Servicio
          </label>

          {/* Lista de servicios con scroll */}
          <div className="relative">
            <div className="relative">
              <button
                type="button"
                id="service"
                
                onClick={() => setOpen(!open)}
                className={`${inputClasses} w-full text-left flex justify-between items-center cursor-pointer rounded`}
              >
                <span
                  className={draft.service.name ? "text-text" : "text-muted/70"}
                >
                  {draft.service.name
                    ? draft.service.name
                    : "Selecciona un servicio"}
                </span>
                <span className="text-">▾</span>
              </button>

              {/* Despliegue al hacer click */}
              {open && (
                <div className="absolute z-50 w-full bg-zinc-900 border border-zinc-700 rounded-md overflow-hidden">
                  {/* Contenedor con scroll interno */}
                  <div className="max-h-40 overflow-y-auto custom-scrollbar">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => {
                          updateDraft("service", service);
                          setOpen(false);
                        }}
                        className={`w-full px-4 py-3 flex justify-between items-center rounded-md text-text
                            hover:bg-primary hover:text-black transition cursor-pointer`}
                      >
                        <span className="">{service.name}</span>
                        <span className="font-semibold">${service.price > 0 ? service.price : "50"}</span>
                      </button>
                    ))}
                  </div>
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
                  w-full py-4 bg-yellow-500 text-black rounded-xl font-bold text-xl
                  transition-all duration-300 transform active:scale-[0.98]
                  hover:bg-yellow-400 hover:shadow-[0_0_25px_rgba(234,179,8,0.4)]
                  disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-none hover:cursor-pointer
                "
          >
            Consultar disponibilidad
          </button>
        </div>
      </form>
    </section>
  );
}
