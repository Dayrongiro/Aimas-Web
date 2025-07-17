export function MetricsSection() {
  const metrics = [
    {
      number: "+70",
      title: "Proyectos terminados",
      subtitle: "De distintas especialidades de diseño",
    },
    {
      number: "+50",
      title: "Clientes",
      subtitle: "Han confiado en nuestro equipo",
    },
    {
      number: "+02",
      title: "Años de experiencia",
      subtitle: "Entregando pasión y profesionalidad",
    },
  ]

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">{metric.number}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{metric.title}</h3>
              <p className="text-gray-600">{metric.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
