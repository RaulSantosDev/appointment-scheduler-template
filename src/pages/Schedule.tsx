import { useState } from "react";
import type { AppointmentDraft } from "../types/AppointmentDraft";

import StepOne from "../components/scheduler/StepOne";
import StepTwo from "../components/scheduler/StepTwo";
import StepThree from "../components/scheduler/StepThree";

import { businessConfig } from "../config/business.config";
import Header from "../components/layout/Header";
import StepFour from "../components/scheduler/StepFour";
import Footer from "../components/layout/Footer";

const services = businessConfig.services;

const initialService = {
  id: "",
  name: "",
  duration: 0,
  price: 0,
};

const initialState: AppointmentDraft = {
  name: "",
  phone: "",
  email: "",
  service: initialService,
  date: "",
  time: "",
  price: 0,
};

export default function Schedule() {
  const [step, setStep] = useState(1);

  const [draft, setDraft] = useState<AppointmentDraft>(initialState);

  return (
    <>
      <Header />

      <main className="relative min-h-[calc(100vh-100px)] flex items-center p-4">
        {/* FONDO */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop"
            alt="Fondo Barbería"
            className="w-full h-full object-cover grayscale "
          />
          <div className="absolute inset-0 bg-radial from-[#000000a5] from-1% to-[#010100] opacity-100 " />
        </div>

        <div className="relative rounded-xl border border-primary p-4 bg-surface mx-auto md:min-w-xl">
          {step === 1 && (
            <StepOne
              services={services}
              draft={draft}
              setDraft={setDraft}
              onNext={() => setStep(2)}
            />
          )}

          {step === 2 && (
            <StepTwo
              draft={draft}
              setDraft={setDraft}
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
                setDraft(initialState);
              }}
            />
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
