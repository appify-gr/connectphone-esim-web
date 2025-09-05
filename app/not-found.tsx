import { useTranslations } from "next-intl";

// This page renders when a route like `/unknown.txt` is requested.
// In this case, the layout at `app/[locale]/layout.tsx` receives
// an invalid value as the `[locale]` param and calls `notFound()`.

export default function NotFoundPage() {
  const translations = useTranslations();

  return <p className="max-w-[460px]">{translations("not_found_message")}</p>;
}
