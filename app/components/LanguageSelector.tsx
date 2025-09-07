import { CircleFlagLanguage } from "react-circle-flags";
import { SupportedLocaleTypes } from "@/locales";
import { getTranslations } from "next-intl/server";

interface LanguageSelectorProps {
  currentLocale: SupportedLocaleTypes;
  currentPath: string;
}

// Define supported languages with their display names and flag codes
const supportedLanguages = [
  { code: "en" as SupportedLocaleTypes, name: "English", flag: "en" },
  { code: "es" as SupportedLocaleTypes, name: "Español", flag: "es" },
  { code: "fr" as SupportedLocaleTypes, name: "Français", flag: "fr" },
  { code: "de" as SupportedLocaleTypes, name: "Deutsch", flag: "de" },
] as const;

const LanguageSelector = async ({
  currentLocale,
  currentPath,
}: LanguageSelectorProps) => {
  const currentLanguage =
    supportedLanguages.find((lang) => lang.code === currentLocale) ||
    supportedLanguages[0];
  const translations = await getTranslations();
  return (
    <>
      {/* Hidden checkbox to control drawer state */}
      <input type="checkbox" id="language-drawer" className="hidden peer" />

      {/* Language Selector Button */}
      <label
        htmlFor="language-drawer"
        className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity duration-200"
      >
        <CircleFlagLanguage
          languageCode={currentLanguage.flag}
          height={12}
          width={12}
        />
        <span className="text-sm text-gray-400 hover:text-gray-300 transition-colors duration-200">
          {currentLanguage.code.toUpperCase()}
        </span>
        <svg
          className="w-3 h-3 text-gray-400 hover:text-gray-300 transition-all duration-200 peer-checked:rotate-180"
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
      </label>

      {/* Backdrop Overlay */}
      <label
        htmlFor="language-drawer"
        className="fixed inset-0 bg-black/50 backdrop-blur-sm opacity-0 invisible peer-checked:opacity-100 peer-checked:visible transition-all duration-300 z-40 cursor-pointer"
      />

      {/* Bottom Drawer */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-950 border-t border-gray-700 shadow-2xl transform translate-y-full peer-checked:translate-y-0 transition-transform duration-300 ease-out z-50">
        <div className="container mx-auto max-w-5xl px-4 py-6">
          {/* Drawer Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                />
              </svg>
              <h3 className="text-lg font-medium text-white">
                Select Language
              </h3>
            </div>

            <label
              htmlFor="language-drawer"
              className="cursor-pointer p-2 hover:bg-gray-800 rounded-full transition-colors duration-200"
            >
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </label>
          </div>

          {/* Language Options List */}
          <div className="flex flex-col">
            {supportedLanguages.map((language, index) => (
              <form
                key={language.code}
                method="GET"
                action={`/${language.code}${currentPath}`}
              >
                <button
                  type="submit"
                  className={`cursor-pointer w-full flex items-center gap-4 px-4 py-3 text-left transition-colors duration-200 ${
                    currentLocale === language.code
                      ? "bg-gray-800/50 text-white"
                      : "text-gray-300 hover:bg-gray-800/30 hover:text-white"
                  } ${index > 0 ? "border-t border-gray-700/50" : ""}`}
                  disabled={currentLocale === language.code}
                >
                  <CircleFlagLanguage
                    languageCode={language.flag}
                    height={20}
                    width={20}
                  />
                  <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">
                        {translations(language.flag)}
                      </span>
                      <span className="text-xs text-gray-500 uppercase">
                        {language.code}
                      </span>
                    </div>
                    {currentLocale === language.code && (
                      <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                    )}
                  </div>
                </button>
              </form>
            ))}
          </div>

          {/* Handle indicator */}
          <div className="flex justify-center mt-4">
            <div className="w-12 h-1 bg-gray-700 rounded-full"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LanguageSelector;
