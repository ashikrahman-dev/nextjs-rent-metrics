import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/images/logo.svg";
import { menuItems } from "../../utilities/data/data";
import OffcanvasMenu from "../OffcanvasMenu/OffcanvasMenu";

export default function LandingPageHeader() {
    return (
        <header className="bg-white xl:py-7.5 lg:py-6 md:py-5 py-4 xl:px-7.5 lg:px-6 md:px-5 px-4 shadow-[0px_10px_20px_0px_rgba(0,0,0,0.03)]">
            <div className="container sm:grid flex justify-between items-center sm:grid-cols-12 gap-6 mx-auto">
                {/* Logo */}
                <Link href="/" className="xl:col-span-2 sm:col-span-6">
                    <Image
                        src={logo}
                        alt="Banner Image"
                        className="xl:max-w-[180px] lg:max-w-[150px] md:max-w-[140px] max-w-32"
                    />
                </Link>

                {/* Menu */}
                <div className="lg:col-span-7 md:col-span-6 text-center xl:gap-9 lg:gap-6 gap-4 justify-center hidden xl:flex">
                    {menuItems.map((item) => (
                        <Link
                            key={item.id}
                            href={item.url}
                            className="xl:text-lg lg:text-base text-sm text-dark-1 font-semibold hover:text-main transition-colors duration-200"
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>

                {/* Back to Dashboard Button */}
                <div className="xl:col-span-3 col-span-6 xl:gap-8 lg:gap-6 gap-4 items-center justify-end hidden md:flex">
                    <Link
                        href="/dashboard"
                        className="font-black text-dark-1 xl:text-base text-sm cursor-pointer"
                    >
                        Sign in
                    </Link>
                    <Link
                        href="/dashboard"
                        className="xl:text-base text-sm xl:px-6 lg:px-5 px-4 xl:py-[14px] lg:py-3 py-2.5 bg-main rounded-lg text-white font-black transition-colors duration-200 hover:bg-main-shade hover:text-main inline-block cursor-pointer"
                    >
                        Sign up
                    </Link>
                </div>

                {/* Offcanvas Menu */}
                <div className="md:hidden sm:col-span-6 flex justify-end">
                    <OffcanvasMenu />
                </div>
            </div>
        </header>
    );
}
