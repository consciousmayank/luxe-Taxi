import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white h-[100px] flex justify-between items-center flex-row pl-10 pr-10 shadow-sm">
      <div className="container mx-auto flex flex-row justify-between items-center">
        <Link href="/">
          <div className="rounded-3xl mr-10 flex flex-row items-center gap-2 pl-2 pr-4 bg-primary">
            <Image
              src="/images/logo.svg"
              alt="logo"
              width={100}
              height={100}
              className="w-10 h-10 "
            />
            <p className="text-primary-foreground text-2xl font-bold text-start">
              Luxe Taxi
            </p>
          </div>
        </Link>
        <nav>
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
      </div>
    </header>
  );
}
