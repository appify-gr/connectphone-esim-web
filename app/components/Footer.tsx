// app/components/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { headers } from "next/headers";

const Footer = async () => {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "";

  // Extract locale from pathname (e.g., /en/page -> en)
  const locale = pathname.split("/")[1] || "en";

  const translations = await getTranslations({ locale });
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="ConnectPhone E-SIM"
                width={180}
                height={100}
                className="opacity-90"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              {translations("footer.description")}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-medium text-sm">
              {translations("footer.quick_links")}
            </h3>
            <div className="flex flex-col gap-2">
              <Link
                href="/e-sim-compatibility-guide"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                {translations("footer.compatibility_guide")}
              </Link>
              <Link
                href="/e-sim-installation-guide"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                {translations("footer.installation_guide")}
              </Link>
              <Link
                href="https://connectphone.eu/"
                target="_blank"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                {translations("footer.browse_plans")}
              </Link>
            </div>
          </div>

          {/* Legal & Support */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-medium text-sm">
              {translations("footer.support")}
            </h3>
            <div className="flex flex-col gap-2">
              <Link
                href="https://connectphone.eu/contact"
                target="_blank"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                {translations("footer.contact_us")}
              </Link>
              <Link
                href="https://connectphone.eu/privacy-policy"
                target="_blank"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                {translations("footer.privacy_policy")}
              </Link>
              <Link
                href="https://connectphone.eu/terms-of-service"
                target="_blank"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                {translations("footer.terms_of_service")}
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>© {currentYear} ConnectPhone E-SIM.</span>
            <span className="hidden md:inline">|</span>
            <span className="text-gray-500 text-xs md:text-sm">
              {translations("footer.all_rights_reserved")}
            </span>
          </div>

          {/* Parent Company */}
          <div className="flex items-center gap-3">
            <span className="text-gray-500 text-xs">
              {translations("footer.part_of")}
            </span>
            <Link
              href="https://appifypc.com"
              target="_blank"
              className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity duration-200"
            >
              <Image
                src="/appify-logo.png"
                alt="APPIFY PC"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
