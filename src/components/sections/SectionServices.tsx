import { businessConfig } from "../../config/business.config";
import Services from "../ui/Services";

export default function SectionServices() {
  return (
    <section className="container mx-auto  border-primary/30 text-center my-10">
      <h1 className="text-4xl mb-10 font-serif">Servicios</h1>

      {/* Contenedor Principal */}
      <div className="max-w-7xl mx-auto px-6 z-1">
        {/* Grid de 3 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {businessConfig.services.map((service, index) => (
            <Services
              key={index}
              name={service.name}
              price={service.price}
              index={index}
              img={service.img}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
