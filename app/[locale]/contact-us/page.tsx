// app/[locale]/contact-us/page.tsx

import { ArrowUp, Mail, Globe } from "lucide-react";
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
  const slug = translations("/contact-us.url");

  return {
    title: translations("/contact-us.metadata.title"),
    description: translations("/contact-us.metadata.description"),
    keywords: translations.raw("/contact-us.metadata.keywords"),
    openGraph: {
      title: translations("/contact-us.metadata.title"),
      description: translations("/contact-us.metadata.description"),
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

  const currentRoute = `/contact-us`;

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

        {/* Contact Methods */}
        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-medium text-white">
            {translations(`${currentRoute}.contact_methods.title`)}
          </h2>
          
          <div className="flex flex-col gap-4">
            {/* Email Contact */}
            <div className="flex flex-col gap-3 p-4 bg-gray-900/30 border border-gray-700/50 rounded-lg">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <h3 className="text-gray-300 text-sm font-medium">
                  {translations(`${currentRoute}.contact_methods.email.title`)}
                </h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {translations(`${currentRoute}.contact_methods.email.description`)}
              </p>
              <a
                href="mailto:info@connectphone-esim.com"
                className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors duration-200 text-sm font-medium"
              >
                info@connectphone-esim.com
              </a>
            </div>

            {/* Website Contact */}
            <div className="flex flex-col gap-3 p-4 bg-gray-900/30 border border-gray-700/50 rounded-lg">
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-blue-400" />
                <h3 className="text-gray-300 text-sm font-medium">
                  {translations(`${currentRoute}.contact_methods.website.title`)}
                </h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {translations(`${currentRoute}.contact_methods.website.description`)}
              </p>
              <a
                href="https://connectphone.eu/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors duration-200 text-sm font-medium"
              >
                connectphone.eu/contact
              </a>
            </div>
          </div>
        </div>

        {/* Response Time */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-medium text-white">
            {translations(`${currentRoute}.response_time.title`)}
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            {translations(`${currentRoute}.response_time.description`)}
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
              href="/terms-of-service"
              className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors duration-200 text-sm"
            >
              {translations(`${currentRoute}.related_links.terms_of_service`)}
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

