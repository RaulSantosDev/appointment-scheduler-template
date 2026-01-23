import { motion } from "framer-motion";
import { ButtonLink } from "../../lib/ButtonLink";
import { features } from "../../utilities/features";

export default function FeatureSection() {
  return (
    <>
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
        <h2 className="text-4xl font-serif text-foreground mb-4">
          Contáctanos
        </h2>
        {/* <p className="text-muted-foreground max-w-2xl mx-auto">
          En un solo lugar, ven y compruebalo.
        </p> */}
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
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
            className="group relative border border-primary/30 rounded-2xl p-8 hover:border-primary transition-all duration-300 "
          >
            <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative ">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 transition-all">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-primary text-4xl items-center">
                <div className="mb-2">
                  {feature.description}

                </div>
                {feature.link && (
                  
                    <ButtonLink 
                      link={feature.link} 
                      label={feature.label} 
                      iconButton={feature.iconButton} 
                    />
                )}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
