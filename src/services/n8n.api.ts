type AppointmentPayload = {
  serviceId: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  email: string;
  price: number;
  nameService: string;
};

const urlGetAvailability = import.meta.env.VITE_API_URL;
const urlCreateAppointment = import.meta.env.VITE_API_URL2;


// Obtiene los horarios disponibles
export async function getAvailability(date: string): Promise<string[]> {

  if (!urlGetAvailability) {
    throw new Error("Falta la variable de entorno VITE_API_URL");
  }

  const response = await fetch(urlGetAvailability, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ date }),
  });

  if (!response.ok) {
    throw new Error(
      "Error obteniendo disponibilidad. Error " + response.status,
    );
  }

  const data = await response.json();
  return data.availableSlots;
}

// Datos para la cita.
export async function createAppointment(payload: AppointmentPayload) {

  if (!urlCreateAppointment) {
    throw new Error("Falta la variable de entorno VITE_API_URL");
  }

  const response = await fetch(urlCreateAppointment, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Error creando la cita");
  }

  return response.json();
}
