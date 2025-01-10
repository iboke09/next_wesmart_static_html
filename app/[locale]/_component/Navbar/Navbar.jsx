"use client";
import React, { useState, useEffect, useRef } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import DarkMode from "../DarkMode/DarkMode";
import { CldImage } from "next-cloudinary";
import TheFinalOfDesigns from "../Images_component/TheFinalOfDesigns/TheFinalOfDesigns";
import { Link } from "@/i18n/routing";
import { FiGlobe, FiCheck } from "react-icons/fi";
import { useRouter, usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

function Navbar({ active }) {
  const t = useTranslations("HomePage");
  const [showMenu, setShowMenu] = useState(false);
  const currentPath = usePathname();
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const pages = [
    { name: t("home"), path: "/" },
    { name: t("services"), path: "/services" },
    { name: t("aboutNav"), path: "/about" },
    { name: t("contact"), path: "/contact" },
  ];

  const isActive = (path) => {
    const lastSegment = currentPath.split('/').filter(Boolean).pop();
    const targetSegment = path.split('/').filter(Boolean).pop();
    return lastSegment === targetSegment;
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const router = useRouter();
  const pathname = usePathname();
  const popupRefDesktop = useRef(null);
  const popupRefMobile = useRef(null);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (language) => {
    const newLocale = language === "English" ? "en" : "tr";
    const segments = pathname.split("/").filter(Boolean);

    if (segments[0] === "en" || segments[0] === "tr") {
      segments[0] = newLocale;
    } else {
      segments.unshift(newLocale);
    }

    const newPath = `/${segments.join("/")}`;
    router.push(newPath);
  };

  useEffect(() => {
    const currentLanguage = pathname.startsWith("/tr") ? "Turkish" : "English";
    setSelectedLanguage(currentLanguage);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        (popupRefDesktop.current && !popupRefDesktop.current.contains(event.target)) &&
        (popupRefMobile.current && !popupRefMobile.current.contains(event.target))
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };  
  }, []);

  return (
    <>
      <header className="header">
        <div className="container shadow-2xl" style={{ height: "85px" }}>
          <Link href="/">
            <TheFinalOfDesigns />
          </Link>
          <nav className="yami lg:block">
            <ul>
              {pages.map((page, index) => (
                <li key={index}>
                  <Link
                    href={page.path}
                    alt={page.name}
                    className={isActive(page.path) ? "active" : ""}
                  >
                    {page.name}
                  </Link>
                </li>
              ))}

              {/* Desktop Language Selector */}
              <div
                className="relative ihfa-edek"
                ref={popupRefDesktop}
                style={{ zIndex: "1001" }}
              >
                <button
                  onClick={togglePopup}
                  className="p-2 rounded-full text-gray-400 transition-colors focus:outline-none fochov"
                >
                  <FiGlobe size={20} />
                </button>
                {isOpen && (
                  <div
                    className="absolute top-full right-0 mt-2 w-48 text-white rounded-lg shadow-lg border border-gray-700"
                    style={{ backgroundColor: "#00152e" }}
                  >
                    <div className="p-3 font-semibold text-gray-300">
                      Language
                    </div>
                    <hr className="border-gray-700" />
                    <ul className="p-3 space-y-2" style={{ display: "block", height: "auto" }}>
                      <li
                        onClick={() => selectLanguage("English")}
                        className={`flex items-center py-2 px-3 rounded-md cursor-pointer transition-colors ${selectedLanguage === "English" ? "bg-blue-600 text-white font-bold" : "hover:bg-blue-600"}`}
                      >
                        {selectedLanguage === "English" && <FiCheck size={16} className="text-black mr-2" />}
                        English
                      </li>
                      <li
                        onClick={() => selectLanguage("Turkish")}
                        className={`flex items-center py-2 px-3 rounded-md cursor-pointer transition-colors ${selectedLanguage === "Turkish" ? "bg-blue-600 text-white font-bold" : "hover:bg-blue-600"}`}
                      >
                        {selectedLanguage === "Turkish" && <FiCheck size={16} className="text-black mr-2" />}
                        Turkish
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Dark Mode */}
              <div className="maskdarkapp">
                <DarkMode />
              </div>
            </ul>
          </nav>

          {/* Mobile Language Selector */}
          <div className="lg:hidden flex items-center">
            <div
              className="relative"
              ref={popupRefMobile}
              style={{ zIndex: "1001" }}
            >
              <button
                onClick={togglePopup}
                className="p-2 rounded-full text-gray-400 transition-colors focus:outline-none fochov"
              >
                <FiGlobe size={20} />
              </button>
              {isOpen && (
                <div
                  className="absolute top-full right-0 mt-2 w-48 text-white rounded-lg shadow-lg border border-gray-700"
                  style={{ backgroundColor: "#00152e" }}
                >
                  <div className="p-3 font-semibold text-gray-300">
                    Language
                  </div>
                  <hr className="border-gray-700" />
                  <ul className="p-3 space-y-2" style={{ display: "block", height: "auto" }}>
                    <li
                      onClick={() => selectLanguage("English")}
                      className={`flex items-center py-2 px-3 rounded-md cursor-pointer transition-colors ${selectedLanguage === "English" ? "bg-blue-600 text-white font-bold" : "hover:bg-blue-600"}`}
                    >
                      {selectedLanguage === "English" && <FiCheck size={16} className="text-black mr-2" />}
                      English
                    </li>
                    <li
                      onClick={() => selectLanguage("Turkish")}
                      className={`flex items-center py-2 px-3 rounded-md cursor-pointer transition-colors ${selectedLanguage === "Turkish" ? "bg-blue-600 text-white font-bold" : "hover:bg-blue-600"}`}
                    >
                      {selectedLanguage === "Turkish" && <FiCheck size={16} className="text-black mr-2" />}
                      Turkish
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Mobile Menu Icon */}
            {showMenu ? (
              <HiMenuAlt1
                style={{ color: "white" }}
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                style={{ color: "white" }}
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </header>

      <ResponsiveMenu toggleMenu={toggleMenu} showMenu={showMenu} setShowMenu={setShowMenu} />
    </>
  );
}

export default Navbar;
