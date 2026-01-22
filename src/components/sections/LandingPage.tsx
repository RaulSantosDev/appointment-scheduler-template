import { motion } from "framer-motion";
import { Clock, Star, User } from "lucide-react";
import Gallery from "./Gallery";
import { WhatsAppLink } from "../../lib/WhatsApp";
import Below from "./SectionServices";
import SectionServices from "./SectionServices";
export function LandingPage() {
  const features = [
    {
      icon: User,
      title: "Barbero",
      description: "Marcos Tun",
      Cel: "WhatsApp",
    },
    {
      icon: Star,
      title: "Atencion",
      description: "Experiencia Premium.",
    },
    {
      icon: Clock,
      title: "Horario de atencion",
      description: "8:00 am a 7:00 pm.",
    },
  ];
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <div className="bg-radial from-[#161200bd] from-1% to-[#07060033] opacity-100">
        {/* Galery Section */}
        <section className="py-10 my-10">
          <div className="container mx-auto px-4">
            <div className=" border border-primary rounded-xl p-4 sm:p-2 lg:p-6 text-center overflow-hidden">
              <div className="">
                <Gallery />
              </div>
            </div>
          </div>
        </section>

        <div
          className="h-px w-full bg-linear-to-r from-transparent via-primary to-transparent  border-none"
          id="servicios"
        />

        < SectionServices />

        <div className="h-px w-full bg-linear-to-r from-transparent via-primary to-transparent  border-none" />

        {/* Features Section */}
        <section className=" relative my-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              viewport={{
                once: true,
              }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl sm:text-4xl font-serif text-foreground mb-4">
                Todo lo que necesitas
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Un sistema completo de reservas diseñado para barberías modernas
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8" id="contacto">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  viewport={{
                    once: false,
                  }}
                  className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:glow-gold transition-all">
                      <feature.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-display text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-primary text-4xl items-center">
                      {feature.description}
                      {feature.Cel && (
                        <button
                          className="
                        w-full p-2 mt-2 bg-yellow-400/80 text-black rounded-xl font-bold text-lg
                        transition-all duration-300 transform active:scale-[0.98]
                        hover:bg-primary hover:shadow-[0_0_25px_rgba(234,179,8,0.4)]
                        disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-none hover:cursor-pointer
                      "
                        >
                          <p>
                            <WhatsAppLink />
                          </p>
                        </button>
                      )}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
