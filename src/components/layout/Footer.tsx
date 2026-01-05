export default function Footer() {
  return (
    <footer className="border-t border-primary/30">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between gap-6 text-md">

        <span className="text-muted">
          © {new Date().getFullYear()} La Choza Barber. Todos los derechos reservados.
        </span>

        <div className="flex gap-6">
          <a
            href="#"
            className="text-muted hover:text-primary transition"
          >
            Aviso de privacidad
          </a>
          <a
            href="#"
            className="text-muted hover:text-primary transition"
          >
            Términos
          </a>
        </div>
      </div>
    </footer>
  );
}
