// app/layout.tsx
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import Footer from "@/app/components/Footer";
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
        <NextIntlClientProvider>
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
