"use client";

import { useTransition } from "react";
import { useParams } from "next/navigation";
import { CircleFlagLanguage } from "react-circle-flags";
import { Locale, usePathname, useRouter } from "@/app/i18n/routing";
import { useTranslations, useLocale } from "next-intl";
import { SupportedLocaleTypes } from "@/locales";

//-------------------------------------------------------------------------

export default function LanguageButton({
  locale,
  icon,
}: {
  locale: SupportedLocaleTypes;
  icon: string;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const translations = useTranslations();
  const currentLocale = useLocale();

  function handleChange(nextLocale: Locale) {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
      router.refresh();
    });
  }

  return (
    <button
      className={`cursor-pointer flex items-center justify-between gap-2 text-xs px-3 py-2 rounded transition-colors duration-200 ${
        locale === currentLocale
          ? "bg-gray-700 text-gray-200 cursor-default"
          : "bg-transparent hover:bg-gray-800 text-gray-400 hover:text-gray-200"
      } disabled:opacity-50`}
      onClick={() => handleChange(locale)}
      disabled={isPending || locale === currentLocale}
    >
      <span className="font-medium">{translations(locale)}</span>
      <CircleFlagLanguage languageCode={icon} height={12} width={12} />
    </button>
  );
}
