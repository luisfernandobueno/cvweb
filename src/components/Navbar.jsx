
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const enlaces = [
  { nombre: "Inicio", ruta: "/" },
  { nombre: "Sobre mí", ruta: "/sobre-mi" },
  { nombre: "Perfil profesional", ruta: "/perfil-profesional" },
  { nombre: "Proyectos", ruta: "/proyectos" },
  { nombre: "Certificaciones", ruta: "/certificaciones" },
  { nombre: "Contacto", ruta: "/contacto" },
];

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const estiloEnlace = ({ isActive }) =>
    `block py-3 text-sm transition-colors ${
      isActive
        ? "text-green-400"
        : "text-zinc-400 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">

        <NavLink
          to="/"
          onClick={() => setMenuAbierto(false)}
          className="text-xl font-bold tracking-tight"
        >
          FERNANDO<span className="text-green-400">.</span>
        </NavLink>

        {/* Navegación de escritorio */}
        <div className="hidden items-center gap-5 xl:flex">
          {enlaces.map((enlace) => (
            <NavLink
              key={enlace.ruta}
              to={enlace.ruta}
              end={enlace.ruta === "/"}
              className={estiloEnlace}
            >
              {enlace.nombre}
            </NavLink>
          ))}
        </div>

        {/* Botón del menú móvil */}
        <button
          type="button"
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label={
            menuAbierto ? "Cerrar menú" : "Abrir menú"
          }
          aria-expanded={menuAbierto}
          className="rounded-lg border border-white/10 p-2 xl:hidden"
        >
          {menuAbierto ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}
        </button>
      </nav>

      {/* Navegación móvil */}
      {menuAbierto && (
        <div className="border-t border-white/10 bg-zinc-950 px-5 py-4 xl:hidden">
          {enlaces.map((enlace) => (
            <NavLink
              key={enlace.ruta}
              to={enlace.ruta}
              end={enlace.ruta === "/"}
              onClick={() => setMenuAbierto(false)}
              className={estiloEnlace}
            >
              {enlace.nombre}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
