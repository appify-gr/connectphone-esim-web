import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";
import { supportedLocales } from "@/locales";

//----------------------------------------------

export const routing = defineRouting({
  locales: supportedLocales,
  defaultLocale: "en",
  pathnames: {
    "/": "/",
    "/e-sim-compatibility-guide": {
      en: "/e-sim-compatibility-guide",
      de: "/e-sim-kompatibilitätsleitfaden",
      fr: "/guide-de-compatibilité-e-sim",
      es: "/guía-de-compatibilidad-e-sim",
    },
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createNavigation(routing);
