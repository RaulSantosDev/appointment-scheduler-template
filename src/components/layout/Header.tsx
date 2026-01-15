import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full border-b border-primary/30 bg-linear-to-r from-[#010100d8] via-primary/5  to-[#010100d8] py-2 md:py-1">

      <div className="max-w-7xl max-h-30 mx-auto px-4 py-4 flex flex-col items-center justify-between md:flex-row ">        
        
        {/* Logo / Marca */}
        <span className="text-4xl tracking-widest font-display text-text text-center">
          <span className="text-primary font-logotipo md:text-5xl md:mb-6 text-metallic border border-primary p-2 rounded-sm">
            < Link to="/">
              LA CHOZA
            </Link>
          </span> <span className="text-lg md:text-4xl"> BARBERSHOP
          </span>
        </span>

        {/* Navegación */}
        <nav className="flex items-center gap-8 text-lg t">
          <a
            href="#servicios"
            className="text-primary hover:text-primary  
            "
          >
            Servicios
          </a>
          <a
            href="#precios"
            className="text-primary hover:text-primary transition"
          >
            Precios
          </a>
          <a
            href="#contacto"
            className="text-primary hover:text-primary transition"
          >
            Contacto
          </a>
          
        </nav>
        
      </div>
      
    </header>
  );
}
