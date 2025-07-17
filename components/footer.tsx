import Image from "next/image"
import Link from "next/link"
import { PhoneIcon as Whatsapp, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  const navItems = [
    { href: "#inicio", label: "Inicio" },
    { href: "#servicios", label: "Servicios" },
    { href: "#portafolio", label: "Portafolio" },
    { href: "#contacto", label: "Contacto" },
  ]

  const socialLinks = [
    { icon: Whatsapp, href: "http://wa.me/+5350073914", label: "WhatsApp" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ]

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/images/logo-full.png" alt="Aimas Estudio" width={120} height={40} className="h-8 w-auto" />
          </Link>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-500 text-sm">
            <p>Copyright Aimas Estudio © 2025. Todos los derechos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
