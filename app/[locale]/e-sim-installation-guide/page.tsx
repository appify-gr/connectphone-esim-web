// app/[locale]/e-sim-installation-guide/page.tsx
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Button from "@/app/components/Button";
import LanguageSelector from "@/app/components/LanguageSelector";
import { getTranslations } from "next-intl/server";
import { SupportedLocaleTypes } from "@/locales";
import { IInstallationGuide, IInstallationData } from "./types";

//---------------------------------------------------------------

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: SupportedLocaleTypes }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const translations = await getTranslations({ locale });
  const slug = translations("/e-sim-installation-guide.url");

  return {
    title: translations("/e-sim-installation-guide.metadata.title"),
    description: translations("/e-sim-installation-guide.metadata.description"),
    keywords: translations.raw("/e-sim-installation-guide.metadata.keywords"),
    openGraph: {
      title: translations("/e-sim-installation-guide.metadata.title"),
      description: translations(
        "/e-sim-installation-guide.metadata.description"
      ),
      url: `https://connectphone.eu/${locale}/${slug}`,
    },
  };
}

//-------------------------------------------------------------------

const Page = async ({
  params,
}: {
  params: Promise<{ locale: SupportedLocaleTypes }>;
}) => {
  const { locale } = await params;
  const translations = await getTranslations();

  //Choose the data translation file based on locale
  const { default: data } = (await import(`./data/${locale}.json`)) as {
    default: IInstallationData;
  };

  const currentRoute = `/e-sim-installation-guide`;

  // Create unique ids for phone brands, handling duplicates
  const phoneIds: string[] = data.map((phone, index) => {
    const baseId = phone.brand.toLowerCase().replace(/\s+/g, "-");
    const duplicateIndex = data
      .slice(0, index)
      .findIndex((p) => p.brand === phone.brand);
    return duplicateIndex !== -1 ? `${baseId}-${index}` : baseId;
  });

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

        {/* eSIM Compatibility Check */}
        <div className="flex flex-col gap-3">
          <h3 className="text-white font-medium text-xl">
            {translations(`${currentRoute}.check_device_compatibility`)}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            {translations.rich(`${currentRoute}.first_of_all`, {
              strong: (chunks) => (
                <strong className="text-gray-300">{chunks}</strong>
              ),
            })}
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            {translations.rich(`${currentRoute}.to_check_compatibility`, {
              link: (chunks) => (
                <Link
                  href="/e-sim-compatibility-guide"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors duration-200"
                >
                  {chunks}
                </Link>
              ),
            })}
          </p>
        </div>

        {/* Phone Brand Navigation */}
        <div className="flex flex-col gap-3">
          <h3 className="text-white font-medium">
            {translations(`${currentRoute}.jump_to_your_phone_brand`)}
          </h3>
          <div className="flex flex-wrap gap-2">
            {data.map((phone, index) => (
              <Link
                key={index}
                href={`#${phoneIds[index]}`}
                className="px-3 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white text-sm rounded-md transition-colors duration-200"
              >
                {phone.brand}
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800"></div>

        {/* Quick Tips */}
        <div className="flex flex-col gap-3">
          <h3 className="text-white font-medium text-xl">
            {translations(`${currentRoute}.quick_tips.title`)}
          </h3>
          <div className="flex flex-col gap-2">
            <p className="text-gray-400 text-sm">
              • {translations(`${currentRoute}.quick_tips.1`)}
            </p>
            <p className="text-gray-400 text-sm">
              • {translations(`${currentRoute}.quick_tips.2`)}
            </p>
            <p className="text-gray-400 text-sm">
              • {translations(`${currentRoute}.quick_tips.3`)}
            </p>
            <p className="text-gray-400 text-sm">
              • {translations(`${currentRoute}.quick_tips.4`)}
            </p>
          </div>
        </div>

        {/* General Steps Info */}
        <div className="flex flex-col gap-3">
          <h3 className="text-white font-medium text-xl">
            {translations(`${currentRoute}.general_steps.title`)}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            {translations(`${currentRoute}.general_steps.description`)}
          </p>
        </div>

        {/* What You Need */}
        <div className="flex flex-col gap-3">
          <h3 className="text-white font-medium text-xl">
            {translations(`${currentRoute}.what_you_need.title`)}
          </h3>
          <div className="flex flex-col gap-2">
            <p className="text-gray-400 text-sm">
              • {translations(`${currentRoute}.what_you_need.1`)}
            </p>
            <p className="text-gray-400 text-sm">
              • {translations(`${currentRoute}.what_you_need.2`)}
            </p>
            <p className="text-gray-400 text-sm">
              • {translations(`${currentRoute}.what_you_need.3`)}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800"></div>

        {/* Installation Instructions */}
        <div className="flex flex-col gap-8 sm:gap-10">
          <h2 className="text-xl font-medium text-white">
            {translations(`${currentRoute}.installation_instructions`)}
          </h2>

          <div className="flex flex-col gap-8 sm:gap-10">
            {data.map((guide: IInstallationGuide, index: number) => (
              <div
                key={index}
                id={phoneIds[index]}
                className="flex flex-col gap-6 scroll-mt-8"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    {guide.icon}
                    <h3 className="text-white font-medium text-lg">
                      {guide.brand}
                    </h3>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {guide.description}
                  </p>

                  {/* What You Need Section */}
                  <div className="flex flex-col gap-3">
                    <h4 className="text-gray-300 text-sm font-medium">
                      {translations(`${currentRoute}.what_you_need_for_device`)}
                    </h4>
                    <div className="flex flex-col gap-1">
                      {guide.whatYouNeed.map((item, itemIndex) => (
                        <p key={itemIndex} className="text-gray-400 text-sm">
                          • {item}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Installation Methods */}
                  {guide.methods.map((method, methodIndex) => (
                    <div key={methodIndex} className="flex flex-col gap-6">
                      <div className="flex flex-col gap-4">
                        <h4 className="text-gray-300 text-sm font-medium">
                          {method.title}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {method.description}
                        </p>

                        {/* Installation Steps */}
                        <div className="flex flex-col gap-4">
                          <h5 className="text-gray-200 text-xs font-medium uppercase tracking-wide">
                            {translations(`${currentRoute}.installation_steps`)}
                          </h5>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                            {method.steps.map((step, stepIndex) => (
                              <div
                                key={stepIndex}
                                className="bg-gray-900/30 border border-gray-700/50 overflow-hidden min-w-0 flex flex-col"
                              >
                                {/* Step Content */}
                                <div className="p-4 flex gap-3 h-30 flex-shrink-0">
                                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white flex items-center justify-center text-sm font-medium">
                                    {step.stepNumber}
                                  </div>
                                  <div className="flex flex-col gap-2 flex-1 min-w-0">
                                    <h6 className="text-gray-200 text-sm font-medium line-clamp-3">
                                      {step.title}
                                    </h6>
                                    <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">
                                      {step.description}
                                    </p>
                                  </div>
                                </div>

                                {/* Step Image */}
                                {step.image && (
                                  <div className="relative w-full h-180 bg-gray-800 border-t border-gray-700/50">
                                    <Image
                                      src={step.image}
                                      alt={`${guide.brand} step ${step.stepNumber}`}
                                      fill
                                      className="object-fill"
                                    />
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Manual Setup Instructions */}
                        {method.manualSetup && (
                          <div className="flex flex-col gap-4 mt-6">
                            <div className="border-t border-gray-800"></div>
                            <h5 className="text-gray-200 text-sm font-medium">
                              {method.manualSetup.title}
                            </h5>
                            <p className="text-gray-400 text-sm">
                              {method.manualSetup.description}
                            </p>

                            <div className="flex flex-col gap-4">
                              {method.manualSetup.steps.map(
                                (manualStep, manualStepIndex) => (
                                  <div
                                    key={manualStepIndex}
                                    className="flex flex-col gap-2"
                                  >
                                    <h6 className="text-gray-300 text-xs font-medium">
                                      {manualStep.description}
                                    </h6>
                                    <ol className="list-decimal list-inside flex flex-col gap-1 ml-4">
                                      {manualStep.steps.map(
                                        (step, stepIndex) => (
                                          <li
                                            key={stepIndex}
                                            className="text-gray-400 text-sm"
                                          >
                                            {step}
                                          </li>
                                        )
                                      )}
                                    </ol>
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        )}

                        {/* Important Notes */}
                        {method.importantNotes &&
                          method.importantNotes.length > 0 && (
                            <div className="flex flex-col gap-3 mt-4">
                              <h5 className="text-yellow-400 text-sm font-medium">
                                {translations(
                                  `${currentRoute}.important_notes`
                                )}
                              </h5>
                              <div className="flex flex-col gap-2 p-3 bg-yellow-900/20 border border-yellow-500/30">
                                {method.importantNotes.map(
                                  (note, noteIndex) => (
                                    <p
                                      key={noteIndex}
                                      className="text-yellow-200 text-sm"
                                    >
                                      • {note}
                                    </p>
                                  )
                                )}
                              </div>
                            </div>
                          )}
                      </div>
                    </div>
                  ))}

                  {/* General Tips */}
                  <div className="flex flex-col gap-3 mt-6">
                    <h4 className="text-gray-300 text-sm font-medium">
                      {translations(`${currentRoute}.general_tips_for_device`)}
                    </h4>
                    <div className="flex flex-col gap-1">
                      {guide.generalTips.map((tip, tipIndex) => (
                        <p key={tipIndex} className="text-gray-400 text-sm">
                          • {tip}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                {index < data.length - 1 && (
                  <div className="border-t border-gray-800"></div>
                )}
              </div>
            ))}
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
