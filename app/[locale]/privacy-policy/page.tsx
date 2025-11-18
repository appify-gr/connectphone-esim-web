// app/[locale]/privacy-policy/page.tsx

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
  const slug = translations("/privacy-policy.url");

  return {
    title: translations("/privacy-policy.metadata.title"),
    description: translations("/privacy-policy.metadata.description"),
    keywords: translations.raw("/privacy-policy.metadata.keywords"),
    openGraph: {
      title: translations("/privacy-policy.metadata.title"),
      description: translations("/privacy-policy.metadata.description"),
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

  const currentRoute = `/privacy-policy`;

  return (
    <div className="min-h-screen bg-main-bg-color-dark">
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

        {/* Last Updated */}
        <div className="flex flex-col gap-2">
          <p className="text-gray-400 text-sm">
            {translations(`${currentRoute}.last_updated`)}
          </p>
        </div>

        {/* Introduction */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-medium text-white">
            {translations(`${currentRoute}.introduction.title`)}
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            {translations(`${currentRoute}.introduction.description`)}
          </p>
        </div>

        {/* Information We Collect */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-medium text-white">
            {translations(`${currentRoute}.information_we_collect.title`)}
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-3">
            {translations(`${currentRoute}.information_we_collect.description`)}
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <h3 className="text-gray-300 text-sm font-medium">
                {translations(`${currentRoute}.information_we_collect.personal_data.title`)}
              </h3>
              <div className="flex flex-col gap-2">
                <p className="text-gray-400 text-sm">
                  • {translations(`${currentRoute}.information_we_collect.personal_data.item_1`)}
                </p>
                <p className="text-gray-400 text-sm">
                  • {translations(`${currentRoute}.information_we_collect.personal_data.item_2`)}
                </p>
                <p className="text-gray-400 text-sm">
                  • {translations(`${currentRoute}.information_we_collect.personal_data.item_3`)}
                </p>
                <p className="text-gray-400 text-sm">
                  • {translations(`${currentRoute}.information_we_collect.personal_data.item_4`)}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-gray-300 text-sm font-medium">
                {translations(`${currentRoute}.information_we_collect.usage_data.title`)}
              </h3>
              <div className="flex flex-col gap-2">
                <p className="text-gray-400 text-sm">
                  • {translations(`${currentRoute}.information_we_collect.usage_data.item_1`)}
                </p>
                <p className="text-gray-400 text-sm">
                  • {translations(`${currentRoute}.information_we_collect.usage_data.item_2`)}
                </p>
                <p className="text-gray-400 text-sm">
                  • {translations(`${currentRoute}.information_we_collect.usage_data.item_3`)}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How We Use Your Information */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-medium text-white">
            {translations(`${currentRoute}.how_we_use.title`)}
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-3">
            {translations(`${currentRoute}.how_we_use.description`)}
          </p>
          <div className="flex flex-col gap-2">
            <p className="text-gray-400 text-sm">
              • {translations(`${currentRoute}.how_we_use.item_1`)}
            </p>
            <p className="text-gray-400 text-sm">
              • {translations(`${currentRoute}.how_we_use.item_2`)}
            </p>
            <p className="text-gray-400 text-sm">
              • {translations(`${currentRoute}.how_we_use.item_3`)}
            </p>
            <p className="text-gray-400 text-sm">
              • {translations(`${currentRoute}.how_we_use.item_4`)}
            </p>
            <p className="text-gray-400 text-sm">
              • {translations(`${currentRoute}.how_we_use.item_5`)}
            </p>
          </div>
        </div>

        {/* Data Sharing */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-medium text-white">
            {translations(`${currentRoute}.data_sharing.title`)}
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-3">
            {translations(`${currentRoute}.data_sharing.description`)}
          </p>
          <div className="flex flex-col gap-2">
            <p className="text-gray-400 text-sm">
              • {translations(`${currentRoute}.data_sharing.item_1`)}
            </p>
            <p className="text-gray-400 text-sm">
              • {translations(`${currentRoute}.data_sharing.item_2`)}
            </p>
            <p className="text-gray-400 text-sm">
              • {translations(`${currentRoute}.data_sharing.item_3`)}
            </p>
          </div>
        </div>

        {/* Data Security */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-medium text-white">
            {translations(`${currentRoute}.data_security.title`)}
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            {translations(`${currentRoute}.data_security.description`)}
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
              • {translations(`${currentRoute}.your_rights.item_1`)}
            </p>
            <p className="text-gray-400 text-sm">
              • {translations(`${currentRoute}.your_rights.item_2`)}
            </p>
            <p className="text-gray-400 text-sm">
              • {translations(`${currentRoute}.your_rights.item_3`)}
            </p>
            <p className="text-gray-400 text-sm">
              • {translations(`${currentRoute}.your_rights.item_4`)}
            </p>
          </div>
        </div>

        {/* Cookies */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-medium text-white">
            {translations(`${currentRoute}.cookies.title`)}
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            {translations(`${currentRoute}.cookies.description`)}
          </p>
        </div>

        {/* Changes to This Policy */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-medium text-white">
            {translations(`${currentRoute}.changes.title`)}
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            {translations(`${currentRoute}.changes.description`)}
          </p>
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
                  href="/contact-us"
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

        {/* Related Links */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-medium text-white">
            {translations(`${currentRoute}.related_links.title`)}
          </h2>
          <div className="flex flex-col gap-2">
            <Link
              href="/data-deletion"
              className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors duration-200 text-sm"
            >
              {translations(`${currentRoute}.related_links.data_deletion`)}
            </Link>
            <Link
              href="/terms-of-service"
              className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors duration-200 text-sm"
            >
              {translations(`${currentRoute}.related_links.terms_of_service`)}
            </Link>
          </div>
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

