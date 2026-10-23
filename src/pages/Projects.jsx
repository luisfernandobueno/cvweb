
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import proyectos from "../data/projects";

export default function Projects() {
  return (
    <main className="mx-auto min-h-[70vh] max-w-7xl px-5 py-16 md:px-8 md:py-24">

      <SectionTitle
        eyebrow="Trabajos seleccionados"
        title="Proyectos que desarrollé."
        description="Una selección de proyectos que refleja mis intereses, mis habilidades y mi experiencia práctica."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {proyectos.map((proyecto) => (
          <ProjectCard
            key={proyecto.title}
            {...proyecto}
          />
        ))}
      </div>

    </main>
  );
}
