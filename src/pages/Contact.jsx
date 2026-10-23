
import {
  Mail,
  MessageCircle
} from "lucide-react";

import SectionTitle from "../components/SectionTitle";

export default function Contact() {
  const email = "TU_CORREO@ejemplo.com";

  const enlaces = [
    {
      title: "Correo electrónico",
      description:
        "Para consultas profesionales y oportunidades laborales.",
      href: `mailto:${email}`,
      icon: Mail,
    },
    {
      title: "WhatsApp",
      description: "Para conversar de forma directa.",
      href: "https://wa.me/TU_NUMERO",
      icon: MessageCircle,
    }
  ];

  return (
    <main className="mx-auto min-h-[70vh] max-w-7xl px-5 py-16 md:px-8 md:py-24">

      <SectionTitle
        eyebrow="Contacto"
        title="Hablemos."
        description="¿Te interesa mi trabajo o tenés una oportunidad profesional en mente? Me encantaría conocer tu propuesta."
      />

      <div className="grid max-w-3xl gap-4 sm:grid-cols-2">
        {enlaces.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.title}
              href={item.href}
              target={
                item.title === "Code2" ? "_blank" : undefined
              }
              rel={
                item.title === "Code2"
                  ? "noopener noreferrer"
                  : undefined
              }
              className="flex items-start gap-4 rounded-2xl border border-white/10 p-6 transition hover:border-green-400/50"
            >
              <Icon
                className="mt-1 shrink-0 text-green-400"
                size={26}
              />

              <div>
                <h2 className="font-bold">{item.title}</h2>

                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {item.description}
                </p>
              </div>
            </a>
          );
        })}
      </div>

    </main>
  );
}
