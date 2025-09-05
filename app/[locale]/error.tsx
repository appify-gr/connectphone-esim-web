"use client";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

type Props = {
  error: Error;
  reset(): void;
};

export default function Error({ error }: Props) {
  const translations = useTranslations();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return translations("error_message");
}
