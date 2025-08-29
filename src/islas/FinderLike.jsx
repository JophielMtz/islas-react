import React from "react";
import { Scale, FileText, Users, Building2, CheckCircle2 } from "lucide-react";

/**
 * Secretariado Técnico – Versión para Astro (React + Tailwind)
 * - Hero 1920x400 con <img src="/imgs/bg1.png" /> (no background-image inline)
 * - Encabezado centrado, subtítulo institucional
 * - Sección de 2 columnas con títulos e íconos
 * - Bloque "Conformación" con lista en dos columnas
 */
export default function SecretariadoTecnicoSection() {
  return (
    <section className="w-full">
      {/* HERO (1920x400) usando SRC local */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <img
          src="/IEPC_DURANGO/pruebajeje/assets/imgs/bg1.png
"
          alt="Imagen institucional"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          width={1920}
          height={400}
        />
        {/* gradiente para contraste */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />

        <div className="relative z-10 flex h-full items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
              Secretariado Técnico
            </h1>
            <p className="mt-3 text-base md:text-lg text-white/90">
              Órgano colegiado administrativo encargado de fijar las políticas, programas
              y procedimientos del Instituto.
            </p>
          </div>
        </div>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-neutral-800">
          {/* Columna 1 */}
          <div>
            <div className="flex items-center gap-3 mb-3 text-neutral-700">
              <Scale className="h-5 w-5" />
              <h2 className="text-2xl font-semibold">Funciones y Políticas</h2>
            </div>
            <p className="leading-relaxed text-[0.88rem] text-neutral-700 text-justify">
              Es el órgano encargado de fijar las políticas generales, los programas y los procedimientos administrativos del Instituto; supervisa el cumplimiento de los programas de Capacitación Electoral y Educación Cívica, así como las normas aplicables a partidos y agrupaciones políticas. Coadyuva con el Secretario Ejecutivo en la selección de candidatos a Consejeros Electorales.
            </p>
          </div>

          {/* Columna 2 */}
          <div>
            <div className="flex items-center gap-3 mb-3 text-neutral-700 text-justify">
              <FileText className="h-5 w-5" />
              <h2 className="text-2xl font-semibold">Procesos y Sanciones</h2>
            </div>
            <p className="leading-relaxed text-[0.88rem] text-neutral-700">
              Presenta a consideración del Consejo General el proyecto de dictamen de pérdida de registro de partidos o agrupaciones que no cumplan la Ley. Integra expedientes relativos a faltas administrativas y, en su caso, propone las sanciones correspondientes.
            </p>
          </div>
        </div>

        {/* Separador */}
        <hr className="my-10 border-neutral-200" />

        {/* Conformación */}
        <div>
          <div className="flex items-center gap-3 mb-4 text-neutral-700">
            <Users className="h-5 w-5" />
            <h3 className="text-2xl font-semibold">Conformación</h3>
          </div>
          <p className="text-neutral-700 mb-4">
            El Secretariado Técnico está conformado por los siguientes miembros y direcciones:
          </p>
          <div className="text-sm grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3 text-neutral-800">
            <div className="flex items-start gap-2 ">
              <CheckCircle2 className="h-4 w-4 mt-1 text-neutral-500" />
              <span>Presidente del Consejo General.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 mt-1 text-neutral-500" />
              <span>Secretario Ejecutivo del Instituto.</span>
            </div>
            <div className="flex items-start gap-2">
              <Building2 className="h-4 w-4 mt-1 text-neutral-500" />
              <span>Dirección de Organización Electoral.</span>
            </div>
            <div className="flex items-start gap-2">
              <Building2 className="h-4 w-4 mt-1 text-neutral-500" />
              <span>Dirección de Capacitación Electoral y Educación Cívica.</span>
            </div>
            <div className="flex items-start gap-2">
              <Building2 className="h-4 w-4 mt-1 text-neutral-500" />
              <span>Dirección de Administración.</span>
            </div>
            <div className="flex items-start gap-2">
              <Building2 className="h-4 w-4 mt-1 text-neutral-500" />
              <span>Dirección Jurídica.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 mt-1 text-neutral-500" />
              <span>Unidades Técnicas.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
