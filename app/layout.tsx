import Footer from "../components/Footer/Footer";
import LandingPageHeader from "../components/LandingPageHeader/LandingPageHeader";
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
