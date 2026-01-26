import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full border-b border-primary/30 bg-linear-to-r from-[#010100d8] via-primary/5  to-[#010100d8] py-2 md:py-1">

      <div className="max-h-30 mx-auto px-6 py-3 flex flex-col items-center justify-between md:flex-row ">        
        
        {/* Logo / Marca */}
        <span className="text-4xl tracking-widest font-display text-text text-center">
          <span className="text-primary font-logotipo md:text-5xl md:mb-6 text-metallic border border-primary p-2 rounded-sm uppercase">
            < Link to="/">
              La Choza
            </Link>
          </span> <span className="text-lg md:text-3xl"> BARBERSHOP
          </span>
        </span>

        {/* Navegación */}
        <nav className="flex items-center gap-6 text-lg t">
          <a
            href="#servicios"
            className="text-primary hover:bg-primary hover:text-bg p-2 rounded-sm
            "
          >
            Servicios
          </a>
          <a
            href="#servicios"
            className="text-primary hover:bg-primary hover:text-bg p-2 rounded-sm"
          >
            Precios
          </a>
          <a
            href="#contacto"
            className="text-primary hover:bg-primary hover:text-bg p-2 rounded-sm"
          >
            Contacto
          </a>
          
        </nav>
        
      </div>
      
    </header>
  );
}
