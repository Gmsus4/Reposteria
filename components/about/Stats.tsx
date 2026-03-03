export const Stats = () => {
  return (
    <div className="flex flex-wrap gap-6 pt-2">
      {[
        { value: "14+", label: "Años horneando" },
        { value: "80k", label: "Pasteles vendidos" },
        { value: "100%", label: "Ingredientes locales" },
      ].map((stat) => (
        <div key={stat.label} className="about-stat flex flex-col gap-0.5">
          <span className="card-value font-caveat text-4xl font-bold">{stat.value}</span>
          <span className="text-yellow/50 text-xs uppercase tracking-widest">{stat.label}</span>
        </div>
      ))}
    </div>
  )
}
