import { businessConfig } from "../../config/business.config";
import Services from "../ui/Services";

export default function SectionServices() {
  return (
    <div className="w-full border-primary/30 text-center ">
      <h1 className="text-4xl mb-6 font-serif font-bold text-primary">Servicios</h1>

      {/* Contenedor Principal */}
      <div className="max-w-7xl mx-auto px-4 z-1">
        {/* Grid de 3 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {businessConfig.services.map((service, index) => (
            <Services
              service={service}
              index={index}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
