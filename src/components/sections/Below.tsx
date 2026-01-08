import { Scissors, Shield, Clock } from "lucide-react";

export default function Below() {
  const features = [
    {
      icon: <Scissors className="w-10 h-10 text-[#cca45a]" strokeWidth={1.5} />,
      title: "Corte clásico y moderno",
      description: "Estilo impecable y a la medida."
    },
    {
      icon: <Shield className="w-10 h-10 text-[#cca45a]" strokeWidth={1.5} />,
      title: "Barbero certificado",
      description: "Expertos altamente calificados."
    },
    {
      icon: <Clock className="w-10 h-10 text-[#cca45a]" strokeWidth={1.5} />,
      title: "Sin filas, con cita",
      description: "Atención sin esperas, máxima comodidad."
    }
  ];

  return (
    <section className="bg-black py-12 border-t border-[#cca45a]/30 relative z-20">
       
      
      
      {/* Contenedor Principal */}
      <div className="max-w-7xl mx-auto px-6 z-1">
        
        {/* Grid de 3 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="
                flex items-start gap-5 
                p-6 md:p-8 
                rounded-lg 
                border border-white/10 
                bg-[#0a0a0a] 
                hover:border-[#cca45a]/50 
                transition-colors duration-300
                group
              "
            >
              {/* Icono */}
              <div className="shrink-0 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Textos */}
              <div className="space-y-2">
                <h3 className="text-xl font-serif font-medium text-white leading-tight">
                  {feature.title}
                </h3>
                <p className="text-zinc-400 font-light text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}