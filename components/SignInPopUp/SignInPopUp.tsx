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

// SignInPopup Component
export default function SignInPopup() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div>
      <button
        onClick={openPopup}
        className="font-black text-dark-1 xl:text-base text-sm cursor-pointer"
      >
        Sign in
      </button>

      <Popup isOpen={isPopupOpen} onClose={closePopup}>
        {/* Custom Sign In Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // TODO: handle sign in logic here
            alert("Sign in form submitted");
            closePopup();
          }}
          className="flex flex-col gap-4"
        >
          <h2 className="text-xl font-semibold text-center">Sign In</h2>
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
            Sign In
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
