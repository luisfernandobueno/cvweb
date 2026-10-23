
import {
  BriefcaseBusiness,
  Languages,
  Laptop,
  Users,
} from "lucide-react";

import SectionTitle from "../components/SectionTitle";
import PrimaryButton from "../components/PrimaryButton";

const fortalezas = [
  {
    icon: Users,
    title: "Comunicación",
    description:
      "Experiencia en atención al cliente y capacidad para comunicarme en español e inglés.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Administración",
    description:
      "Formación administrativa, manejo de herramientas ofimáticas y conocimientos de procesos administrativos.",
  },
  {
    icon: Laptop,
    title: "Competencias digitales",
    description:
      "Experiencia práctica en desarrollo web, herramientas digitales y proyectos tecnológicos propios.",
  },
  {
    icon: Languages,
    title: "Idiomas",
    description:
      "Español, inglés, portugués e italiano, con niveles de dominio detallados en mi perfil de idiomas.",
  },
];

export default function Professional() {
  return (
    <main className="mx-auto min-h-[70vh] max-w-7xl px-5 py-16 md:px-8 md:py-24">

      <SectionTitle
        eyebrow="Perfil profesional"
        title="Lo que puedo aportar."
        description="Una combinación de experiencia práctica, competencias digitales, comunicación y ganas de seguir aprendiendo."
      />

      <div className="grid gap-5 sm:grid-cols-2">

        {fortalezas.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <Icon className="mb-5 text-green-400" size={30} />

              <h3 className="text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                {item.description}
              </p>
            </article>
          );
        })}

      </div>

      <section className="mt-16 border-t border-white/10 pt-10">

        <h2 className="text-2xl font-bold">
          Experiencia profesional
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
          Mi trayectoria incluye atención al cliente, tareas
          administrativas, responsabilidades prácticas y proyectos
          digitales independientes. Presento mi experiencia de
          acuerdo con los requisitos de cada oportunidad profesional.
        </p>

        <div className="mt-8 max-w-md">
          <PrimaryButton to="/certificaciones">
            Ver formación y certificaciones
          </PrimaryButton>
        </div>

      </section>

    </main>
  );
}
