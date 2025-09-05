import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  preload: true,
});

export const metadata: Metadata = {
  title: "ConnectPhone E-SIM",
  //description: "",
};

//--------------------------------------------------------

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
