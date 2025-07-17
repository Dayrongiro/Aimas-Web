import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-blue-600 overflow-hidden pt-16"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="wave-pattern" x="0" y="0" width="200" height="100" patternUnits="userSpaceOnUse">
              <path d="M0,50 Q50,0 100,50 T200,50" stroke="white" strokeWidth="1" fill="none" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave-pattern)" />
        </svg>
      </div>

      {/* 3D Symbol Background with 11% opacity */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0] pointer-events-none">
        <Image
          src="/images/symbol-3d.png"
          alt="Aimas Estudio 3D Symbol"
          width={600}
          height={600}
          className="w-96 h-96 lg:w-[600px] lg:h-[600px] object-contain"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 pt-12 pb-20">
        {" "}
        {/* Increased padding-top and padding-bottom */}
        <div className="max-w-4xl mx-auto">
          <p className="text-white/90 text-lg mb-8 font-medium">Diseño en Cuba</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-12 leading-tight">
            Equipo de
            <br />
            Diseño Gráfico
            <br />
            Multidisciplinar
          </h1>
          <p className="text-white/90 text-lg sm:text-xl mb-16 max-w-3xl mx-auto leading-relaxed">
            Ofrecemos identidad visual, campañas promocionales y sitios web. Creamos logotipos, manuales, infografías,
            carteles, redes y servicios online. Nuestro enfoque combina creatividad estratégica y funcionalidad para
            marcas, eventos y productos. Diseño cubano con impacto profesional y visión global.
          </p>
          <Link href="#contacto" passHref>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-2 text-base font-semibold rounded-md"
            >
              {" "}
              {/* Smaller padding and font size */}
              Contactar
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
