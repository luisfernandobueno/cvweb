
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function PrimaryButton({
  to,
  children,
  fullWidth = true,
  external = false,
}) {
  const clases = `
    inline-flex items-center justify-center gap-3
    rounded-lg bg-green-500 px-6 py-4
    text-center font-semibold text-white
    transition-all duration-200
    hover:bg-green-600
    active:scale-[0.98]
    ${fullWidth ? "w-full sm:w-auto" : ""}
  `;

  const contenido = (
    <>
      <span>{children}</span>
      <ArrowRight size={18} />
    </>
  );

  if (external) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={clases}
      >
        {contenido}
      </a>
    );
  }

  return (
    <Link to={to} className={clases}>
      {contenido}
    </Link>
  );
}
