
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">

        <p>
          © {new Date().getFullYear()} Fernando Bueno.
        </p>

        <Link
          to="/contacto"
          className="transition hover:text-green-400"
        >
          Ponete en contacto →
        </Link>

      </div>
    </footer>
  );
}
