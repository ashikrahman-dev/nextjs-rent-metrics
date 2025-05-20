"use client";

import { useEffect, useRef, useState } from "react";

// Popup Component
const Popup = ({ isOpen, onClose, children }) => {
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
      <div ref={popupRef} className="bg-white rounded-lg max-w-md w-full p-6 relative shadow-lg">
        {children}
      </div>
    </div>
  );
};

// SignUpPopup Component
export default function SignUpPopup() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div>
      <button
        onClick={openPopup}
        className="xl:text-base text-sm xl:px-6 lg:px-5 px-4 xl:py-[14px] lg:py-3 py-2.5 bg-main rounded-lg text-white font-black transition-colors duration-200 hover:bg-main-shade hover:text-main inline-block cursor-pointer"
      >
        Sign Up
      </button>

      <Popup isOpen={isPopupOpen} onClose={closePopup}>
        {/* Custom Sign Up Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // TODO: Add real sign up logic here
            alert("Sign up form submitted");
            closePopup();
          }}
          className="flex flex-col gap-4"
        >
          <h2 className="text-xl font-semibold text-center">Create Account</h2>
          <input
            type="text"
            placeholder="Full Name"
            required
            className="border px-4 py-2 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="border px-4 py-2 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="border px-4 py-2 rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Sign Up
          </button>
        </form>

        {/* Close Button (X icon) */}
        <button
          onClick={closePopup}
          className="text-black absolute -top-4 right-2 text-xl"
        >
          &times;
        </button>
      </Popup>
    </div>
  );
}
