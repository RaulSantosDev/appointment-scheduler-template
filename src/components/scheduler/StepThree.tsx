import { useState } from "react";
import { User, Scissors, Calendar, Clock, Phone, Contact, ContactRound, AtSign, MessageCircle, Smartphone } from "lucide-react"; // Iconos para el diseño premium
import type { AppointmentDraft } from "../../types/AppointmentDraft";
import { createAppointment } from "../../services/n8n.api";
import { convertDateFormat, getDayWeek } from "../../utilities";

interface StepThreeProps {
  draft: AppointmentDraft;
  onBack: () => void;
  onConfirmed: () => void;
}



export default function StepThree({
  draft,
  onBack,
  onConfirmed,
}: StepThreeProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function confirmAppointment() {
    if (!draft.service || !draft.time) {
      setError("Información incompleta para confirmar la cita");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await createAppointment({
        serviceId: draft.service.id,
        date: draft.date,
        time: draft.time,
        name: draft.name,
        phone: draft.phone,
        email: draft.email,
        price: draft.service.price,
        nameService: draft.service.name,
      });

      /**
       * createAppointment ya lanza error si !response.ok,
       * así que llegar aquí implica OK 200
       */
      if (response) {
        onConfirmed(); // ← SOLO aquí avanzamos al paso 4
      }
    } catch (err) {
      setError(
        `No se pudo confirmar la cita. El horario pudo haber sido tomado.`
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="max-w-md mx-auto text-white animate-in fade-in slide-in-from-right-4 duration-500">
      {/* <AnimatePresence mode="wait">
        <motion.div // Clave única para que Framer sepa que el componente cambió
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.3, ease: "easeInOut" }}
        > */}
          {/* Encabezado Estilo Premium */}
          <div className="text-center mb-4">
            <h2 className="text-4xl font-serif mb-2 tracking-tight">
              Confirma tus datos
            </h2>
            {/* <p className="text-zinc-500 text-sm">
              Revisa los detalles antes de confirmar
            </p> */}
          </div>

          {/* Indicador de Pasos */}
          <div className="flex gap-1.5 mb-6 justify-center">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`h-1 w-8 rounded-full ${
                  step === 3 ? "bg-primary" : "bg-primary/20"
                }`}
              />
            ))}
          </div>

          {/* Tarjeta de Resumen (Card) */}
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-4xl p-6 space-y-0 divide-y divide-zinc-800/50 shadow-2xl ">
            <SummaryRow
              icon={<User size={20} />}
              label="Cliente"
              value={draft.name}
            
            />
            <SummaryRow
              icon={<Smartphone size={20} />}
              label="Contacto"
              value={
                <div className="flex items-center gap-2">
                  <Phone size={15} className="text-muted"/> <span>{draft.phone}</span>
                </div>
              }
              subValue={
                <div className="flex items-center gap-2 ">
                  <AtSign size={15} className="text-muted"/>
                  <p>{draft.email}</p> 

                </div>
              }
            />
            <SummaryRow
              icon={<Scissors size={20} />}
              label="Servicio"
              value={draft.service?.name ?? ""}
              price={`$${draft.service?.price || "100"}`}
            />
            <SummaryRow
              icon={<Calendar size={20} />}
              label="Fecha"
              value={`${getDayWeek(draft.date)} ${convertDateFormat(
                draft.date
              )}`}
            />
            <SummaryRow
              icon={<Clock size={20} />}
              label="Hora"
              value={draft.time ?? ""}
            />
          </div>

          <p className="text-[10px] tracking-[0.2em] text-zinc-500 font-bold uppercase text-center m-2">
                Revisa que tus datos sean correctos
          </p>

          {/* Mensaje de Error */}
          {error && (
            <p className="text-red-400 text-center text-sm mt-4 bg-red-400/10 py-2 rounded-xl border border-red-400/20 white-space: whitespace-pre-line ">
              {error}
              <p className="font-bold">INTENTA CON OTRO HORARIO.</p>
            </p>
          )}

          {/* Botones de Acción */}
          <div className="flex flex-col-2 gap-3 pt-2">
            <button
              onClick={onBack}
              disabled={loading}
              className="
          w-full py-3 bg-zinc-900/50 text-zinc-400 rounded-2xl font-semibold 
          border border-zinc-800 transition-all hover:text-white hover:bg-zinc-800
          disabled:opacity-40
          "
            >
              Editar
            </button>

            <button
              onClick={confirmAppointment}
              disabled={loading}
              className="
            w-full py-4 bg-yellow-500 text-black rounded-xl font-bold text-lg
              transition-all duration-300 transform active:scale-[0.98]
              hover:bg-yellow-400 hover:shadow-[0_0_25px_rgba(234,179,8,0.4)]
              disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-none hover:cursor-pointer
          "
            >
              {loading ? "Confirmando..." : "Confirmar cita"}
            </button>
          </div>
        {/* </motion.div>
      </AnimatePresence> */}
    </section>
  );
}

/** * Componente interno adaptado para incluir iconos, precios y sub-valores
 * manteniendo la estructura visual de la imagen.
 */
function SummaryRow({
  icon,
  label,
  value,
  subValue,
  price,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
  subValue?: React.ReactNode;
  price?: string;
  email?: string
}) {
  return (
    <div className="flex items-center gap-4 py-5 first:pt-0 last:pb-0 ">
      {/* Contenedor del Icono */}
      <div className="bg-zinc-800/80 p-3 rounded-xl text-primary shadow-inner ">
        {icon}
      </div>

      {/* Información del Texto */}
      <div className="flex-1 min-w-0">
        <p className="text-[10px] uppercase tracking-[0.15em] text-zinc-500 font-bold mb-0.5">
          {label}
        </p>
        <div className="flex justify-between items-baseline ">
          <h3 className="text-lg font-bold truncate text-text/90">{value}</h3>
          {price && (
            <span className="text-primary font-serif text-2xl leading-none ml-2">
              {price}
            </span>
          )}
        </div>

        {subValue && (
          <p className="text-sm  font-medium leading-tight text-text">
            <span>{subValue}</span>
          </p>
        )}
      </div>
    </div>
  );
}
