import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    // AVIF antes de WebP: menor ainda nos navegadores que suportam, com
    // fallback automático (Next escolhe pelo header `Accept` da requisição).
    formats: ["image/avif", "image/webp"],
    // Nenhum componente usa a prop `quality` — fixado no default do Next 16
    // (75) só para deixar explícito, já que a partir da v16 este campo é
    // obrigatório para a API de otimização aceitar qualidades além dele.
    qualities: [75],
  },
};

export default nextConfig;
