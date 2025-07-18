"use client"

import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, PhoneIcon as Whatsapp, Linkedin, Instagram } from "lucide-react"
import { submitContactForm } from "@/app/actions/contact-action" // Import the server action

export function ContactSection() {
  const [state, formAction, isPending] = useActionState(submitContactForm, null)

  return (
    <section id="contacto" className="py-20 sm:py-24 bg-blue-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="contact-wave-pattern" x="0" y="0" width="200" height="100" patternUnits="userSpaceOnUse">
              <path d="M0,50 Q50,0 100,50 T200,50" stroke="white" strokeWidth="1" fill="none" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-wave-pattern)" />
        </svg>
    

            {/* Contact Info */}
            <div className="text-white space-y-6 text-left lg:text-center">
              <div>
                <h4 className="text-xl font-semibold mb-2">Información de contacto</h4>
                <p className="text-white/90 mb-6">
                  Conéctate con nuestro equipo de diseño y recibe directamente en tu email ofertas, descuentos e
                  invitaciones especiales.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center lg:justify-center gap-3">
                  <Phone className="w-5 h-5" />
                  <a href="tel:+5350073914" className="text-white/90 hover:text-white transition-colors">
                    +53 50073914
                  </a>
                </div>

                <div className="flex items-center lg:justify-center gap-3">
                  <Mail className="w-5 h-5" />
                  <a
                    href="mailto:comercialaimas@gmail.com"
                    className="text-white/90 hover:text-white transition-colors"
                  >
                    comercialaimas@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex justify-center space-x-6 mt-8">
                <a
                  href="http://wa.me/+5350073914"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  aria-label="WhatsApp"
                >
                  <Whatsapp className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
