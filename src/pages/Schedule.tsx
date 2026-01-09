import { useState } from "react"
import type { AppointmentDraft } from "../types/AppointmentDraft"

import StepOne from "../components/scheduler/OneStep"
import StepTwo from "../components/scheduler/StepTwo"
import StepThree from "../components/scheduler/StepThree"

import { businessConfig }  from "../config/business.config"
import Header from "../components/layout/Header"
import StepFour from "../components/scheduler/StepFour"
import Footer from "../components/layout/Footer"

const services = businessConfig.services

const initialState = {
      name: "",
      phone: "",
      email: "",
      service: null,
      date: "",
      time: "",
      price: 0
    }

export default function Schedule() {
  

    const [step, setStep] = useState(1)

    const [draft, setDraft] = useState<AppointmentDraft>(initialState)


  return (

    <>
      <Header/>
      
      <main className="min-h-screen bg-background w-full p-1 text-foreground bg-radial from-[#161200bd] from-1% to-[#07060033] opacity-100">
        <section className="max-w-3xl mx-auto py-6 ">

          {/* Header */}
          {/* <header className="mb-10 text-center">
            
            <p className="text-muted ">
              Paso {step} de 4
            </p>

          </header> */}

          {/* Step content */}
          <div className="rounded-xl border border-primary p-6 bg-surface md:max-w-3/5 mx-auto">
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
                onConfirmed={() => setStep(4)}
              />
            )}


            {step === 4 && (
              <StepFour
                draft={draft}
                onReset={() => {
                  setDraft(initialState)
                  setStep(1)
            }}
  />
)}

          </div>

        </section>
      </main>

      < Footer />

    </>
  )
}
