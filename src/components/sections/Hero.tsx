import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(90vh-90px)] flex items-center overflow-hidden bg-neutral-950">
      
      {/* 1. FONDO AMBIENTAL (URBANO) */}
      <div className="absolute inset-0 z-0">
        {/* Aquí deberías poner una foto real de tu local o una textura de ladrillo oscuro */}
        <img 
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop" 
          alt="Fondo Barbería" 
          className="w-full h-full object-cover opacity-60 grayscale"
        />
        {/* Degradado para oscurecer y asegurar legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black via-black/90 to-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center py-12 md:py-0">

        {/* 2. TEXTO (ELEGANCIA) */}
        <div className="text-center md:text-left order-2 md:order-1">
          <div className="inline-block border-b border-primary/50 pb-2 mb-6">
            <p className="uppercase tracking-[0.2em] text-sm font-semibold text-primary/90">
              Muna, Yucatán.
            </p>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white font-serif">
            Tu estilo, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-amber-300 to-primary">
              tu mejor versión.
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-400 max-w-xl mx-auto md:mx-0 font-light leading-relaxed">
            Experimenta el ritual de la barbería clásica fusionado con el estilo urbano contemporáneo. Sin esperas, solo excelencia.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              
              
              
            >
              < Link 
                to="/schedule"
                className="
                bg-primary text-black
                px-8 py-4
                rounded-sm
                font-bold tracking-wide
                hover:bg-primary-soft hover:shadow-[0_0_20px_rgba(212,150,48,0.5)]
                transition-all duration-300
                uppercase text-sm
              "
              >
                Agendar Cita
              </ Link >
            </button>

            <button
              className="
                border border-white/20
                text-white
                px-8 py-4
                rounded-sm
                font-medium tracking-wide
                hover:border-primary hover:text-primary
                backdrop-blur-sm
                transition-all duration-300
                uppercase text-sm
              "
            >
              Ver Servicios
            </button>
          </div>
        </div>

        {/* 3. IMAGEN CON EFECTO NEÓN (URBANO) */}
        <div className="relative order-1 md:order-2 flex justify-center">
          {/* Círculo de luz (Glow Effect) detrás de la imagen */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 blur-[100px] rounded-full" />
          
          {/* Contenedor de la imagen */}
          <div //className="relative w-full max-w-md aspect-square md:aspect-4/5 rounded-lg border border-white/10 p-2 bg-white/5 backdrop-blur-sm shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500"
            //className="relative w-full max-w-auto aspect-square rounded-full border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_0_50px_rgba(212,175,55,0.1)] hover:scale-105 transition-all duration-500 "
            className="transition-transform duration-300 hover:scale-110 hover:rotate-1"
          >
             {/* Aquí iría la imagen que generaste o el logo */}
             <img 
               //src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop" 
               src="../../../public/460638877_486605284244244_179908150592s36s02823_n.png"
               alt="Corte Urbano"
               className="w-full h-full object-cover rounded shadow-inner filter contrast-125 sepia-[.2]" 
             />
             
             {/* Detalle decorativo estilo "La Choza" */}
             {/* <div className="absolute bottom-6 -right-6 w-auto h-auto bg-black border border-primary flex items-center justify-center rounded-md shadow-lg z-20">
                <span className="text-primary font-serif text-xl italic p-4">By Marcos Tun</span>
             </div> */}
          </div>
        </div>

      </div>
    </section>
  );
}