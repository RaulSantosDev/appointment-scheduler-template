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
    <div className="flex items-center gap-4 py-4 first:pt-0 last:pb-0 ">
      <div className="bg-zinc-800/80 p-3 rounded-xl text-primary ">{icon}</div>

      <div className="flex-1 min-w-0">
        <p className="text-sm uppercase tracking-[0.15em] text-zinc-500 font-bold mb-0.5">
          {label}
        </p>
        <div className="flex md:justify-between md:flex-row flex-col">
          <h3 className="text-lg font-bold text-text/90">{value}</h3>
          {price && (
            <span className="text-primary font-serif text-2xl">{price}</span>
          )}
        </div>

        {subValue && (
          <div className="text-sm font-medium leading-tight text-text">
            <span>{subValue}</span>
          </div>
        )}
      </div>
    </div>
  );
}
