export function convertDateFormat(string: string) {
  let info = string.split("-").reverse().join("/");
  return info;
}

export const getDayWeek = (fechaStr: string): string => {
  // 1. Normalizamos el string para evitar problemas de zona horaria
  // Agregamos 'T00:00:00' para que lo tome como hora local y no UTC
  const fecha = new Date(fechaStr + "T00:00:00");

  // Validamos si la fecha es válida
  if (isNaN(fecha.getTime())) {
    return "Fecha inválida";
  }

  // 2. Usamos Intl para obtener el nombre en español
  const nombreDia = new Intl.DateTimeFormat("es-ES", {
    weekday: "long",
  }).format(fecha);

  // 3. Opcional: Capitalizar la primera letra (martes -> Martes)
  return nombreDia.charAt(0).toUpperCase() + nombreDia.slice(1);
};

// --- EJEMPLOS DE USO ---
console.log(getDayWeek("2026-01-06")); // "Martes"
