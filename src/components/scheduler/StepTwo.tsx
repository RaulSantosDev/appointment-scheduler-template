import { useEffect, useState } from "react"
import { getAvailability } from "../../services/n8n.api"

interface StepTwoProps {
  serviceId: string
  onSelect: (date: string, time: string) => void
}

export default function StepTwo({ serviceId, onSelect }: StepTwoProps) {
  const [date, setDate] = useState("")
  const [slots, setSlots] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!date) return

    setLoading(true)
    getAvailability(serviceId, date)
      .then(setSlots)
      .finally(() => setLoading(false))
  }, [date, serviceId])

  return (
    <section className="max-w-xl mx-auto py-1">
      <h2 className="text-3xl font-bold mb-6 text-center text-metallic">
        Selecciona fecha y horario
      </h2>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full p-3 rounded-lg bg-surface mb-6"
      />

      {loading && <p className="text-center">Cargando horarios...</p>}

      {!loading && slots.length > 0 && (
        <div className="grid grid-cols-2 gap-4">
          {slots.map((slot) => (
            <button
              key={slot}
              onClick={() => onSelect(date, slot)}
              className="p-3 rounded-lg border border-primary hover:bg-primary hover:text-black transition"
            >
              {slot}
            </button>
          ))}
        </div>
      )}
    </section>
  )
}
