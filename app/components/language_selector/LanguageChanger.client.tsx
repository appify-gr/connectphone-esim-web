"use client";

import { useState } from "react";
import { CiGlobe } from "react-icons/ci";
import { RxCaretDown } from "react-icons/rx";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import OutsideClickHandler from "react-outside-click-handler";
import LanguageButton from "./LanguagePopoverButton.client";

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
        className={`absolute top-0 right-0 cursor-pointer flex flex-col items-center p-2 rounded-[20px] select-none gap-2`}
        initial={{
          backgroundColor: "transparent",
          boxShadow: "none",
          backdropFilter: "none",
        }}
        animate={{
          backgroundColor: isOpen ? "rgba(255,255,255,0.4)" : "transparent",
          boxShadow: isOpen ? "0 3px 10px 0 rgba(0,0,0,0.3)" : "none",
          backdropFilter: isOpen ? "blur(6px)" : "none",
        }}
        exit={{
          backgroundColor: "transparent",
          boxShadow: "none",
          backdropFilter: "none",
        }}
        transition={{
          duration: 0.2,
        }}
      >
        <div className="flex items-center gap-1">
          <div className="bg-slate-100/30 p-1 rounded-full shadow-lg">
            <motion.div
              animate={{ rotate: isOpen ? -90 : 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <CiGlobe size={24} color="#555555" />
            </motion.div>
          </div>
          <span className="text-xs font-semibold">
            {translations(currentLocale)}
          </span>
          <RxCaretDown size={18} />
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
          <LanguageButton locale="en" icon="en-us" />
          <LanguageButton locale="es" icon="es" />
          <LanguageButton locale="fr" icon="fr" />
          <LanguageButton locale="de" icon="de" />
        </motion.div>
      </motion.div>
    </OutsideClickHandler>
  );
};

export default LanguageChanger;
