"use client";
import React from "react";
import Link from "next/link";
import { VscFoldRight, VscFoldUp, VscChevronRight } from "react-icons/vsc";
import { AiOutlineClose } from "react-icons/ai";
import TheFinalOfDesigns from "../Images_component/TheFinalOfDesigns/TheFinalOfDesigns";
function ResponsiveMenu({ showMenu, toggleMenu }) {
  return (
    <>
      <div
        className={`${showMenu ? "block" : "hidden"}`}
        onClick={() => {
          toggleMenu();
        }}
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100vh",
          background: "rgba(0, 0, 0, 0.5)",
          zIndex: "10000",
          transition: "0.5s",
        }}
      ></div>
      <div
        style={{
          color: "#609521",
          zIndex: "999",
          backgroundColor: "rgb(17 47 96)",
          height: "100vh",
          zIndex: "10002",
        }}
        className={`${
          showMenu ? "left-0 " : "-left-[100%]  "
        } masko fixed bottom-0 top-0  !flex h-screen md:w-[30%] md:text-left text-center hayo flex-col justify-between bg-white  dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 lg:hidden rounded-r-xl shadow-md`}
      >
        <AiOutlineClose
          style={{ position: "absolute" }}
          className="x hover:bg-gray-700"
          onClick={() => {
            toggleMenu();
          }}
        />
        <TheFinalOfDesigns />

        <nav className="mt-12 responsivenav">
          <ul className="flex text-red-500 responsivenav">
            <li>
              <Link
                className="active"
                href="/"
                onClick={() => {
                  toggleMenu();
                }}
              >
                <VscChevronRight />
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                onClick={() => {
                  toggleMenu();
                }}
              >
                <VscChevronRight />
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={() => {
                  toggleMenu();
                }}
              >
                <VscChevronRight />
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={() => {
                  toggleMenu();
                }}
              >
                <VscChevronRight />
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default ResponsiveMenu;
