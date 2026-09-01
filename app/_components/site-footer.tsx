import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-gold bg-navy px-[6%] pb-[26px] pt-[34px] text-center text-xs tracking-wide text-pale md:px-8">
      <p className="mb-2 font-title text-lg italic text-white">
        Lauro Santos Odontologia
      </p>
      <p>
        Feito com foco em sorrisos naturais · {siteConfig.cro}
      </p>
      <p className="mt-1 text-pale/70">
        © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
      </p>
    </footer>
  );
}
