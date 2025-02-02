"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from 'next/navigation';
import { cars } from "@/data/cars";
import { oneWayTaxis } from "@/data/one-way-taxis";
import { tourCategories } from '@/data/tour-packages';
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return pathname === path ? "text-blue-600 font-semibold" : "hover:text-blue-600";
  };

  return (
    <header className="sticky top-0 z-50 bg-white h-[100px] flex justify-between items-center flex-row pl-4 pr-4 md:pl-10 md:pr-10 shadow-sm">
      <div className="container mx-auto flex flex-row justify-between items-center">
        <Link href="/">
          <div className="rounded-2xl mr-4 md:mr-10 flex flex-row items-center bg-primary mx-6 pr-4 pl-4 pb-2 justify-center">
            <span className="flex flex-col items-center justify-center ">
              <span className="flex flex-row items-center justify-center ">
                <p className="text-lg md:text-2xl mx-3 font-bold text-center self-center">
                  Epic
                </p>
                <Image
                  src="/images/logo.svg"
                  alt="logo"
                  width={100}
                  height={100}
                  className="w-8 h-8 md:w-10 md:h-10 object-right slide-on-hover"
                />
              </span>
              <p className="text-primary-foreground text-base md:text-base font-bold text-start  self-start">
                Journey Cabs
              </p>
            </span>
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
              <Link href="/" className={` ${isActive("/")}`}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className={` ${isActive("/about-us")}`}
              >
                About Us
              </Link>
            </li>
            <li>
              <div className="relative group">
                <Link
                  href="/car-rentals"
                  className={`flex items-center gap-1  ${isActive(
                    "/car-rentals"
                  )}`}
                >
                  Car Rentals
                </Link>
                <div className="absolute left-0 hidden group-hover:block min-w-[200px] bg-white shadow-lg rounded-md py-2 z-20">

                  {cars.map((car) => (
                    <Link key={car.slug} href={`/car-rentals/${car.slug}`} className="block px-4 py-2 hover:bg-primary hover:text-white">
                      {car.title}
                    </Link>
                  ))}


                </div>
              </div>
            </li>
            <li>
              <div className="relative group">
                <Link
                  href="/one-way-taxis"
                  className={`flex items-center gap-1 ${isActive("/one-way-taxis")}`}
                >
                  One Way Taxis
                </Link>
                <div className="absolute left-0 hidden group-hover:block min-w-[200px] bg-white shadow-lg rounded-md py-2 z-20">
                  {Object.keys(oneWayTaxis).map((destination) => (
                    <Link
                      key={destination}
                      href={`/one-way-taxis/${destination}`}
                      className="block px-4 py-2 hover:bg-primary hover:text-white"
                    >
                      {oneWayTaxis[destination].title}
                    </Link>
                  ))}
                </div>
              </div>
            </li>
            <li>
              <div className="relative group">
                <Link
                  href="/services"
                  className={`flex items-center gap-1 ${isActive("/services")}`}
                >
                  Services
                </Link>
                <div className="absolute left-0 hidden group-hover:block min-w-[200px] bg-white shadow-lg rounded-md py-2 z-20">
                  <Link
                    href="/services/one-way-taxi-service"
                    className="block px-4 py-2 hover:bg-primary hover:text-white"
                  >
                    One Way Taxi Service
                  </Link>
                  <div className="border-b border-gray-200 h-2"></div>
                  <Link
                    href="/services/wedding-car-rental"
                    className="block px-4 py-2 hover:bg-primary hover:text-white"
                  >
                    Wedding Car Rental
                  </Link>
                  <div className="border-b border-gray-200 h-2"></div>
                  <Link
                    href="/services/pick-up-and-drop-service"
                      className="block px-4 py-2 hover:bg-primary hover:text-white"
                  >
                    Pick-up and Drop Service
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <div className="relative group">
                <Link
                  href="/tour-packages"
                  className={`flex items-center gap-1 ${isActive("/tour-packages")}`}
                >
                  Tour Packages
                </Link>
                <div className="absolute left-0 hidden group-hover:block min-w-[200px] bg-white shadow-lg rounded-md py-2 z-20">
                  {tourCategories.map((category) => (
                    <Link
                      key={category.id}
                      href={`/tour-packages/${category.slug}`}
                      className="block px-4 py-2 hover:bg-primary hover:text-white"
                    >
                      {category.title}
                    </Link>
                  ))}
                </div>
              </div>
            </li>
            <li>
              <Link
                href="/contact-us"
                className="scroll-smooth transition-all duration-300 hover:text-blue-600 "
              >
                Contact Us
              </Link>
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
              <Link
                href="#"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#about-us"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={handleLinkClick}
              >
                About Us
              </Link>
            </li>

            {/* Car Rentals Dropdown */}
            <li className="relative">
              <button
                onClick={(e) => {
                  e.currentTarget.nextElementSibling?.classList.toggle(
                    "hidden"
                  );
                }}
                className="w-full px-4 py-2 flex justify-between items-center hover:bg-gray-100"
              >
                Car Rentals
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div className="hidden bg-gray-50 pl-8">

              {cars.map((car) => (
                    <Link key={car.slug} href={`/car-rentals/${car.slug}`} className="block px-4 py-2 hover:bg-primary hover:text-white" onClick={handleLinkClick}>
                      {car.title}
                    </Link>
                  ))}


                {/* <Link
                  href="/car-rentals/honda-amaze"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={handleLinkClick}
                >
                  Honda Amaze
                </Link>
                <Link
                  href="/car-rentals/toyota-etios"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={handleLinkClick}
                >
                  Toyota Etios
                </Link>
                <Link
                  href="/car-rentals/toyota-fortuner"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={handleLinkClick}
                >
                  Toyota Fortuner
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={handleLinkClick}
                >
                  Option Four
                </Link> */}
              </div>
            </li>

            {/* One Way Taxis Dropdown */}
            <li className="relative">
              <button
                onClick={(e) => {
                  e.currentTarget.nextElementSibling?.classList.toggle(
                    "hidden"
                  );
                }}
                className="w-full px-4 py-2 flex justify-between items-center hover:bg-primary hover:text-white"
              >
                One Way Taxis
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div className="hidden bg-gray-50 pl-8">
                {Object.keys(oneWayTaxis).map((destination) => (
                  <Link
                    key={destination}
                    href={`/one-way-taxis/${destination}`}
                    className="block px-4 py-2 hover:bg-primary hover:text-white"
                  >
                    {oneWayTaxis[destination].title}
                  </Link>
                ))}
              </div>
            </li>

            {/* Services Dropdown */}
            <li className="relative">
              <button
                onClick={(e) => {
                  e.currentTarget.nextElementSibling?.classList.toggle(
                    "hidden"
                  );
                }}
                className="w-full px-4 py-2 flex justify-between items-center hover:bg-primary hover:text-white"
              >
                Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div className="hidden bg-gray-50 pl-8">
                <Link
                  href="/services/one-way-taxi-service"
                  className="block px-4 py-2 hover:bg-primary hover:text-white"
                  onClick={handleLinkClick}
                >
                  One Way Taxi Service
                </Link>
                <Link
                  href="/services/wedding-car-rental"
                  className="block px-4 py-2 hover:bg-primary hover:text-white"
                  onClick={handleLinkClick}
                >
                  Wedding Car Rental
                </Link>
                <Link
                  href="/services/pick-up-and-drop-service"
                  className="block px-4 py-2 hover:bg-primary hover:text-white"
                  onClick={handleLinkClick}
                >
                  Pick-up and Drop Service
                </Link>
              </div>
            </li>

            {/* Tour Packages Dropdown */}
            <li className="relative">
              <button
                onClick={(e) => {
                  e.currentTarget.nextElementSibling?.classList.toggle(
                    "hidden"
                  );
                }}
                className="w-full px-4 py-2 flex justify-between items-center hover:bg-primary hover:text-white"
              >
                Tour Packages
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div className="hidden bg-gray-50 pl-8">
                {tourCategories.map((category) => (
                  <Link
                    key={category.id}
                    href={`/tour-packages/${category.slug}`}
                    className="block px-4 py-2 hover:bg-primary hover:text-white"
                    onClick={handleLinkClick}
                  >
                    {category.title}
                  </Link>
                ))}
              </div>
            </li>

            <li>
              <Link
                href="/contact-us"
                className="block px-4 py-2 hover:bg-primary hover:text-white"
                onClick={handleLinkClick}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
