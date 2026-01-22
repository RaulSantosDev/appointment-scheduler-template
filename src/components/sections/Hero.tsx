import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>
      <section className="relative min-h-[calc(100vh-100px)] flex items-center overflow-hidden ">
        
        {/* FONDO */}
        <div className="absolute inset-0  ">
          <img
            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop"
            alt="Fondo Barbería"
            className="w-full h-full object-cover grayscale "
          />
          {/* <video
            src="/public/114177956-hd_1280_720_30fps.mp4"
            autoPlay
            muted
            loop
            className="absolute inset-0 h-full w-full object-cover grayscale"
          /> */}
          
          <div className="absolute inset-0 bg-radial from-[#000000a5] from-1% to-[#010100] opacity-100 " />
        </div>

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
            <div className="text-center md:text-left md:translate-x-14 mb-4 ">
              <div className="flex items-center justify-center gap-3 md:mt-6 md:justify-start ">
                <p className="uppercase tracking-widest text-xs font-medium text-primary underline underline-offset-8">
                  Muna, Yucatán, México.
                </p>
              </div>

              <h1 className="text-6xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-white mt-4">
                Tu estilo, <br />
                <span className="text-primary">tu mejor </span>{" "}
                <p className="text-primary">versión.</p>
              </h1>

              <p className="text-base md:text-lg text-text max-w-xl leading-relaxed">
                Experimenta el ritual de la barbería clásica fusionado con el
                estilo urbano contemporáneo.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/schedule"
                  className="
                w-auto p-4 bg-primary text-black rounded-xl font-bold text-lg
                transition-all duration-300 transform active:scale-[0.98]
                hover:bg-primary hover:shadow-[0_0_25px_rgba(234,179,8,0.4)]
                disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-none hover:cursor-pointer
              "
                >
                  Agendar cita
                </Link>

                <button
                  className="
                  bg-bg
                  border border-primary/30
                  text-white
                  px-10 py-4
                  font-medium uppercase text-sm
                  rounded-sm
                  hover:border-primary hover:text-primary
                  transition
                  hover:cursor-pointer
                "
                >
                  Ver servicios
                </button>
              </div>

              <p className="mt-3 text-xs text-gray-500">
                Agenda tu cita en menos de 60 segundos
              </p>
            </div>
          </motion.div>

          {/* LOGO */}

          <div className="relative flex justify-center order-1 md:order-2">
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-105 h-105 bg-primary/10 rounded-full blur-[120px]" />
            </div>

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.1,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.6,
              }}
              viewport={{
                once: true,
              }}
              className=""
            >
              <img
                src="../../../public/aa569c4c6417b733c1cbaf382d792c2054.png"
                alt="La Choza Barbershop"
                className="relative w-90 md:w-120 md:h-auto rounded-full object-cover cursor-pointer transition-all duration-500 ease-out hover:scale-[1.10] hover:brightness-[1.1] active:scale-[0.98] active:duration-150"
              />
            </motion.div>
          </div>

          {/* <div className="absolute bottom-6 right-5 w-auto h-auto bg-black border border-primary flex items-center justify-center rounded-md shadow-lg z-20">
                <span className="text-primary font-serif text-xl italic p-4">By Marcos Tun</span>
        </div> */}
        </div>
      </section>

      <div className="h-px w-full bg-linear-to-r from-transparent via-primary to-transparent  border-none" />
      
    </>
  );
}
