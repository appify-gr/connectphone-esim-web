// app/[locale]/terms-of-service/page.tsx

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
  const slug = translations("/terms-of-service.url");

  return {
    title: translations("/terms-of-service.metadata.title"),
    description: translations("/terms-of-service.metadata.description"),
    keywords: translations.raw("/terms-of-service.metadata.keywords"),
    openGraph: {
      title: translations("/terms-of-service.metadata.title"),
      description: translations("/terms-of-service.metadata.description"),
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

  const currentRoute = `/terms-of-service`;

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

        {/* Acceptance of Terms */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-medium text-white">
            {translations(`${currentRoute}.acceptance.title`)}
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            {translations(`${currentRoute}.acceptance.description`)}
          </p>
        </div>

        {/* Service Description */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-medium text-white">
            {translations(`${currentRoute}.service_description.title`)}
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-3">
            {translations(`${currentRoute}.service_description.description`)}
          </p>
          <div className="flex flex-col gap-2">
            <p className="text-gray-400 text-sm">
              • {translations(`${currentRoute}.service_description.item_1`)}
            </p>
            <p className="text-gray-400 text-sm">
              • {translations(`${currentRoute}.service_description.item_2`)}
            </p>
            <p className="text-gray-400 text-sm">
              • {translations(`${currentRoute}.service_description.item_3`)}
            </p>
          </div>
        </div>

        {/* User Responsibilities */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-medium text-white">
            {translations(`${currentRoute}.user_responsibilities.title`)}
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-3">
            {translations(`${currentRoute}.user_responsibilities.description`)}
          </p>
          <div className="flex flex-col gap-2">
            <p className="text-gray-400 text-sm">
              • {translations(`${currentRoute}.user_responsibilities.item_1`)}
            </p>
            <p className="text-gray-400 text-sm">
              • {translations(`${currentRoute}.user_responsibilities.item_2`)}
            </p>
            <p className="text-gray-400 text-sm">
              • {translations(`${currentRoute}.user_responsibilities.item_3`)}
            </p>
            <p className="text-gray-400 text-sm">
              • {translations(`${currentRoute}.user_responsibilities.item_4`)}
            </p>
          </div>
        </div>

        {/* Payment and Billing */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-medium text-white">
            {translations(`${currentRoute}.payment.title`)}
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-3">
            {translations(`${currentRoute}.payment.description`)}
          </p>
          <div className="flex flex-col gap-2">
            <p className="text-gray-400 text-sm">
              • {translations(`${currentRoute}.payment.item_1`)}
            </p>
            <p className="text-gray-400 text-sm">
              • {translations(`${currentRoute}.payment.item_2`)}
            </p>
            <p className="text-gray-400 text-sm">
              • {translations(`${currentRoute}.payment.item_3`)}
            </p>
          </div>
        </div>

        {/* Refund Policy */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-medium text-white">
            {translations(`${currentRoute}.refund_policy.title`)}
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            {translations(`${currentRoute}.refund_policy.description`)}
          </p>
        </div>

        {/* Limitation of Liability */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-medium text-white">
            {translations(`${currentRoute}.limitation.title`)}
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            {translations(`${currentRoute}.limitation.description`)}
          </p>
        </div>

        {/* Intellectual Property */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-medium text-white">
            {translations(`${currentRoute}.intellectual_property.title`)}
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            {translations(`${currentRoute}.intellectual_property.description`)}
          </p>
        </div>

        {/* Termination */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-medium text-white">
            {translations(`${currentRoute}.termination.title`)}
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            {translations(`${currentRoute}.termination.description`)}
          </p>
        </div>

        {/* Changes to Terms */}
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
              href="/privacy-policy"
              className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors duration-200 text-sm"
            >
              {translations(`${currentRoute}.related_links.privacy_policy`)}
            </Link>
            <Link
              href="/data-deletion"
              className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors duration-200 text-sm"
            >
              {translations(`${currentRoute}.related_links.data_deletion`)}
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

