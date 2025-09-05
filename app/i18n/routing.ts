import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";
import { supportedLocales } from "@/locales";

//----------------------------------------------

export const routing = defineRouting({
  locales: supportedLocales,
  defaultLocale: "en",
  pathnames: {
    "/": "/",
    "/pathnames": {
      en: "/pathnames",
      de: "/pfadnamen",
      fr: "/noms-de-chemin",
      es: "/nombres-de-ruta",
    },
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createNavigation(routing);
