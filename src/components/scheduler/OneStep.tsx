import { useState } from 'react'
import { User, Phone, Mail, Scissors } from 'lucide-react' // Importar iconos
import type { Service } from '../../types/Service'
import type { AppointmentDraft } from '../../types/AppointmentDraft'

interface StepOneProps {
  services: Service[]
  draft: AppointmentDraft
  onChange: (draft: AppointmentDraft) => void
  onNext: () => void
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
    w-full rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-white 
    placeholder:text-zinc-500 transition-all duration-200 
    focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500
  `
  const labelClasses = "flex items-center gap-2 text-primary text-sm font-medium mb-2"


  return (
    <section className="max-w-md mx-auto bg-transparent text-zinc-100 ">
      {/* Header Estilo Premium */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-serif mb-1 tracking-wide">Premium Barbershop</h1>
        <p className="text-zinc-400 font-light">Agenda tu cita</p>
      </div>

      {/* Indicador de Pasos */}
      <div className="flex gap-1.5 mb-10 justify-center">
        {[1, 2, 3, 4].map((step) => (
          <div 
            key={step} 
            className={`h-1 w-8 rounded-full ${step === 1 ? 'bg-primary' : 'bg-primary/20'}`} 
          />
        ))}
      </div>

      <div className="space-y-5">
        {/* Nombre */}
        <div>
          <label htmlFor="Name" className={labelClasses}>
            <User size={18} /> Nombre completo
          </label>
          <input
            id='Name'
            placeholder="Tu nombre"
            value={draft.name}
            onChange={(e) => updateDraft('name', e.target.value)}
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
              id='Number'
              placeholder="+52 123 456 7890"
              value={draft.phone}
              onChange={(e) => updateDraft('phone', e.target.value)}
              className={inputClasses + "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"}
              type='number'
            />
          </div>

          <div>
            <label htmlFor="email" className={labelClasses}>
              <Mail size={18} /> Email
            </label>
            <input
              id='email'
              placeholder="tu@email.com"
              value={draft.email}
              onChange={(e) => updateDraft('email', e.target.value)}
              className={inputClasses}
            />
          </div>
        </div>

        {/* Servicio */}
        <div>
          <label htmlFor="service" className={labelClasses}>
            <Scissors size={18} /> Servicio
          </label>
          <div className="relative">
            {/* <select
              id='service'
              value={draft.service?.id ?? ''}
              onChange={(e) =>
                updateDraft(
                  'service',
                  services.find(s => s.id === e.target.value) ?? null
                )
              }
              className={`${inputClasses} appearance-none cursor-pointer`}
            >
              <option value="" className="bg-zinc-900 text-white">Selecciona un servicio</option>
              {services.map(service => (
                <option key={service.id} value={service.id} className="bg-zinc-900 flex justify-between items-center w-full gap-4 placeholder:text-zinc-400">
                  <span>{service.name}-</span>
                  <span className='text-primary'>${service.price}</span>
                </option>
              ))}
            </select> */}


            <div className="relative">
              <button
                type="button"
                id="service"
                onClick={() => setOpen(!open)}
                className={`${inputClasses} w-full text-left flex justify-between items-center cursor-pointer rounded`}
              >
                <span className={draft.service ? 'text-white' : 'text-zinc-400'}>
                  {draft.service ? draft.service.name : 'Selecciona un servicio'}
                </span>
                <span className="text-zinc-400">▾</span>
              </button>


              {open && (
                <div className="absolute z-20 w-full bg-zinc-900 border border-zinc-700 rounded-lg overflow-hidden">
                  {services.map(service => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => {
                        updateDraft('service', service)
                        setOpen(false)
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






            

            {/* Flecha personalizada para el select */}
            {/* <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-500">
              <svg className="fill-current h-4 w-4" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div> */}
          </div>
        </div>

        {/* Botón Principal con Efecto Glow */}
        <div className="pt-4">
          <button
            disabled={!isValid}
            onClick={onNext}
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
      </div>
    </section>
  )
}