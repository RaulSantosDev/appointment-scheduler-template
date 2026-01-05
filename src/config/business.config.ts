// config/business.config.ts
export const businessConfig = {
  name: "BarberShop La Choza",
  description: "Agenda tu cita con los mejores barberos",
  theme: {
    primary: "#d4a017",
    secondary: "#111111",
  },
  services: [
    { id: "corte", name: "Corte de cabello", duration: 30, price: 150 },
    { id: "barba", name: "Arreglo de barba", duration: 20, price: 100 },
  ],
};
