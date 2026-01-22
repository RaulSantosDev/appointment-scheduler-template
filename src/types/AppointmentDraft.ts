import type { Service } from "./Service";

export interface AppointmentDraft {
  name: string;
  phone: string;
  email: string;
  service: Service;
  date: string;
  time: string;
  price: number;
}
