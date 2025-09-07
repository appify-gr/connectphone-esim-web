import { CircleFlagLanguage } from "react-circle-flags";
import { SupportedLocaleTypes } from "@/locales";
import LanguageChanger from "@/app/components/language_selector/LanguageChanger.client";

interface HeaderWithLanguageSelectorProps {
  title: string;
  locale: SupportedLocaleTypes;
}

const HeaderWithLanguageSelector = ({
  title,
  locale,
}: HeaderWithLanguageSelectorProps) => {
  // Map locales to country codes for flags
  const getCountryCode = (locale: SupportedLocaleTypes): string => {
    const localeMap: Record<SupportedLocaleTypes, string> = {
      en: "en",
      es: "es",
      fr: "fr",
      de: "de",
    };
    return localeMap[locale] || "us";
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 relative">
      <div className="flex items-center gap-3 group">
        <h1 className="text-2xl sm:text-3xl font-medium text-white">{title}</h1>
        <div className="relative">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg border border-gray-700/50 hover:border-gray-600/50 transition-all duration-200 cursor-pointer group">
            <CircleFlagLanguage
              languageCode={getCountryCode(locale)}
              height={12}
              width={12}
            />
            <span className="text-gray-300 text-sm font-medium uppercase">
              {locale}
            </span>
            <svg
              className="w-4 h-4 text-gray-400 group-hover:text-gray-300 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          {/* Integrate the existing LanguageChanger component */}
          <div className="absolute top-full left-0 mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-xl overflow-hidden min-w-[200px]">
              <LanguageChanger />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderWithLanguageSelector;
