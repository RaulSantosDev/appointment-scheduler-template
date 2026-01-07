import type { AppointmentDraft } from "../../types/AppointmentDraft"
import { CheckCircle2, Calendar, Clock, MapPin } from "lucide-react"
import { convertDateFormat, getDayWeek } from "../../utilities"
import { Link } from "react-router-dom"

interface StepFourProps {
  draft: AppointmentDraft
  onReset: () => void
}

export default function StepFour({
  draft,
  onReset,
}: StepFourProps) {
  return (
    <section className="flex flex-col items-center justify-center min-h-[600px] bg-[#0f0f0f] text-white p-4 font-sans animate-in fade-in duration-500">
      
      {/* 1. Indicador de progreso (Barra superior) */}
      <div className="flex gap-1.5 mb-10">
        {[1, 2, 3, 4].map((step) => (
          <div 
            key={step} 
            className={`h-1 w-8 rounded-full ${step === 4 ? 'bg-primary' : 'bg-primary/20'}`} 
          />
        ))}
      </div>

      {/* 2. Icono de éxito */}
      <div className="mb-6">
        <div className="bg-[#1a2e1a] p-3 rounded-full">
          <CheckCircle2 className="w-10 h-10 text-[#22c55e]" />
        </div>
      </div>

      {/* 3. Títulos */}
      <h2 className="text-3xl font-serif mb-2 tracking-wide text-white">
        ¡Cita confirmada!
      </h2>
      <p className="text-gray-400 text-sm mb-8">
        Hemos enviado los detalles a tu correo
      </p>

      {/* 4. Tarjeta de Resumen (Card) */}
      <div className="w-full max-w-[340px] bg-[#1a1a1a] border border-[#c5a048]/20 rounded-2xl p-6 mb-8 shadow-2xl">
        <div className="flex flex-col items-center space-y-4">
          
          {/* Fecha */}
          
          <div className="flex items-center gap-2 text-[#c5a048]">            
            <span className="font-bold text-3xl">{getDayWeek(draft.date)}</span>
          </div>
          <div className="flex items-center gap-2 text-[#c5a048]">
            <Calendar size={18} />
            <span className="text-base font-medium">{convertDateFormat(draft.date)}</span>
          </div>

          {/* Hora */}
          <div className="flex items-center gap-2 text-[#c5a048]">
            <Clock size={18} />
            <span className="text-4xl font-serif italic">{draft.time}</span>
          </div>

          {/* Línea divisoria */}
          <div className="w-full h-[1px] bg-white/10 my-2" />

          {/* Servicio */}
          <div className="text-center">
            <h3 className="text-lg font-bold text-white mb-0.5">
              {draft.service?.name ?? "Servicio Seleccionado"}
            </h3>
            {/* <p className="text-gray-500 text-xs">20 minutos aprox.</p> */}
          </div>

          {/* Ubicación (Hardcoded como en la imagen) */}
          <div className="flex items-center gap-2 text-gray-500 pt-1">
            <MapPin size={14} />
            <span className="text-xs">La Choza Barbershop - Muna</span>
          </div>
        </div>
      </div>

      {/* 5. Pie de página y Botón */}
      <p className="text-gray-500 text-xs mb-8 italic">
        Recibirás un recordatorio antes de tu cita
      </p>

      <Link
        to="/"
      >  
        <button
          onClick={onReset}
          className="w-full max-w-70 p-3 border-2 border-[#c5a048] text-[#c5a048] rounded-xl font-bold uppercase tracking-widest text-xs transition-all hover:bg-[#c5a048] hover:text-black active:scale-95 hover:cursor-pointer"
        >
          Volver a página principal
        </button>
      </Link>
    </section>
  )
}