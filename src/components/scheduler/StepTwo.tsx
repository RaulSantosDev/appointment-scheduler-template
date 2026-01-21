import { useEffect, useState } from "react";
import { Clock, Calendar as CalendarIcon } from "lucide-react";
import type { AppointmentDraft } from "../../types/AppointmentDraft";
import { getAvailability } from "../../services/n8n.api";
import { convertDateFormat, getDayWeek } from "../../utilities";

interface StepTwoProps {
  draft: AppointmentDraft;
  setDraft: (draft: AppointmentDraft) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function StepTwo({
  draft,
  setDraft,
  onNext,
  onBack,
}: StepTwoProps) {
  const [loading, setLoading] = useState(false);
  const [slots, setSlots] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const [showNoSlotsMessage, setShowNoSlotsMessage] = useState(false);

  function selectTime(time: string) {
    setDraft({ ...draft, time });
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDraft({
      ...draft,
      [name]: value,
    });
  };

  useEffect(() => {
    if (!draft.date) return;

    setLoading(true);
    setError(null);
    setSlots([]);

    getAvailability(draft.date)
      .then((availableSlots) => {
        setSlots(availableSlots);
      })
      .catch(() => {
        setError(
          "No se pudo obtener disponibilidad, intenta de nuevo. Si el problema persiste escribenos por Whatapp",
        );
      })
      .finally(() => {
        setLoading(false);
        setShowNoSlotsMessage(true);
      });
  }, [draft.date]);

  const isValid = Boolean(draft.date && draft.time);

  return (
    <section className="max-w-md mx-auto text-text animate-in fade-in slide-in-from-right-4 duration-500 ">
      
      <div className="text-center mb-4">
        <h1 className="text-4xl font-serif mb-1 tracking-wide">
          Selecciona tu horario
        </h1>
      </div>

      {/* Indicador de Pasos */}
      <div className="flex gap-1.5 mb-6 justify-center">
        {[1, 2, 3, 4].map((step) => (
          <div
            key={step}
            className={`h-1 w-8 rounded-full ${
              step === 2 ? "bg-primary" : "bg-primary/20"
            }`}
          />
        ))}
      </div>

      {/* Selector de Fecha */}
      <div className="mb-5">
        <label className="flex items-center gap-2 text-primary text-sm font-medium mb-3 uppercase tracking-widest">
          <CalendarIcon size={16} /> Selecciona el día de tu cita
        </label>

        <div className="relative group">
          <input
            type="date"
            value={draft.date}
            name="date"
            onChange={handleChange}
            onClick={() => setShowNoSlotsMessage(false)}
            className="
              w-full rounded-2xl border border-primary/20 bg-zinc-900/50 px-5 py-4 text-white 
              appearance-none transition-all duration-300 hover:border-primary
              focus:border-primary focus:outline-none focus:ring-2 focus:ring-yellow-500/20
              group-hover:border-zinc-600
            "
          />

          {/* Este div ayuda a que el icono nativo del calendario sea más discreto o se oculte según el navegador */}
          <style>{`
            input[type="date"]::-webkit-calendar-picker-indicator {
              filter: invert(1) brightness(1);
              cursor: pointer;
            }
          `}</style>
        </div>
      </div>

      {/* Titulo de día y fecha seleccionada */}
      {draft.date && (
        <p className="flex items-center text-xl gap-2 text-primary font-medium mb-3 uppercase tracking-widest justify-center">
          <span className=" font-serif italic">{getDayWeek(draft.date)}</span>
          <span>{convertDateFormat(draft.date)}</span>
        </p>
      )}

      {/* Título de sección de horarios */}
      <div className="mb-4">
        {loading && (
          <p className="text-center py-10 text-primary animate-pulse">
            Consultando disponibilidad…
          </p>
        )}
        {error && (
          <p className="text-center py-10 text-red-400 bg-red-400/10 rounded-xl border border-red-400/20">
            {error}
          </p>
        )}

        {slots.length ? (
          <>
            <p className="text-8 text-text/80 font-bold uppercase text-center mb-4">
              Horarios disponibles
            </p>

            {/* Grid de Horarios */}
            {!loading && slots.length > 0 && (
              <div className="grid grid-cols-4 gap-4">
                {slots.map((time) => {
                  const isSelected = Boolean(draft.time === time);
                  return (
                    <button
                      key={time}
                      onClick={() => selectTime(time)}
                      className={`
                          flex flex-col items-center justify-center py-4 rounded-2xl border transition-all duration-300 hover:cursor-pointer
                          ${
                            isSelected
                              ? "bg-zinc-900 border-yellow-500 ring-2 ring-yellow-500/40 shadow-[0_0_20px_rgba(234,179,8,0.4)] text-primary"
                              : "bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200"
                          }
                        `}
                    >
                      <Clock
                        size={16}
                        className={`mb-1 ${
                          isSelected ? "text-yellow-500" : "text-zinc-500"
                        }`}
                      />
                      <span className="text-[15px] font-bold">{time}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </>
        ) : (
          draft.date &&
          showNoSlotsMessage && (
            <div className="text-15 tracking-[0.2em] text-zinc-500 font-bold uppercase text-center mb-4 animate-in fade-in slide-in-from-right-4 duration-500">
              No tenemos horarios disponibles para este día.
            </div>
          )
        )}
      </div>

      {/* Navegación Inferior */}
      <div className="grid grid-cols-2 gap-4 mt-12">
        <button
          onClick={onBack}
          className="py-4 bg-zinc-900/80 border border-zinc-800 text-zinc-300 rounded-xl font-bold hover:bg-zinc-800 transition-all active:scale-95"
        >
          Volver
        </button>

        <button
          disabled={!isValid || loading}
          onClick={onNext}
          className="
            w-full py-4 bg-yellow-500 text-black rounded-xl font-bold text-lg
            transition-all duration-300 transform active:scale-[0.98]
            hover:bg-yellow-400 hover:shadow-[0_0_25px_rgba(234,179,8,0.4)]
            disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-none hover:cursor-pointer
          "
        >
          Continuar
        </button>
      </div>
    </section>
  );
}
