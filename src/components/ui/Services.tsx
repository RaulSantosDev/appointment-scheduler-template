import { Scissors } from "lucide-react";
import { motion } from "framer-motion";

type ServicesProps = {
  name: string;
  price: number;
  index: number;
  img: string;
  description: string;
};

export default function Services({
  name,
  price,
  index,
  img,
  description,
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
      <div className="max-w-sm mx-auto rounded-lg shadow-lg overflow-hidden border border-primary/40 hover:border-primary   ">
        {/* <!-- Card Image --> */}
        <img className="w-full h-48 object-cover" src={img} alt="Sample" />
        {/* <!-- Card Content --> */}
        <div className="p-4 text-primary">
          <div className="flex justify-center gap-4">
            <span>
              <Scissors />
            </span>
            <h2 className="text-xl font-bold"> {name}</h2>
          </div>
          <p className="mt-2 text-text">{description}</p>
          <p className=" px-4 py-2 text-2xl font-black text-primary ">
            ${price}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
