import { CircleFlagLanguage } from "react-circle-flags";
import { SupportedLocaleTypes, supportedLocales } from "@/locales";
import { getTranslations } from "next-intl/server";

//-------------------------------------------------------------------------

const LanguageSelector = async ({
  currentLocale,
  currentPath,
}: {
  currentLocale: SupportedLocaleTypes;
  currentPath: string;
}) => {
  const currentLanguage =
    supportedLocales.find((lang) => lang === currentLocale) ||
    supportedLocales[0];
  const translations = await getTranslations();
  return (
    <>
      {/* Hidden checkbox to control drawer state */}
      <input type="checkbox" id="language-drawer" className="hidden peer" />

      {/* Language Selector Button */}
      <label
        htmlFor="language-drawer"
        className="flex items-center gap-2 cursor-pointer opacity-80 hover:opacity-100 transition-opacity duration-200"
      >
        <CircleFlagLanguage
          languageCode={currentLanguage}
          height={12}
          width={12}
        />
        <span className="text-sm text-gray-400">
          {currentLanguage.toUpperCase()}
        </span>
        <svg
          className="w-3 h-3 text-gray-400"
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
        className="fixed inset-0 bg-black/50 backdrop-blur-sm opacity-0 invisible peer-checked:opacity-100 peer-checked:visible transition-all duration-300 z-40"
      />

      {/* Bottom Drawer */}
      <div className="fixed bottom-0 left-0 right-0 bg-main-bg-color-dark border-t border-gray-700 shadow-2xl transform translate-y-full peer-checked:translate-y-0 transition-transform duration-300 ease-out z-50">
        <div className="container mx-auto max-w-5xl px-4 py-6">
          {/* Drawer Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              {/* Icon */}
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
            {/* Close Drawer Button */}
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
            {supportedLocales.map((language, index) => (
              <form
                key={language}
                method="GET"
                action={`/${language}${currentPath}`}
              >
                <button
                  type="submit"
                  className={`cursor-pointer w-full flex items-center gap-4 px-4 py-3 text-left transition-colors duration-200 ${
                    currentLocale === language
                      ? "bg-gray-800/50 text-white"
                      : "text-gray-300 hover:bg-gray-800/30 hover:text-white"
                  } ${index > 0 ? "border-t border-gray-700/50" : ""}`}
                  disabled={currentLocale === language}
                >
                  <CircleFlagLanguage
                    languageCode={language}
                    height={20}
                    width={20}
                  />
                  <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">
                        {translations(language)}
                      </span>
                      <span className="text-xs text-gray-500 uppercase">
                        {language}
                      </span>
                    </div>
                    {currentLocale === language && (
                      <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                    )}
                  </div>
                </button>
              </form>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default LanguageSelector;
