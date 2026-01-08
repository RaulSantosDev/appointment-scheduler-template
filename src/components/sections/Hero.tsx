import { Link } from "react-router-dom";
import { LandingPage } from "./LandingPage";

export default function Hero() {
  return (
    <>
    <section className="relative min-h-[calc(100vh-100px)] flex items-center overflow-hidden bg-neutral-950 ">

      {/* FONDO */}
      <div className="absolute inset-0  ">
        <img
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop"
          alt="Fondo Barbería"
          className="w-full h-full object-cover grayscale "
        />
        <div className="absolute inset-0 bg-radial from-[#0000006c] from-1% to-[#010100] opacity-100 " />
      </div>


      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* TEXTO */}
        <div className="text-center md:text-left md:translate-x-[50px]">
          <div className="flex items-center gap-3 mb-6">
            <p className="uppercase tracking-widest text-xs font-medium text-primary ">
              Muna, Yucatán · Atención personalizada
            </p>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight text-white">
            Tu estilo, <br />
            <span className="text-primary">tu mejor versión.</span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-gray-400 max-w-xl leading-relaxed">
            Experimenta el ritual de la barbería clásica fusionado
            con el estilo urbano contemporáneo.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              to="/schedule"
              className="
              w-auto p-4 bg-yellow-500 text-black rounded-xl font-bold text-lg
              transition-all duration-300 transform active:scale-[0.98]
              hover:bg-yellow-400 hover:shadow-[0_0_25px_rgba(234,179,8,0.4)]
              disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-none hover:cursor-pointer
            "
            >
              Agendar cita
            </Link>

            <button
              className="
                border border-white/30
                text-white
                px-10 py-4
                font-medium uppercase text-sm
                rounded-sm
                hover:border-primary hover:text-primary
                transition
              "
            >
              Ver servicios
            </button>
          </div>

          <p className="mt-3 text-xs text-gray-500">
            Cita en menos de 30 segundos
          </p>
        </div>

        {/* LOGO */}
        <div className="relative flex justify-center">
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-[420px] h-[420px] bg-primary/10 rounded-full blur-[120px]" />
          </div>

          <img
            src="../../../public/460638877_486605284244244_179908150592s36s02823_n.png"
            alt="La Choza Barbershop"
            className="relative w-[420px] max-w-full drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
          />
        </div>

      </div>
    </section>
        < LandingPage />
    
      </>
  );
}
