import { useState } from "react"
import Header from "../components/layout/Header"
import StepOne from "../components/scheduler/StepOne"
import { businessConfig } from "../config/business.config"
import type { Service } from "../types/Service"
import StepThree from "../components/scheduler/StepThree"
import StepTwo from "../components/scheduler/StepTwo"



export default function Schedule() {
  const [selectedService, setSelectedService] = useState<Service | null>(null)

  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  return (
    <>

    
        <Header />

        <main>

          {/* StepOne */}
          {!selectedService && (
            <StepOne
              services={businessConfig.services}
              onSelect={setSelectedService}
            />
          )}

          {selectedService && (
            <div className="text-center py-8">
              <h2 className="text-2xl font-bold text-primary">
                Servicio seleccionado:
              </h2>
              <p className="text-text text-xl mt-4">
                {selectedService.name}
              </p>
              <p className="text-text text-xl mt-4">
                {selectedService.price}
              </p>
            </div>
          )}
        </main>

        {/* <Footer /> */}

        {/* StepTwo */}
        {selectedService && !selectedDate && (
          <StepTwo
              serviceId={selectedService.id}
              onSelect={(date, time) => {
                setSelectedDate(date)
                setSelectedTime(time)
              }}
          />
        )}

        {selectedDate && selectedTime && (
          <div className="text-center py-8">
            <h2 className="text-2xl font-bold">
              Horario seleccionado
            </h2>
            <p className="text-primary text-xl mt-4">
              {selectedDate} — {selectedTime}
            </p>
          </div>
        )}

        
        {/* StepThree */}
        {selectedService && selectedDate && selectedTime && (
          <StepThree
            service={selectedService}
            date={selectedDate}
            time={selectedTime}
          />
        )}

      
    </>
  )
}
