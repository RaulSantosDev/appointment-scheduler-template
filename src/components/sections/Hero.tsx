import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../../assets/LaChozaLogo.png"

export default function Hero() {
  return (
    <>
      <section className="relative min-h-[calc(100vh-100px)] flex-1 flex items-center overflow-hidden ">
        
        {/* FONDO */}
        <div className="absolute inset-0 ">
          <img
            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop"
            alt="Fondo Barbería"
            className="w-full h-full object-cover grayscale "
          />
          {/* <video
            src="https://www.pexels.com/es-es/download/video/4178139/"
            autoPlay
            muted
            loop
            className="absolute inset-0 h-full w-full object-cover grayscale"
          /> */}

          <div className="absolute inset-0 bg-radial from-[#000000a5] from-1% to-[#010100] opacity-100 " />
        </div>

        {/* Contenedor principal */}
        <div className="relative mx-auto px-6 grid grid-cols-1 items-center md:grid-cols-2 ">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{
              once: false,
            }}
            className="order-2 md:order-1"
          >
            {/* TEXTO */}
            <div className="text-center md:text-left mb-4 ">
              <div className="flex items-center justify-center gap-3 md:mt-6 md:justify-start ">
                <p className="uppercase tracking-widest text-sm md:text-md font-medium text-primary underline underline-offset-8">
                  Muna, Yucatán, México.
                </p>
              </div>

              <h1 className="text-6xl md:text-5xl lg:text-7xl font-serif font-bold leading-tight text-white mt-4">
                Tu estilo, <br />
                <span className="text-primary">tu mejor </span>{" "}
                <p className="text-primary">versión.</p>
              </h1>

              <p className="text-base md:text-xl text-text max-w-xl leading-relaxed">
                Experimenta el ritual de la barbería clásica fusionado con el
                estilo urbano contemporáneo.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/schedule"
                  className="
                    px-10 py-4 bg-primary text-black rounded-sm font-bold text-lg
                    transition-all duration-300 transform active:scale-[0.98]
                    hover:bg-primary hover:shadow-[0_0_25px_rgba(234,179,8,0.4)]
                    disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-none hover:cursor-pointer
                  "
                >
                  Agendar cita
                </Link>

                <a
                  className="bg-bg border border-primary/30 text-white px-10 py-4 font-bold uppercase rounded-sm
                  transition hover:cursor-pointer hover:border-primary "
                  href="#servicios"
                >
                  Ver servicios
                </a>
              </div>

              <p className="mt-3 text-md text-muted">
                Agenda tu cita en menos de 60 segundos
              </p>
            </div>
          </motion.div>

          {/* LOGO */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{
              once: false,
            }}
            className="relative flex justify-center order-1 md:order-2 "
          >
            {/* Sombra detras de imagen */}
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-120 h-120 bg-primary/15 rounded-full blur-[120px]" />
            </div>

            <img
              src={logo}
              alt="La Choza Barbershop"
              className="relative w-90 md:w-140 rounded-full object-cover transition-all duration-500 ease-out hover:scale-[1.10] hover:brightness-[1.1] active:scale-[0.98] active:duration-150"
            />

          </motion.div>
          
          <div className="order-3 text-center md:absolute bottom-10 right-1 w-auto h-auto p-1 rounded-md z-20">
            <span className="text-primary font-serif text-2xl italic p-4">
              By Marco Tun
            </span>
          </div>
        </div>
          
      </section>

      <div className="h-px w-full bg-linear-to-r from-transparent via-primary to-transparent border-none" />
    </>
  );
}
