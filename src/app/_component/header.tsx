"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white h-[100px] flex justify-between items-center flex-row pl-4 pr-4 md:pl-10 md:pr-10 shadow-sm">
      <div className="container mx-auto flex flex-row justify-between items-center">
        <Link href="/">
          <div className="rounded-3xl mr-4 md:mr-10 flex flex-row items-center gap-2 pl-2 pr-4 bg-primary">
            <Image
              src="/images/logo.svg"
              alt="logo"
              width={100}
              height={100}
              className="w-8 h-8 md:w-10 md:h-10"
            />
            <p className="text-primary-foreground text-lg md:text-2xl font-bold text-start">
              Luxe Taxi
            </p>
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex justify-around items-center flex-row gap-8">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about-us" className="scroll-smooth transition-all duration-300 hover:text-blue-600">About Us</a>
            </li>
            <li>
              <div className="relative group">
                <a href="#taxi-details" className="flex items-center gap-1">
                  Car Rentals
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </a>
                <div className="absolute left-0 hidden group-hover:block min-w-[200px] bg-white shadow-lg rounded-md py-2 z-20">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option One</a>
                  <div className="border-b border-gray-200 h-2"></div>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option Two</a>
                  <div className="border-b border-gray-200 h-2"></div>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option Three</a>
                  <div className="border-b border-gray-200 h-2"></div>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option Four</a>
                </div>
              </div>
            </li>
            <li>
            <div className="relative group">
                <a href="#" className="flex items-center gap-1">
                  One Way Taxis
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </a>
                <div className="absolute left-0 hidden group-hover:block min-w-[200px] bg-white shadow-lg rounded-md py-2 z-20">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option One</a>
                  <div className="border-b border-gray-200 h-2"></div>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option Two</a>
                  <div className="border-b border-gray-200 h-2"></div>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option Three</a>
                  <div className="border-b border-gray-200 h-2"></div>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option Four</a>
                  <div className="border-b border-gray-200 h-2"></div>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option Five</a>
                  <div className="border-b border-gray-200 h-2"></div>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option Six</a>
                  <div className="border-b border-gray-200 h-2"></div>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option Seven</a>
                  <div className="border-b border-gray-200 h-2"></div>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option Eight</a>
                </div>
              </div>
            </li>
            <li>
            <div className="relative group">
                <a href="#" className="flex items-center gap-1">
                  Services
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </a>
                <div className="absolute left-0 hidden group-hover:block min-w-[200px] bg-white shadow-lg rounded-md py-2 z-20">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option One</a>
                  <div className="border-b border-gray-200 h-2"></div>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option Two</a>
                  <div className="border-b border-gray-200 h-2"></div>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option Three</a>
                  <div className="border-b border-gray-200 h-2"></div>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option Four</a>
                  <div className="border-b border-gray-200 h-2"></div>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option Five</a>
                </div>
              </div>
            </li>
            <li>
            <div className="relative group">
                <a href="#" className="flex items-center gap-1">
                  Tour Packages
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </a>
                <div className="absolute left-0 hidden group-hover:block min-w-[200px] bg-white shadow-lg rounded-md py-2 z-20">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option One</a>
                  <div className="border-b border-gray-200 h-2"></div>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option Two</a>
                  <div className="border-b border-gray-200 h-2"></div>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option Three</a>
                  <div className="border-b border-gray-200 h-2"></div>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option Four</a>
                  <div className="border-b border-gray-200 h-2"></div>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option Five</a>
                  <div className="border-b border-gray-200 h-2"></div>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option Six</a>
                  <div className="border-b border-gray-200 h-2"></div>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option Seven</a>
                  <div className="border-b border-gray-200 h-2"></div>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option Eight</a>
                  <div className="border-b border-gray-200 h-2"></div>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option Nine</a>
                  <div className="border-b border-gray-200 h-2"></div>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option Ten</a>
                </div>
              </div>
            </li>
            <li>
              <a href="#contact-us" className="scroll-smooth transition-all duration-300 hover:text-blue-600">Contact Us</a>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden absolute top-[100px] left-0 right-0 bg-white shadow-lg`}
        >
          <ul className="flex flex-col py-4">
            <li>
              <a 
                href="#" 
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={handleLinkClick}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about-us" 
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={handleLinkClick}
              >
                About Us
              </a>
            </li>
            
            {/* Car Rentals Dropdown */}
            <li className="relative">
              <button
                onClick={(e) => {
                  e.currentTarget.nextElementSibling?.classList.toggle("hidden");
                }}
                className="w-full px-4 py-2 flex justify-between items-center hover:bg-gray-100"
              >
                Car Rentals
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>
              <div className="hidden bg-gray-50 pl-8">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100" onClick={handleLinkClick}>Option One</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100" onClick={handleLinkClick}>Option Two</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100" onClick={handleLinkClick}>Option Three</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100" onClick={handleLinkClick}>Option Four</a>
              </div>
            </li>

            {/* One Way Taxis Dropdown */}
            <li className="relative">
              <button
                onClick={(e) => {
                  e.currentTarget.nextElementSibling?.classList.toggle("hidden");
                }}
                className="w-full px-4 py-2 flex justify-between items-center hover:bg-gray-100"
              >
                One Way Taxis
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>
              <div className="hidden bg-gray-50 pl-8">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100" onClick={handleLinkClick}>Option One</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100" onClick={handleLinkClick}>Option Two</a>
              </div>
            </li>

            {/* Services Dropdown */}
            <li className="relative">
              <button
                onClick={(e) => {
                  e.currentTarget.nextElementSibling?.classList.toggle("hidden");
                }}
                className="w-full px-4 py-2 flex justify-between items-center hover:bg-gray-100"
              >
                Services
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>
              <div className="hidden bg-gray-50 pl-8">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100" onClick={handleLinkClick}>Option One</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100" onClick={handleLinkClick}>Option Two</a>
              </div>
            </li>

            {/* Tour Packages Dropdown */}
            <li className="relative">
              <button
                onClick={(e) => {
                  e.currentTarget.nextElementSibling?.classList.toggle("hidden");
                }}
                className="w-full px-4 py-2 flex justify-between items-center hover:bg-gray-100"
              >
                Tour Packages
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>
              <div className="hidden bg-gray-50 pl-8">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100" onClick={handleLinkClick}>Option One</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100" onClick={handleLinkClick}>Option Two</a>
              </div>
            </li>

            <li>
              <a 
                href="#contact-us" 
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={handleLinkClick}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
