import { useState } from "react"
import { createAppointment } from "../../services/n8n.api"
import type { Service } from "../../types/Service"

interface StepThreeProps {
  service: Service
  date: string
  time: string
}

export default function StepThree({ service, date, time }: StepThreeProps) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  async function handleSubmit() {
    setLoading(true)
    try {
      await createAppointment({
        serviceId: service.id,
        date,
        time,
        name,
        phone,
      })
      setSuccess(true)
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="text-center py-24">
        <h2 className="text-3xl font-bold text-primary">
          ¡Cita confirmada!
        </h2>
        <p className="mt-4">
          Te esperamos el {date} a las {time}
        </p>
      </div>
    )
  }

  return (
    <section className="max-w-xl mx-auto py-12">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Confirma tu cita
      </h2>

      <div className="mb-6 text-center">
        <p className="text-primary font-semibold">{service.name}</p>
        <p>{date} — {time}</p>
      </div>

      <input
        placeholder="Nombre completo"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-3 mb-4 rounded-lg bg-surface"
      />

      <input
        placeholder="Teléfono"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full p-3 mb-6 rounded-lg bg-surface"
      />

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full py-3 rounded-lg bg-primary text-black font-semibold"
      >
        {loading ? "Agendando..." : "Confirmar cita"}
      </button>
    </section>
  )
}
