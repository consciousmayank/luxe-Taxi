import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center py-4 bg-gray-100">
      <div className="w-full h-[1px] bg-black opacity-10"></div>
      <div className="py-12 container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Epic Journey Cabs</h3>
            <p className="text-sm">
              Epic Journey Cabs, offer a best taxi Service in Ludhiana. We are
              dealing with one way taxi, airport transfer, outstation & local
              tours. 24/7.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-gray-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-gray-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#booking" className="hover:text-gray-300">
                  Book a Taxi
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>Phone: +91 9996179322</li>
              {/* <li>Email: info@yourtaxi.com</li> */}
              <li>
                Address: Skycity, Gulabhgarh road Dera Bassi, S.A.S Nagar,
                Punjab
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                Twitter
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Your Taxi Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
