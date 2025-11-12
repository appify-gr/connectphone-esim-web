// app/[locale]/data-deletion/page.tsx

import { ArrowUp } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Button from "@/app/components/Button";
import LanguageSelector from "@/app/components/LanguageSelector";
import { getTranslations } from "next-intl/server";
import { SupportedLocaleTypes } from "@/locales";

//---------------------------------------------------------------

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: SupportedLocaleTypes }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const translations = await getTranslations({ locale });
  const slug = translations("/data-deletion.url");

  return {
    title: translations("/data-deletion.metadata.title"),
    description: translations("/data-deletion.metadata.description"),
    keywords: translations.raw("/data-deletion.metadata.keywords"),
    openGraph: {
      title: translations("/data-deletion.metadata.title"),
      description: translations("/data-deletion.metadata.description"),
      url: `https://www.connectphone-esim.com/${locale}/${slug}`,
    },
  };
}

//------------------------------------------------------------------

const Page = async ({
  params,
}: {
  params: Promise<{ locale: SupportedLocaleTypes }>;
}) => {
  const { locale } = await params;
  const translations = await getTranslations();

  const currentRoute = `/data-deletion`;

  return (
    <div className="min-h-screen bg-gray-950">
      <div
        id="top"
        className="container mx-auto px-4 py-8 max-w-5xl sm:px-6 sm:py-12 flex flex-col gap-8 sm:gap-12"
      >
        {/* Header */}
        <div className="flex flex-col gap-4 sm:gap-8">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <Link href="/">
              <Image src="/logo.png" alt="Logo" width={250} height={150} />
            </Link>

            <Button
              href="https://connectphone.eu/"
              title={translations(`${currentRoute}.e_sim_offers_button_title`)}
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 relative">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl sm:text-3xl font-medium text-white">
                {translations(`${currentRoute}.title`)}
              </h1>
              <LanguageSelector
                currentLocale={locale}
                currentPath={currentRoute}
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800"></div>

        {/* Introduction */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-medium text-white">
            {translations(`${currentRoute}.introduction.title`)}
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            {translations(`${currentRoute}.introduction.description`)}
          </p>
        </div>

        {/* Your Rights */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-medium text-white">
            {translations(`${currentRoute}.your_rights.title`)}
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-3">
            {translations(`${currentRoute}.your_rights.description`)}
          </p>
          <div className="flex flex-col gap-2">
            <p className="text-gray-400 text-sm">
              • {translations(`${currentRoute}.your_rights.right_1`)}
            </p>
            <p className="text-gray-400 text-sm">
              • {translations(`${currentRoute}.your_rights.right_2`)}
            </p>
            <p className="text-gray-400 text-sm">
              • {translations(`${currentRoute}.your_rights.right_3`)}
            </p>
            <p className="text-gray-400 text-sm">
              • {translations(`${currentRoute}.your_rights.right_4`)}
            </p>
          </div>
        </div>

        {/* What Data We Collect */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-medium text-white">
            {translations(`${currentRoute}.data_collection.title`)}
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-3">
            {translations(`${currentRoute}.data_collection.description`)}
          </p>
          <div className="flex flex-col gap-2">
            <p className="text-gray-400 text-sm">
              • {translations(`${currentRoute}.data_collection.type_1`)}
            </p>
            <p className="text-gray-400 text-sm">
              • {translations(`${currentRoute}.data_collection.type_2`)}
            </p>
            <p className="text-gray-400 text-sm">
              • {translations(`${currentRoute}.data_collection.type_3`)}
            </p>
            <p className="text-gray-400 text-sm">
              • {translations(`${currentRoute}.data_collection.type_4`)}
            </p>
            <p className="text-gray-400 text-sm">
              • {translations(`${currentRoute}.data_collection.type_5`)}
            </p>
          </div>
        </div>

        {/* How to Request Deletion */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-medium text-white">
            {translations(`${currentRoute}.how_to_request.title`)}
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-3">
            {translations(`${currentRoute}.how_to_request.description`)}
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h3 className="text-gray-300 text-sm font-medium">
                {translations(`${currentRoute}.how_to_request.method_1.title`)}
              </h3>
              <p className="text-gray-400 text-sm">
                {translations(`${currentRoute}.how_to_request.method_1.description`)}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-gray-300 text-sm font-medium">
                {translations(`${currentRoute}.how_to_request.method_2.title`)}
              </h3>
              <p className="text-gray-400 text-sm">
                {translations(`${currentRoute}.how_to_request.method_2.description`)}
              </p>
            </div>
          </div>
        </div>

        {/* Processing Time */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-medium text-white">
            {translations(`${currentRoute}.processing_time.title`)}
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            {translations(`${currentRoute}.processing_time.description`)}
          </p>
        </div>

        {/* Exceptions */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-medium text-white">
            {translations(`${currentRoute}.exceptions.title`)}
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-3">
            {translations(`${currentRoute}.exceptions.description`)}
          </p>
          <div className="flex flex-col gap-2">
            <p className="text-gray-400 text-sm">
              • {translations(`${currentRoute}.exceptions.exception_1`)}
            </p>
            <p className="text-gray-400 text-sm">
              • {translations(`${currentRoute}.exceptions.exception_2`)}
            </p>
            <p className="text-gray-400 text-sm">
              • {translations(`${currentRoute}.exceptions.exception_3`)}
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-medium text-white">
            {translations(`${currentRoute}.contact.title`)}
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            {translations.rich(`${currentRoute}.contact.description`, {
              link: (chunks) => (
                <Link
                  href="https://connectphone.eu/contact"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors duration-200"
                >
                  {chunks}
                </Link>
              ),
            })}
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800"></div>

        {/* Additional Information */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-medium text-white">
            {translations(`${currentRoute}.additional_info.title`)}
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            {translations(`${currentRoute}.additional_info.description`)}
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <a
        href="#top"
        className="fixed bottom-6 right-6 w-12 h-12 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105 border border-gray-700"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </a>
    </div>
  );
};

export default Page;

