import Image from "next/image";
import { SupportedLocaleTypes } from "@/locales";
import { getTranslations, setRequestLocale } from "next-intl/server";

//---------------------------------------------------------------

const Home = async ({}: //params,
{
  //params: Promise<{ locale: SupportedLocaleTypes }>;
}) => {
  //const { locale } = await params;
  // setRequestLocale(locale);
  const translations = await getTranslations();
  return (
    <div className=" items-center justify-center flex h-screen bg-gray-950">
      <Image src="/logo.png" alt="Logo" width={250} height={150} />

      {/* In Development Indicator */}
      <div className="fixed bottom-4 right-4 flex items-center gap-2 bg-gray-900/70 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg border border-gray-700/50">
        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
        <span className="text-xs text-gray-400 font-medium">
          {translations("in_development")}
        </span>
      </div>
    </div>
  );
};

export default Home;
