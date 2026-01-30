import { useState } from "react";
import {
  User,
  Scissors,
  Calendar,
  Clock,
  Phone,
  AtSign,
  Smartphone,
} from "lucide-react";
import type { AppointmentDraft } from "../../types/AppointmentDraft";
import { createAppointment } from "../../services/n8n.api";
import { convertDateFormat, getDayWeek } from "../../utilities";
import SummaryRow from "../ui/SummaryRow";

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

  // Confirma la reserva de la cita enviando los datos del 'draft' al servidor.
  async function confirmAppointment() {
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

      if (response) {
        onConfirmed();
      }
    } catch (err) {
      setError(
        `No se pudo confirmar la cita. El horario pudo haber sido tomado.`,
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="max-w-md mx-auto text-white animate-in fade-in slide-in-from-right-4 duration-500 ">
      <div className="text-center mb-4">
        <h1 className="text-4xl font-serif mb-1 tracking-tight">
          Confirma tus datos
        </h1>
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
      <div className="bg-zinc-900/40 border border-zinc-800 rounded-4xl p-4 space-y-0 divide-y divide-zinc-800/50 shadow-2xl">
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
              <Phone size={15} className="text-muted" />{" "}
              <span>{draft.phone}</span>
            </div>
          }
          subValue={
            <div className="flex items-center gap-2 ">
              <AtSign size={15} className="text-muted" />
              <p>{draft.email}</p>
            </div>
          }
        />
        <SummaryRow
          icon={<Scissors size={20} />}
          label="Servicio"
          value={draft.service?.name ?? ""}
          price={`$${draft.service?.price}`}
        />
        <SummaryRow
          icon={<Calendar size={20} />}
          label="Fecha"
          value={`${getDayWeek(draft.date)} ${convertDateFormat(draft.date)}`}
        />
        <SummaryRow
          icon={<Clock size={20} />}
          label="Hora"
          value={draft.time ?? ""}
        />
      </div>

      <p className="text-[12px] tracking-[0.2em] text-zinc-500 font-bold uppercase text-center m-2">
        Antes de dar click en confirmar cita revisa que tus datos sean correctos
      </p>

      {/* Mensaje de Error */}
      {error && (
        <div className="text-red-400 text-center text-sm mt-4 bg-red-400/10 py-2 rounded-xl border border-red-400/20 white-space: whitespace-pre-line ">
          {error}
          <p className="font-bold">INTENTA CON OTRO HORARIO.</p>
        </div>
      )}

      {/* Botones de Acción */}
      <div className="flex flex-col-2 gap-3 pt-2">
        <button
          onClick={onBack}
          disabled={loading}
          className="
          text-lg w-full py-3 bg-zinc-900/50 text-zinc-400 rounded-xl font-semibold 
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
    </section>
  );
}
