import { useState } from "react"
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
import StepOne from "../components/scheduler/StepOne"
import { businessConfig } from "../config/business.config"
import type { Service } from "../types/Service"

export default function Schedule() {
  const [selectedService, setSelectedService] = useState<Service | null>(null)

  return (
    <>

      <div className="flex flex-col min-h-screen">
        <Header />

        <main>
          {!selectedService && (
            <StepOne
              services={businessConfig.services}
              onSelect={setSelectedService}
            />
          )}

          {selectedService && (
            <div className="text-center py-24">
              <h2 className="text-2xl font-bold">
                Servicio seleccionado:
              </h2>
              <p className="text-primary text-xl mt-4">
                {selectedService.name}
              </p>
            </div>
          )}
        </main>

        {/* <Footer /> */}
      </div>
    </>
  )
}
