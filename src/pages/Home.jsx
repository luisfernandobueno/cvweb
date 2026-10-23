
import { Link } from "react-router-dom";
import { ArrowRight, Code2 } from "lucide-react";
import PrimaryButton from "../components/PrimaryButton";

export default function Home() {
  return (
    <main>
      <section className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">

        {/* Presentación */}
        <div>
          <p className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
            <span className="h-px w-8 bg-green-400" />
            Portafolio personal
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Fernando
            <br />
            <span className="text-green-400">Bueno.</span>
          </h1>

          <h2 className="mt-6 text-xl font-medium text-zinc-300 sm:text-2xl">
            Mente curiosa. Creatividad. Aprendizaje constante.
          </h2>

          <p className="mt-6 max-w-xl leading-8 text-zinc-400">
            Soy una persona versátil, interesada en la tecnología,
            el diseño, la comunicación y el desarrollo personal
            y profesional. Te invito a conocer mis proyectos,
            mi experiencia y las cosas que me inspiran.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton to="/proyectos">
              Explorar mis proyectos
            </PrimaryButton>

            <Link
              to="/perfil-profesional"
              className="inline-flex w-full items-center justify-center gap-3 rounded-lg border border-white/15 px-6 py-4 font-semibold transition hover:border-green-400 sm:w-auto"
            >
              Mi perfil profesional
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mt-8">
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
            >
              Conocé mis datos de contacto
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Fotografía */}
        <div className="mx-auto w-full max-w-md">
          <div className="relative">

            <div className="absolute -inset-3 rounded-2xl border border-green-400/30" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-900">
              <img
                src={`${import.meta.env.BASE_URL}images/IMG_20250430_155138.jpg`}
                alt="Fernando Bueno"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-5 -left-3 rounded-xl border border-white/10 bg-zinc-950 p-4 shadow-xl sm:-left-6">
              <div className="flex items-center gap-3">
                <Code2 className="text-green-400" size={28} />

                <div>
                  <p className="font-bold">Siempre aprendiendo</p>
                  <p className="text-sm text-zinc-400">
                    Creando nuevas posibilidades
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* Accesos rápidos */}
      <section className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-12 sm:grid-cols-2 md:px-8 lg:grid-cols-3">

          {[
            {
              title: "Sobre mí",
              text: "Conocé a la persona detrás de los proyectos.",
              path: "/sobre-mi",
            },
            {
              title: "Perfil profesional",
              text: "Descubrí mi experiencia y mis fortalezas.",
              path: "/perfil-profesional",
            },
            {
              title: "Certificaciones",
              text: "Explorá mi formación y mis acreditaciones.",
              path: "/certificaciones",
            },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="group rounded-xl border border-white/10 p-6 transition hover:border-green-400/50"
            >
              <h3 className="text-lg font-bold group-hover:text-green-400">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                {item.text}
              </p>

              <ArrowRight
                className="mt-5 text-green-400 transition group-hover:translate-x-1"
                size={20}
              />
            </Link>
          ))}

        </div>
      </section>
    </main>
  );
}
