
export default function SectionTitle({
  eyebrow,
  title,
  description,
}) {
  return (
    <div className="mb-10 max-w-2xl">
      {eyebrow && (
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-green-400">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 leading-7 text-zinc-400">
          {description}
        </p>
      )}
    </div>
  );
}
