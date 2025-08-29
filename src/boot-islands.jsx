import React from "react";
import { createRoot } from "react-dom/client";

console.log("[boot] cargado");

// Carga dinámica de islas y sus estilos
const loaders = import.meta.glob("/src/islas/*.jsx");
const styleLoaders = import.meta.glob("/src/islas/*.css", { as: "raw" });

function parseProps(str) {
  if (!str) return {};
  try { return JSON.parse(str); } catch { return {}; }
}

async function mountIslands() {
  const nodes = document.querySelectorAll("[data-island]");
  console.log("[boot] nodos encontrados:", nodes.length);
  console.log("[boot] loaders:", Object.keys(loaders)); // para ver qué encontró

  for (const el of nodes) {
    const name = el.getAttribute("data-island"); // "Archivos"
    const props = parseProps(el.getAttribute("data-props"));

    const entry = Object.entries(loaders).find(([p]) =>
      p.toLowerCase().endsWith(`/islas/${name}.jsx`.toLowerCase())
    );
    if (!entry) { console.warn("[boot] Isla no encontrada:", name); continue; }

    const [, loader] = entry;
    const mod = await loader();
    const Comp = mod.default || mod[name];

    // Crear Shadow DOM y cargar estilos
    const shadow = el.attachShadow({ mode: "open" });
    const cssEntry = Object.entries(styleLoaders).find(([p]) =>
      p.toLowerCase().endsWith(`/islas/${name}.css`.toLowerCase())
    );
    if (cssEntry) {
      const [, cssLoader] = cssEntry;
      const css = await cssLoader();
      const style = document.createElement("style");
      style.textContent = css;
      shadow.appendChild(style);
    }

    createRoot(shadow).render(<Comp {...props} />);
    console.log("[boot] montada:", name);
  }
}

if (document.readyState === "loading")
  document.addEventListener("DOMContentLoaded", mountIslands);
else
  mountIslands();
