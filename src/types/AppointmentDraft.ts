import type { Service } from "./Service"

export interface AppointmentDraft {
  name: string
  phone: string
  email: string
  service: Service | null
  date: string
  time: string | null
  price: number
}

