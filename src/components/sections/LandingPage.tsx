import { motion } from 'framer-motion';
import { Scissors, Calendar, Clock, Star, ArrowRight, Settings } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { useNavigate } from 'react-router-dom';
export function LandingPage() {
  const navigate = useNavigate();
  const features = [{
    icon: Calendar,
    title: 'Reservas en tiempo real',
    description: 'Consulta disponibilidad instantánea y agenda tu cita en segundos'
  }, {
    icon: Clock,
    title: 'Integración con Google Calendar',
    description: 'Sincronización automática con tu calendario de eventos'
  }, {
    icon: Star,
    title: 'Experiencia premium',
    description: 'Interfaz moderna y profesional para tu negocio'
  }];
  return <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section */}
          
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent  border-none" />

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
        
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

          <div className="grid md:grid-cols-3 gap-8">
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
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="relative bg-gradient-to-br from-card to-secondary/20 border border-border rounded-3xl p-8 sm:p-12 lg:p-16 text-center overflow-hidden">
            {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1)_0%,transparent_70%)]" /> */}
            
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-display text-foreground mb-4">
                ¿Listo para modernizar tu barbería?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Integra nuestro sistema de reservas en tu sitio web en minutos. 
                Sin complicaciones, sin código.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button  onClick={() => navigate('/booking')}>
                  Probar ahora
                </Button>
                <Button variant="outline"  onClick={() => navigate('/admin')}>
                  Ver demostración
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      
      
    </div>;
}