"use client";

import { useState } from "react";
import { CiGlobe } from "react-icons/ci";
import { RxCaretDown } from "react-icons/rx";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import OutsideClickHandler from "react-outside-click-handler";
import { CircleFlagLanguage } from "react-circle-flags";
import LanguageButton from "./LanguagePopoverButton.client";
import { routing } from "@/app/i18n/routing";

//-------------------------------------------------------------------------

const LanguageChanger = () => {
  const translations = useTranslations();
  const currentLocale = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        if (isOpen) {
          setIsOpen(false);
        }
      }}
    >
      <motion.div
        onClick={handleToggle}
        className={`absolute top-0 right-0 cursor-pointer p-3 rounded-md select-none gap-2 border w-40 bg-amber-200`}
        initial={{
          backgroundColor: "rgb(31 41 55)",
          borderColor: "rgb(55 65 81)",
        }}
        animate={{
          backgroundColor: isOpen ? "rgb(17 24 39)" : "rgb(31 41 55)",
          borderColor: isOpen ? "rgb(75 85 99)" : "rgb(55 65 81)",
        }}
        whileHover={{
          backgroundColor: "rgb(17 24 39)",
          borderColor: "rgb(75 85 99)",
        }}
        transition={{
          duration: 0.2,
        }}
      >
        <div className="flex items-center justify-between ">
          <CircleFlagLanguage
            languageCode={currentLocale}
            height={15}
            width={15}
          />

          <span className="text-xs font-medium text-gray-300">
            {translations(currentLocale)}
          </span>
          <RxCaretDown size={14} className="text-gray-400" />
        </div>

        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{
            height: { duration: 0.15 },
            opacity: { duration: 0.2 },
          }}
          className="overflow-hidden w-full flex flex-col"
        >
          {isOpen && (
            <div className="flex flex-col gap-1  mt-4">
              {routing.locales.map((locale) => (
                <LanguageButton
                  key={locale}
                  locale={locale}
                  icon={locale === "en" ? "en-us" : locale}
                />
              ))}
            </div>
          )}
        </motion.div>
      </motion.div>
    </OutsideClickHandler>
  );
};

export default LanguageChanger;
