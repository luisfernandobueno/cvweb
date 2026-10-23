
import SectionTitle from "../components/SectionTitle";
import PrimaryButton from "../components/PrimaryButton";

export default function About() {
  return (
    <main className="mx-auto min-h-[70vh] max-w-7xl px-5 py-16 md:px-8 md:py-24">

      <SectionTitle
        eyebrow="Más allá del CV"
        title="Un poco sobre mí."
        description="La persona detrás de la experiencia, los proyectos y la formación."
      />

      <div className="max-w-3xl space-y-6 leading-8 text-zinc-400">

        <p>
          Soy Fernando, una persona curiosa y versátil, interesada
          en la tecnología, la creatividad, la comunicación y las
          posibilidades de transformar ideas en proyectos concretos.
        </p>

        <p>
          Disfruto aprender de forma independiente, explorar nuevas
          herramientas y desarrollar proyectos prácticos. Mis
          intereses abarcan el desarrollo digital, la comunicación
          visual y el crecimiento personal.
        </p>

        <p>
          Creo que el desarrollo profesional es un proceso continuo.
          Cada proyecto, experiencia y desafío ofrece una oportunidad
          para aprender y mejorar mi forma de trabajar.
        </p>

        <p>
          Este sitio reúne mi trayectoria, mis proyectos, mi formación
          y algunos de los intereses que forman parte de quien soy.
        </p>

      </div>

      <div className="mt-10 max-w-md">
        <PrimaryButton to="/proyectos">
          Explorá mis proyectos
        </PrimaryButton>
      </div>

    </main>
  );
}
