import type { Service } from "../../types/Service"

interface StepOneProps {
  services: Service[]
  onSelect: (service: Service) => void
}

export default function StepOne({ services, onSelect }: StepOneProps) {
  return (
    <section className="max-w-4xl mx-auto py-12 ">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Selecciona un servicio
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => onSelect(service)}
            className="p-6 rounded-xl bg-surface hover:border-primary border border-transparent transition text-left"
          >
            <h3 className="text-xl font-semibold mb-2">
              {service.name}
            </h3>
            <p className="text-muted">
              {service.duration} min
            </p>
            <p className="text-primary font-bold mt-4">
              ${service.price}
            </p>
          </button>
        ))}
      </div>
    </section>
  )
}
