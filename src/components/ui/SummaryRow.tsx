// Componente interno adaptado para incluir iconos, precios y sub-valores manteniendo la estructura visual de la imagen.
export default function SummaryRow({
  icon,
  label,
  value,
  subValue,
  price,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
  subValue?: React.ReactNode;
  price?: string;
  email?: string;
}) {
  return (
    <div className="flex items-center gap-4 py-5 first:pt-0 last:pb-0 ">
      {/* Contenedor del Icono */}
      <div className="bg-zinc-800/80 p-3 rounded-xl text-primary shadow-inner ">
        {icon}
      </div>

      {/* Información del Texto */}
      <div className="flex-1 min-w-0">
        <p className="text-[10px] uppercase tracking-[0.15em] text-zinc-500 font-bold mb-0.5">
          {label}
        </p>
        <div className="flex justify-between items-baseline ">
          <h3 className="text-lg font-bold truncate text-text/90">{value}</h3>
          {price && (
            <span className="text-primary font-serif text-2xl leading-none ml-2">
              {price}
            </span>
          )}
        </div>

        {subValue && (
          <p className="text-sm  font-medium leading-tight text-text">
            <span>{subValue}</span>
          </p>
        )}
      </div>
    </div>
  );
}
