"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import offcanvasMenuClose from "../../public/assets/images/offcanvas-menu-close-icon.svg";
import offcanvasMenu from "../../public/assets/images/offcanvas-menu-icon.svg";
import { menuItems } from "../../utilities/data/data";

export default function OffcanvasMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            {/* Toggle Button */}
            <button
                className="focus:outline-none w-7.5 cursor-pointer flex items-center justify-center"
                onClick={() => setIsOpen(true)}
            >
                <Image src={offcanvasMenu} alt="Open Menu" className="w-7.5" />
            </button>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-dark-1/15 backdrop-blur-xs z-40"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}

            {/* Offcanvas Menu */}
            <div
                className={`fixed flex flex-col justify-between top-0 left-0 h-full w-72 bg-white shadow-lg transform p-5 ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-200 ease-in-out z-50`}
            >
                {/* Close Button */}
                <div className="p-4 flex justify-end absolute right-0 top-0">
                    <button
                        className="p-1 focus:outline-none cursor-pointer"
                        onClick={() => setIsOpen(false)}
                    >
                        <Image
                            src={offcanvasMenuClose}
                            alt="Close Menu"
                            className="w-7.5"
                        />
                    </button>
                </div>

                {/* Menu Items */}
                <div className="mt-12 flex flex-col gap-4">
                    {menuItems.map((item) => (
                        <Link
                            key={item.id}
                            href={item.url}
                            className="lg:text-base text-sm text-dark-1 font-semibold hover:text-main transition-colors duration-200"
                            onClick={() => setIsOpen(false)} // optional: close menu on link click
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>

                {/* Auth Buttons */}
            </div>
        </div>
    );
}
