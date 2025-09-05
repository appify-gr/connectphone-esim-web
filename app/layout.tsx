import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
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
      <body className={`${montserrat.className} antialiased`}>{children}</body>
    </html>
  );
};

export default RootLayout;
