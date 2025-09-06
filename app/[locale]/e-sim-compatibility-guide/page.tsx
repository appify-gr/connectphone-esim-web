import { ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/app/components/Button";
import { getTranslations } from "next-intl/server";
import { SupportedLocaleTypes } from "@/locales";
import LanguageChanger from "@/app/components/language_selector/LanguageChanger.client";
import { IBrandESIM, IESIMData } from "./types";

//---------------------------------------------------------------

const Page = async ({
  params,
}: {
  params: Promise<{ locale: SupportedLocaleTypes }>;
}) => {
  const { locale } = await params;
  const translations = await getTranslations();

  //Choose the data translation file based on locale
  const { default: data } = (await import(`./data/${locale}.json`)) as {
    default: IESIMData;
  };

  const currentRoute = `/e-sim-compatibility-guide`;
  //  {translations(`${currentRoute}.example_key`)}

  // Create unique ids for phone brands, handling duplicates
  const phoneIds: string[] = data.map((phone, index) => {
    const baseId = phone.brand.toLowerCase().replace(/\s+/g, "-");
    const duplicateIndex = data
      .slice(0, index)
      .findIndex((p) => p.brand === phone.brand);
    return duplicateIndex !== -1 ? `${baseId}-${index}` : baseId;
  });

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
            <h1 className="text-2xl sm:text-3xl font-medium text-white">
              {translations(`${currentRoute}.title`)}
            </h1>
            <LanguageChanger />
          </div>
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

        {/* Auto Detection CTA */}
        {/* <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-col gap-2">
              <h3 className="text-white font-medium">Automatic Detection</h3>
              <p className="text-gray-400 text-sm">
                Use our compatibility tool to automatically check your current
                device
              </p>
            </div>
            <Button href="/detect-esim" />
          </div>
        </div> */}

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
          </div>
        </div>

        {/* International Usage Info */}
        <div className="flex flex-col gap-3">
          <h3 className="text-white font-medium text-xl">
            {translations(
              `${currentRoute}.can_esim_be_used_internationally.title`
            )}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            {translations(
              `${currentRoute}.can_esim_be_used_internationally.answer`
            )}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-white font-medium text-xl">
            {translations(`${currentRoute}.is_my_phone_unlocked.title`)}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            {translations(`${currentRoute}.is_my_phone_unlocked.answer`)}
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800"></div>

        {/* Manual Instructions */}
        <div className="flex flex-col gap-8 sm:gap-10">
          <h2 className="text-xl font-medium text-white">
            {translations(`${currentRoute}.manual_check_instructions`)}
          </h2>

          <div className="flex flex-col gap-8 sm:gap-10">
            {data.map((phone: IBrandESIM, index: number) => (
              <div
                key={index}
                id={phoneIds[index]}
                className="flex flex-col gap-6 scroll-mt-8"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    {phone.icon}
                    <h3 className="text-white font-medium text-lg">
                      {phone.brand}
                    </h3>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {phone.description}
                  </p>

                  <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2 sm:gap-8">
                    {/* Steps / Methods */}
                    <div className="flex flex-col">
                      <h4 className="text-gray-300 text-sm font-medium mb-6">
                        {translations(`${currentRoute}.methods_to_check`)}
                      </h4>

                      {phone.steps.map((method, methodIndex) => (
                        <div key={methodIndex}>
                          <div className="flex flex-col gap-2 py-3">
                            <h5 className="text-gray-300 text-xs font-medium">
                              {translations(`${currentRoute}.method`)}{" "}
                              {methodIndex + 1}:
                            </h5>

                            {/* Steps list */}
                            <ol className="list-decimal list-inside flex flex-col gap-1">
                              {method.steps.map((step, stepIndex) => (
                                <li
                                  key={stepIndex}
                                  className="text-gray-400 text-sm"
                                >
                                  {step}
                                </li>
                              ))}
                            </ol>

                            {/* Images grid */}
                            {method.images && method.images.length > 0 && (
                              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
                                {method.images.map((imgUrl, imgIndex) => (
                                  <div
                                    key={imgIndex}
                                    className="relative w-full h-32 sm:h-24"
                                  >
                                    <Image
                                      src={imgUrl}
                                      alt={`Step image ${imgIndex + 1}`}
                                      fill
                                      className="object-contain rounded-md"
                                    />
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* Step description - Enhanced for prominence */}
                            {method.description && (
                              <div className="mt-3 px-3 py-2 bg-gray-900/50 border-l-2 border-blue-500/30">
                                <p className="text-gray-300 text-sm italic font-medium leading-relaxed">
                                  {method.description}
                                </p>
                              </div>
                            )}
                          </div>
                          {methodIndex < phone.steps.length - 1 && (
                            <div className="border-t border-gray-800 my-4"></div>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col gap-6">
                      {/* Compatible Models */}
                      {phone.compatibleModels &&
                        phone.compatibleModels.length > 0 && (
                          <div className="flex flex-col gap-3">
                            <h4 className="text-gray-300 text-sm font-medium">
                              {translations(
                                `${currentRoute}.compatible_models`
                              )}
                            </h4>
                            {phone.compatibleModels.map(
                              (modelGroup, groupIndex) => (
                                <div
                                  key={groupIndex}
                                  className="flex flex-col gap-2"
                                >
                                  <h5 className="text-gray-200 text-xs font-medium">
                                    {modelGroup.title}
                                  </h5>
                                  <div className="flex flex-wrap gap-2">
                                    {modelGroup.models.map(
                                      (model, modelIndex) => (
                                        <span
                                          key={modelIndex}
                                          className="px-2 py-1 bg-green-900/30 text-green-400 text-xs rounded"
                                        >
                                          {model}
                                        </span>
                                      )
                                    )}
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        )}

                      {/* Incompatible Models */}
                      {phone.incompatibleModels &&
                        phone.incompatibleModels.length > 0 && (
                          <div className="flex flex-col gap-3">
                            <h4 className="text-gray-300 text-sm font-medium">
                              {translations(
                                `${currentRoute}.not_compatible_models`
                              )}
                            </h4>
                            {phone.incompatibleModels.map(
                              (modelGroup, groupIndex) => (
                                <div
                                  key={groupIndex}
                                  className="flex flex-col gap-2"
                                >
                                  <h5 className="text-gray-200 text-xs font-medium">
                                    {modelGroup.title}
                                  </h5>
                                  <div className="flex flex-wrap gap-2">
                                    {modelGroup.models.map(
                                      (model, modelIndex) => (
                                        <span
                                          key={modelIndex}
                                          className="px-2 py-1 bg-red-900/30 text-red-400 text-xs rounded"
                                        >
                                          {model}
                                        </span>
                                      )
                                    )}
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        )}

                      {/* Compatibility */}
                      <div className="flex flex-col gap-3">
                        <h4 className="text-gray-300 text-sm font-medium">
                          {translations(`${currentRoute}.compatibility`)}
                        </h4>
                        <div className="flex flex-col">
                          {phone.compatibility.map((item, compatIndex) => (
                            <div key={compatIndex}>
                              <p className="text-gray-400 text-sm py-1">
                                • {item}
                              </p>
                              {compatIndex < phone.compatibility.length - 1 && (
                                <div className="border-t border-gray-800 my-2"></div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
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
