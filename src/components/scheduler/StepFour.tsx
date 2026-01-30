import type { AppointmentDraft } from "../../types/AppointmentDraft";
import { CheckCircle2, Calendar, Clock, MapPin, AtSign } from "lucide-react";
import { convertDateFormat, getDayWeek } from "../../utilities";
import { Link } from "react-router-dom";
import { ButtonLink } from "../../lib/ButtonLink";

interface StepFourProps {
  draft: AppointmentDraft;
  onReset: () => void;
}

export default function StepFour({ draft, onReset }: StepFourProps) {
  return (
    <>
      <section className="max-w-md mx-auto text-white animate-in fade-in duration-500 flex flex-col items-center ">
        <div className="text-center mb-4">
          <h1 className="text-4xl font-serif  tracking-tight">
            ¡Cita confirmada!
          </h1>
        </div>

        {/* 1. Indicador de progreso (Barra superior) */}
        <div className="flex gap-1.5 mb-4 justify-center">
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={`h-1 w-8 rounded-full ${
                step === 4 ? "bg-primary" : "bg-primary/20"
              }`}
            />
          ))}
        </div>

        {/* 2. Icono de éxito */}
        <div className="">
          <div className="bg-[#1a2e1a] p-3 rounded-full">
            <CheckCircle2 className="w-10 h-10 text-success" />
          </div>
        </div>

        {/* 4. Tarjeta de Resumen (Card) */}
        <div className="w-full bg-[#1a1a1a] border border-primary/20 rounded-2xl p-4 m-4 shadow-4xl">
          <div className="flex flex-col items-center space-y-2">
            <h1 className="text-gray-400 text-center">
              Resumen de tu cita agendada.
            </h1>

            <div className="text-primary">
              <span className="font-bold text-3xl italic">
                {getDayWeek(draft.date)}
              </span>
            </div>
            <div className="flex items-center gap-2 text-text ">
              <Calendar size={18} />
              <span className="text-lg font-bold">
                {convertDateFormat(draft.date)}
              </span>
            </div>

            {/* Hora */}
            <div className="flex items-center gap-2 text-primary">
              <Clock size={18} />
              <span className="font-bold text-3xl italic">{draft.time}</span>
            </div>

            {/* Servicio */}
            <div className="text-center">
              <h3 className="text-lg font-bold">{draft.service.name}</h3>{" "}
              <span className="text-primary font-bold italic text-2xl">
                ${draft.service.price}
              </span>
            </div>

            {/* Línea divisoria */}
            <div className="w-full h-px bg-text/10 my-2" />

            <h1 className="text-gray-400 text-center">
              Hemos enviado los datos al siguiente correo electrónico.
            </h1>

            <div className="flex items-center gap-2 text-text">
              <AtSign size={18} />
              <span className="text-lg font-bold">{draft.email}</span>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <img
                src="https://www.svgrepo.com/show/303150/whatsapp-symbol-logo.svg"
                alt=""
                className="h-5 w-5 "
              />
              <span className="font-bold text-2xl italic">{draft.phone}</span>
            </div>

            {/* Ubicación */}
            <div className="flex items-center gap-2 text-muted">
              <MapPin size={14} />
              <span className="text-sm">La Choza Barbershop - Muna</span>
            </div>
          </div>
        </div>

        {/* Pie de página y Botón */}
        <p className="text-gray-500 text-center mb-4 italic font-bold">
          Para cualquier aclaración envíanos un WhatsApp
        </p>

        <div className="text-center">
          <div className="mb-2 ">
            <ButtonLink
              target="_blank"
              label="Whatsapp"
              iconButton="https://www.svgrepo.com/show/521923/whatsapp.svg"
              link="https://wa.link/"
            />
          </div>

          <Link to="/">
            <button
              onClick={onReset}
              className="w-full p-5 border-2 border-primary text-primary rounded-xl font-bold uppercase tracking-widest text-xs transition-all hover:bg-primary hover:text-black active:scale-95 hover:cursor-pointer"
            >
              Volver a página principal
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
