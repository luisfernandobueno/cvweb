
import { useState } from "react";
import SectionTitle from "../components/SectionTitle";

const certifications = [
  {
    id: 1,
    title: "Inglés — C2 Proficient",
    subtitle: "Certificado EF SET",
    category: "Idiomas",
    type: "Certificación",
    date: "",
    file: "https://drive.google.com/file/d/1hUnupqlPlU50Zyhg-KVZSo00n6n5c-8U/view?usp=drive_link",
    favorite: true,
  },
  {
    id: 2,
    title: "Italiano — A2",
    subtitle: "EF Test",
    category: "Idiomas",
    type: "Evaluación de idioma",
    date: "",
    file: "https://drive.google.com/file/d/14ceKcvDl2QfpE-gkz6cnUwkYFZmVpawh/view?usp=drive_link",
    favorite: false,
  },
  {
    id: 3,
    title: "Auxiliar Administrativo",
    subtitle: "INFA",
    category: "Administración",
    type: "Certificación",
    date: "",
    file: "https://drive.google.com/file/d/1piP2EJ_Em5wOgtKI-g18ZJfjvZd86vDs/view?usp=drive_link",
    favorite: false,
  },
  {
    id: 4,
    title: "Evaluación de desempeño",
    subtitle: "Banco República — BROU",
    category: "Experiencia laboral",
    type: "Evaluación de desempeño",
    date: "",
    file: "https://drive.google.com/file/d/1NJnQzdgEySfb64aWohgFcz95APBsaP49/view?usp=drive_link",
    favorite: true,
  },
  {
    id: 5,
    title: "Desarrollo Web",
    subtitle: "Jóvenes a Programar — JaP",
    category: "Tecnología",
    type: "Certificación",
    date: "",
    file: "https://drive.google.com/file/d/1N-ncXgde9DFQxgDgfvgu-5brzORIMdg2/view?usp=drive_link",
    favorite: true,
  },
  {
    id: 6,
    title: "Lenguaje SQL",
    subtitle: "Educantel",
    category: "Tecnología",
    type: "Certificación",
    date: "",
    file: "https://drive.google.com/file/d/1JPM-MrSJCMHZ_GoC_zAhdI1LieFiXBu6/view?usp=drive_link",
    favorite: false,
  },
  {
    id: 7,
    title: "Introducción a la Programación",
    subtitle: "Educantel",
    category: "Tecnología",
    type: "Certificación",
    date: "",
    file: "https://drive.google.com/file/d/1j3jNXluGyFossNX1oOOnMcKHJSlxFDkW/view?usp=drive_link",
    favorite: false,
  },
  {
    id: 8,
    title: "Excel Básico",
    subtitle: "Educantel",
    category: "Administración",
    type: "Certificación",
    date: "",
    file: "https://drive.google.com/file/d/118O3Rv1bVNWdT6g8OAVRa0uDMM9YQzFn/view?usp=drive_link",
    favorite: false,
  },
  {
    id: 9,
    title: "Word Básico",
    subtitle: "Educantel",
    category: "Administración",
    type: "Certificación",
    date: "",
    file: "https://drive.google.com/file/d/1wxDsbW_LNoLHuERXti--PcuqAoNpU-X2/view?usp=drive_link",
    favorite: false,
  },
  {
    id: 10,
    title: "Carta de recomendación",
    subtitle: "Banco República — BROU",
    category: "Experiencia laboral",
    type: "Carta de referencia laboral",
    date: "",
    file: "https://drive.google.com/file/d/1KY5XL3e78QhgAC5U6U8_MNwnif2gSlK-/view?usp=drive_link",
    favorite: true,
  },
];

const categories = [
  "Idiomas",
  "Tecnología",
  "Administración",
  "Experiencia laboral",
];

function CertificateCard({ certificate }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 transition duration-200 hover:-translate-y-1 hover:border-green-500/60 hover:bg-zinc-900 hover:shadow-xl hover:shadow-black/20">
      <div className="flex flex-1 flex-col">
        <span className="mb-3 w-fit rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-300">
          {certificate.category}
        </span>

        <h3 className="text-base font-bold leading-snug text-zinc-100">
          {certificate.title}
        </h3>

        <p className="mt-1 text-sm text-zinc-400">
          {certificate.subtitle}
        </p>

        <p className="mt-3 text-xs text-zinc-500">
          {certificate.type}
        </p>

        <a
          href={certificate.file}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex w-full items-center justify-center rounded-xl border border-zinc-700 px-4 py-2.5 mt-5 text-sm font-semibold text-zinc-300 transition hover:border-green-500 hover:bg-green-600 hover:text-white"
        >
          Ver documento
          <span className="ml-2" aria-hidden="true">
            ↗
          </span>
        </a>
      </div>
    </article>
  );
}

