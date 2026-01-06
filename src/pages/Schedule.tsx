import { useState } from "react"
import type { AppointmentDraft } from "../types/AppointmentDraft"

import StepOne from "../components/scheduler/OneStep"
import StepTwo from "../components/scheduler/StepTwo"
import StepThree from "../components/scheduler/StepThree"



import { businessConfig }  from "../config/business.config"
import Header from "../components/layout/Header"

const services = businessConfig.services

// type Step = 1 | 2 | 3 | 4

export default function Schedule() {
  

    const [step, setStep] = useState(1)

    const [draft, setDraft] = useState<AppointmentDraft>({
      name: "",
      phone: "",
      email: "",
      service: null,
      date: "",
      time: ""
    })


  return (

    <>
      <Header/>
      <main className="min-h-screen bg-background text-foreground">
        <section className="max-w-3xl mx-auto py-6 px-4">

          {/* Header */}
          {/* <header className="mb-10 text-center">
            
            <p className="text-muted ">
              Paso {step} de 4
            </p>

          </header> */}

          {/* Step content */}
          <div className="rounded-xl border border-primary p-6 bg-surface max-w-3/5 mx-auto">
            {step === 1 && (
              <StepOne
                services={services}
                draft={draft}
                onChange={setDraft}
                onNext={() => setStep(2)}
              />
            )}


            {step === 2 && (
              <StepTwo
                draft={draft}
                onChange={setDraft}
                onBack={() => setStep(1)}
                onNext={() => setStep(3)}
              />
            )}


            {step === 3 && (
              <StepThree
                draft={draft}
                onBack={() => setStep(2)}
                onSuccess={() => setStep(4)}
              />
            )}


            {step === 4 && (
              <div>
                <h2 className="text-xl font-semibold mb-4">
                  Paso 4 – Cita confirmada
                </h2>

                <p className="text-muted">
                  Tu cita fue agendada correctamente.
                </p>

                <button
                  className="mt-6 px-4 py-2 border rounded-lg"
                  onClick={() => setStep(1)}
                >
                  Agendar otra cita
                </button>
              </div>
            )}
          </div>

        </section>
      </main>

    </>
  )
}
