export default function Header() {
  return (
    <header className="w-full border-b border-primary/30 ">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo / Marca */}
        <span className="text-4xl tracking-widest font-display text-text">
          <span className="text-primary font-logotipo md:text-5xl mb-6 text-metallic">LA CHOZA</span> BARBERSHOP
        </span>

        {/* Navegación */}
        <nav className="flex items-center gap-8 text-lg">
          <a
            href="#servicios"
            className="text-text hover:text-primary transition"
          >
            Servicios
          </a>
          <a
            href="#precios"
            className="text-text hover:text-primary transition"
          >
            Precios
          </a>
          <a
            href="#agendar"
            className="text--primary font-semibold hover:text-primary-soft transition"
          >
            Agendar
          </a>
        </nav>
      </div>
    </header>
  );
}
