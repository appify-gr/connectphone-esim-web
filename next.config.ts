import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin("./app/i18n/request.ts");


const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://wpj67lcy6bslrzxl.public.blob.vercel-storage.com/**"),
    ],
  },
};

export default withNextIntl(nextConfig);
