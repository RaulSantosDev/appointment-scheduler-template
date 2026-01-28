import { Scissors } from "lucide-react";
import { motion } from "framer-motion";

type ServicesProps = {
  service: {
    id: string;
    name: string;
    duration: number;
    price: number;
    img: string;
    description: string;
  }
  index: number;
};

export default function Services({
  service,
  index,
}: ServicesProps) {
  return (
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
        duration: 0.5,
        delay: index * 0.1,
      }}
      viewport={{
        once: false,
      }}
    >
      <div className="mx-auto rounded-lg overflow-hidden border border-primary/40 hover:border-primary transition-all duration-300">
        {/* <!-- Card Image --> */}
        <img 
          className="w-full h-70 object-cover" 
          src={service.img} 
          alt={service.name}
        />

        {/* <!-- Card Content --> */}
        <div className="p-4 text-primary">
          <div className="flex justify-center gap-4">
            <span>
              <Scissors size={30}/>
            </span>
            <h2 className="text-xl md:text-2xl font-bold "> {service.name}</h2>
          </div>
          <p className="mt-2 text-text text-lg h-20">{service.description}</p>
          <p className="py-2 text-3xl font-black text-primary ">
            ${service.price > 0 ? service.price : "?"}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
