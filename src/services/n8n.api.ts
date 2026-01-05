export async function getAvailability(
  serviceId: string,
  date: string
): Promise<string[]> {
  const response = await fetch("https://n8n.srv1099745.hstgr.cloud/webhook-test/f6ddfa6f-8256-41ba-b46e-2fe314e3ce6a", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ serviceId, date }),
  })

  if (!response.ok) {
    throw new Error("Error obteniendo disponibilidad")
  }

  const data = await response.json()
  return data.availableSlots
}
