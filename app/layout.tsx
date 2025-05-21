import Footer from "../components/Footer/Footer";
import LandingPageHeader from "../components/LandingPageHeader/LandingPageHeader";
import "./globals.css";

import { Red_Hat_Display } from "next/font/google";

const redHat = Red_Hat_Display({
    subsets: ["latin"],
    display: "swap", // Optional: use 'swap' for better performance
    variable: "--font-redhat", // Optional: for CSS variable usage
    weight: ["400", "500", "700"], // Optional: choose the weights you need
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={redHat.className}>
            <body>
                <LandingPageHeader />
                {children}
                <Footer />
            </body>
        </html>
    );
}
