import { motion } from 'framer-motion';
import { Scissors, Calendar, Clock, Star, ArrowRight, Settings, User } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import Gallery from './Gallery';
export function LandingPage() {
  const navigate = useNavigate();
  const features = [{
    icon: Star,
    title: 'Atencion',
    description: 'Experiencia Premium.'
  }, {
    icon: Clock,
    title: 'Horario de atencion',
    description: '8:00 am a 7:00 pm.'
  }, {
    icon: User,
    title: 'Contacto',
    description: 'Marcos Tun',
    Cel:  "📲 WhatsApp"
  }];
  return <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section */}
          
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent  border-none"  />

      <div className='bg-radial from-[#161200bd] from-1% to-[#07060033] opacity-100'>

      {/* Galery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" border border-primary rounded-xl p-4 sm:p-2 lg:p-6 text-center overflow-hidden">
                {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1)_0%,transparent_70%)]" /> */}
            
            <div className="">
              < Gallery />
            </div>
          </div>
        </div>
      </section>

    
      {/* Features Section */}
        <section className="pb-20 relative">
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }} className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-display text-foreground mb-4">
                Todo lo que necesitas
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Un sistema completo de reservas diseñado para barberías modernas
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8" id='contacto' >
              {features.map((feature, index) => <motion.div key={feature.title} initial={{
                  opacity: 0,
                  y: 30
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  duration: 0.5,
                  delay: index * 0.1
                }} viewport={{
                  once: true
                }} className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative">
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:glow-gold transition-all">
                          <feature.icon className="w-7 h-7 text-primary" />
                        </div>
                        <h3 className="text-xl font-display text-foreground mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-primary text-4xl">
                          {feature.description}
                          <p className='text-2xl'><a href="https://wa.link/3skshn" target=''>{feature.Cel}</a></p>
                        </p>
                      </div>
                </motion.div>)}
              </div>
          </div>
        </section>


      </div>
      
    </div>;
}