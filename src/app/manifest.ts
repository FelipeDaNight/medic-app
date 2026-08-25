import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rx Estudante",
    short_name: "Rx Estudante",
    description:
      "Medicamentos, doenças e atualizações clínicas organizados para consulta rápida durante a graduação em medicina.",
    start_url: "/",
    display: "standalone",
    background_color: "#01349c",
    theme_color: "#01349c",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
