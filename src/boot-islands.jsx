import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

console.log("[boot] cargado");

// AQUÍ EL CAMBIO: usa /src/islas/*.jsx
const loaders = import.meta.glob("/src/islas/*.jsx");

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
    createRoot(el).render(<Comp {...props} />);
    console.log("[boot] montada:", name);
  }
}

if (document.readyState === "loading")
  document.addEventListener("DOMContentLoaded", mountIslands);
else
  mountIslands();
