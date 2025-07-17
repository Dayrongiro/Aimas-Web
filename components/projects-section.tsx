"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("promocionales")

  const projects = {
    promocionales: [
      { name: "Campaña 1", image: "/images/projects/campaign-1.png" },
      { name: "Campaña 2", image: "/images/projects/campaign-2.png" },
      { name: "Campaña 3", image: "/images/projects/campaign-3.png" },
      { name: "Campaña 4", image: "/images/projects/campaign-4.png" },
      { name: "Campaña 5", image: "/images/projects/campaign-5.png" },
      { name: "Campaña 6", image: "/images/projects/campaign-6.png" },
    ],
    identidad: [
      { name: "Mimar", image: "/images/projects/mimar.png" },
      { name: "Black Swan", image: "/images/projects/black-swan.png" },
      { name: "DulSelle", image: "/images/projects/dulselle.png" },
      { name: "TRM Logistics", image: "/images/projects/trm.png" },
      { name: "Global Export", image: "/images/projects/global-export.png" },
      { name: "Resolviste", image: "/images/projects/resolviste.png" },
      { name: "Chocothay", image: "/images/projects/choco-thay.png" },
      { name: "Cchang", image: "/images/projects/chang.png" },
    ],
  }

  return (
    <section id="portafolio" className="py-20 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-0">Proyectos destacados</h2>

          <div className="flex space-x-4">
            <Button
              variant={activeTab === "promocionales" ? "default" : "outline"}
              onClick={() => setActiveTab("promocionales")}
              className={`rounded-full px-6 py-2 ${
                activeTab === "promocionales"
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              Campañas Promocionales
            </Button>
            <Button
              variant={activeTab === "identidad" ? "default" : "outline"}
              onClick={() => setActiveTab("identidad")}
              className={`rounded-full px-6 py-2 ${
                activeTab === "identidad"
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              Identidad Visual
            </Button>
          </div>
        </div>

        {activeTab === "promocionales" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {projects.promocionales.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 w-full max-w-sm"
              >
                <div className="aspect-[4/5] relative">
                  <Image src={project.image || "/placeholder.svg"} alt={project.name} fill className="object-cover" />
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "identidad" && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
            {projects.identidad.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 flex items-center justify-center aspect-square w-full max-w-[200px]"
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  width={200}
                  height={200}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