export default function Certifications() {
  const [activeCategories, setActiveCategories] = useState([]);

  const favorites = certifications.filter(
    (certificate) => certificate.favorite
  );

  const filteredCertifications =
    activeCategories.length === 0
      ? certifications
      : certifications.filter((certificate) =>
          activeCategories.includes(certificate.category)
        );

  function toggleCategory(category) {
    setActiveCategories((current) =>
      current.includes(category)
        ? current.filter((item) => item !== category)
        : [...current, category]
    );
  }

  function clearFilters() {
    setActiveCategories([]);
  }

  return (
    <main className="mx-auto min-h-[70vh] max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <SectionTitle
        eyebrow="Perfil profesional"
        title="Certificaciones y credenciales."
        description="Una colección de mis certificaciones, evaluaciones de idiomas, referencias profesionales y logros educativos."
      />

      {/* Documentos destacados */}
      <section className="mt-12">
        <div className="mb-5">
          <p className="text-xs font-bold uppercase tracking-widest text-green-300">
            Selección destacada
          </p>

          <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-xl font-bold text-zinc-100">
              Documentos destacados
            </h2>

            <p className="text-sm text-zinc-400">
              {favorites.length} documentos seleccionados
            </p>
          </div>

          <p className="mt-2 text-sm leading-relaxed text-zinc-400">
            Mis cualificaciones y referencias profesionales más relevantes.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {favorites.map((certificate) => (
            <a
              key={certificate.id}
              href={certificate.file}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 transition hover:border-green-500/60 hover:bg-green-500/5"
            >
              <span className="mt-0.5 text-lg text-green-400" aria-hidden="true">
                ★
              </span>

              <div className="min-w-0">
                <h3 className="text-sm font-bold leading-snug text-zinc-200 transition group-hover:text-green-200">
                  {certificate.title}
                </h3>

                <p className="mt-1 text-xs leading-relaxed text-zinc-400">
                  {certificate.subtitle}
                </p>

                <p className="mt-3 text-xs font-medium text-green-300">
                  Ver documento ↗
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Todas las certificaciones */}
      <section className="mt-16">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-green-300">
              Biblioteca de documentos
            </p>

            <h2 className="mt-2 text-2xl font-black text-zinc-100">
              Todas las certificaciones
            </h2>

            <p className="mt-2 text-sm text-zinc-400">
              Explorá mis cualificaciones por categoría.
            </p>
          </div>

          <p className="text-sm text-zinc-400">
            Mostrando{" "}
            <span className="font-bold text-zinc-100">
              {filteredCertifications.length}
            </span>{" "}
            de {certifications.length}
          </p>
        </div>

        {/* Filtros */}
        <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4 sm:p-5">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={clearFilters}
              aria-pressed={activeCategories.length === 0}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                activeCategories.length === 0
                  ? "border-green-500 bg-green-600 text-white"
                  : "border-zinc-700 bg-zinc-950 text-zinc-300 hover:border-green-500/70 hover:text-white"
              }`}
            >
              Todas
            </button>

            {categories.map((category) => {
              const isActive = activeCategories.includes(category);

              return (
                <button
                  key={category}
                  onClick={() => toggleCategory(category)}
                  aria-pressed={isActive}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                    isActive
                      ? "border-green-500 bg-green-600 text-white"
                      : "border-zinc-700 bg-zinc-950 text-zinc-300 hover:border-green-500/70 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-zinc-800 pt-4">
            <p className="text-xs leading-relaxed text-zinc-400">
              Seleccioná varias categorías para combinar los resultados.
            </p>

            {activeCategories.length > 0 && (
              <button
                onClick={clearFilters}
                className="shrink-0 text-xs font-bold text-green-300 transition hover:text-green-200"
              >
                Limpiar filtros
              </button>
            )}
          </div>
        </div>

        {/* Cuadrícula */}
        {filteredCertifications.length > 0 ? (
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredCertifications.map((certificate) => (
              <CertificateCard
                key={certificate.id}
                certificate={certificate}
              />
            ))}
          </div>
        ) : (
          <div className="mt-6 rounded-2xl border border-dashed border-zinc-700 bg-zinc-900/40 px-6 py-16 text-center">
            <h3 className="text-lg font-bold text-zinc-100">
              No se encontraron documentos
            </h3>

            <p className="mt-2 text-sm text-zinc-400">
              Probá seleccionando otra categoría.
            </p>

            <button
              onClick={clearFilters}
              className="mt-5 rounded-xl bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-500"
            >
              Mostrar todas las certificaciones
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
