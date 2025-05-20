

import LandingPageHeader from "../components/LandingPageHeader/LandingPageHeader.tsx";
import Footer from "../components/Footer/Footer.tsx";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LandingPageHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
