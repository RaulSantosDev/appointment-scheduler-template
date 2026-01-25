type AppointmentPayload = {
  serviceId: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  email: string;
  price: number;
  nameService: string;
}

// Obtiene los horarios disponibles
export async function getAvailability(date: string): Promise<string[]> {
  const response = await fetch(
    "https://n8n.srv1099745.hstgr.cloud/webhook/f6ddfa6f-8256-41ba-b46e-2fe314e3ce6a",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ date }),
    },
  );

  if (!response.ok) {
    throw new Error("Error obteniendo disponibilidad. Error " + response.status);
  }

  const data = await response.json();
  return data.availableSlots;
}

// Datos para la cita.
export async function createAppointment(payload: AppointmentPayload) {
  const response = await fetch(
    "https://n8n.srv1099745.hstgr.cloud/webhook/d68efc9f-9905-46d2-9c6f-c8fdcd3411ea",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    },
  );

  if (!response.ok) {
    throw new Error("Error creando la cita");
  }

  return response.json();
}
