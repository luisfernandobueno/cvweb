
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({
  title,
  description,
  image,
  technologies = [],
  link,
}) {
  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-green-400/50">

      <div className="aspect-video overflow-hidden bg-zinc-900">
        {image ? (
          <img
            src={image}
            alt={`Vista previa de ${title}`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-zinc-500">
            Vista previa del proyecto
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold">{title}</h3>

        <p className="mt-3 leading-7 text-zinc-400">
          {description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300"
            >
              {technology}
            </span>
          ))}
        </div>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 font-semibold text-green-400 hover:text-green-300"
          >
            Ver proyecto <ArrowUpRight size={18} />
          </a>
        )}
      </div>
    </article>
  );
}
