export default function Footer() {
  return (
    <footer className="border-t border-primary/30 ">
      <div className="max-w-8xl mx-auto p-2 text-sm/snug flex md:justify-between md:p-4">
        <p className="text-muted">
          © {new Date().getFullYear()} La Choza Barber. Todos los derechos
          reservados.
        </p>

        <div className="flex gap-6">
          <a href="#" className="text-muted hover:text-primary transition">
            Aviso de privacidad
          </a>
          <a href="#" className="text-muted hover:text-primary transition">
            Términos
          </a>
        </div>
      </div>
    </footer>
  );
}
