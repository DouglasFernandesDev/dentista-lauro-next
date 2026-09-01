import type { ComponentType, SVGProps } from "react";
import Image from "next/image";
import { Clock, Mail, MapPin } from "lucide-react";

import { siteConfig } from "@/lib/site-config";

import { InstagramIcon, WhatsappIcon } from "./icons";
import { SectionKicker } from "./section-kicker";

import perfil from "@/public/imagens/perfil.jpg";

type ContactItem = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
};

const contactItems: readonly ContactItem[] = [
  {
    icon: WhatsappIcon,
    label: "WhatsApp",
    value: siteConfig.phoneDisplay,
    href: siteConfig.whatsappUrl,
    external: true,
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: "@drlaurosantos",
    href: siteConfig.instagramUrl,
    external: true,
  },
  {
    icon: Mail,
    label: "E-mail",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: MapPin,
    label: "Localização",
    value: `${siteConfig.address.street} — ${siteConfig.address.district}, ${siteConfig.address.city}/${siteConfig.address.state}`,
    href: siteConfig.mapsUrl,
    external: true,
  },
  {
    icon: Clock,
    label: "Atendimento",
    value: siteConfig.hours,
  },
];

export function ContactSection() {
  return (
    <section
      id="contato"
      aria-labelledby="contato-titulo"
      className="section-pad bg-paler"
    >
      <div className="mx-auto max-w-[1160px]">
        <SectionKicker>Contato</SectionKicker>
        <h2
          id="contato-titulo"
          className="max-w-[620px] font-title text-[clamp(1.875rem,3.6vw,2.75rem)] font-medium leading-[1.12] text-navy"
        >
          Fale comigo e agende seu horário.
        </h2>

        <div className="mt-10 grid gap-[60px] md:grid-cols-[1.3fr_1fr] md:items-center md:gap-10 lg:gap-[60px]">
          <ul className="flex flex-col gap-3.5">
            {contactItems.map((item) => {
              const Icon = item.icon;
              const content = (
                <>
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-sky text-deep">
                    <Icon className="size-4" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-[13px] font-semibold uppercase tracking-wide text-deep">
                      {item.label}
                    </span>
                    <span className="text-[15px] font-medium text-navy">
                      {item.value}
                    </span>
                  </span>
                </>
              );

              return (
                <li key={item.label}>
                  {item.href ? (
                    <a
                      href={item.href}
                      {...(item.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="flex items-center gap-4 rounded-xl border border-[#bde0fa] bg-sky/70 px-5 py-4 transition duration-200 hover:bg-mid hover:shadow-[0_6px_14px_rgba(13,95,158,0.15)] motion-safe:hover:-translate-y-0.5"
                    >
                      {content}
                      {item.external ? (
                        <span className="sr-only">(abre em nova aba)</span>
                      ) : null}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 rounded-xl border border-[#bde0fa] bg-sky/70 px-5 py-4">
                      {content}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          <Image
            src={perfil}
            alt={`Retrato de ${siteConfig.name}`}
            width={520}
            height={620}
            sizes="(min-width: 768px) 380px, 100vw"
            placeholder="blur"
            className="h-full w-full rounded-2xl object-cover shadow-[0_8px_20px_rgba(0,0,0,0.12)]"
          />
        </div>

        <iframe
          title={`Mapa da localização — ${siteConfig.address.street}, ${siteConfig.address.city}/${siteConfig.address.state}`}
          src={`https://www.google.com/maps?q=${encodeURIComponent(
            `${siteConfig.address.street}, ${siteConfig.address.district}, ${siteConfig.address.city} - ${siteConfig.address.state}, ${siteConfig.address.zip}`,
          )}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="mt-10 h-[320px] w-full rounded-2xl border border-[#bde0fa]"
        />
      </div>
    </section>
  );
}
