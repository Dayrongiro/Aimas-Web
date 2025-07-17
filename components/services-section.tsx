import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ServicesSection() {
  const services = [
    {
      title: "Auditoría de imagen",
      description:
        "Analizamos tu identidad visual actual, determinamos inconsistencias y proponemos mejoras estratégicas. Evaluamos la percepción de tu marca en todos sus puntos de contacto.",
    },
    {
      title: "Logotipo",
      description:
        "Diseñamos identificadores visuales funcionales y únicos que representen la esencia de tu marca y se apliquen con claridad en todos los medios, digitales y tradicionales.",
    },
    {
      title: "Manual de Identidad",
      description:
        "Desarrollamos manuales de identidad visual completos con normas de uso, colores, tipografías y aplicaciones para asegurar coherencia y reconocimiento de marca sostenible.",
    },
    {
      title: "Campaña Promocional",
      description:
        "Creamos campañas promocionales integradas para productos, eventos o servicios. Incluimos estrategias, carteles, redes sociales y piezas gráficas múltiples plataformas comunicativas.",
    },
    {
      title: "Sitio Web",
      description:
        "Desarrollamos sitios web promocionales, institucionales y e-commerce, enfocados en funcionalidad, experiencia de usuario, posicionamiento SEO y coherencia visual con tu identidad.",
    },
    {
      title: "Otros servicios",
      description:
        "Ofrecemos soluciones personalizadas que incluyen animación, diseño editorial, packaging, contenido visual para redes y asesoría integral según las necesidades específicas de tu proyecto.",
    },
  ]

  return (
    <section id="servicios" className="py-20 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-16">Servicios</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <Card key={index} className="h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <CardDescription className="text-gray-600 mb-6 flex-1">{service.description}</CardDescription>
                <Link href="http://wa.me/+5350073914" target="_blank" rel="noopener noreferrer" passHref>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Contactar</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
