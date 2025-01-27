import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="">
      <div className="bg-slate-300 py-12 container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Your Taxi Company</h3>
            <p className="text-sm">
              Professional taxi service providing safe and reliable transportation
              24/7.
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
              <li>Phone: (123) 456-7890</li>
              <li>Email: info@yourtaxi.com</li>
              <li>Address: 123 Taxi Street</li>
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
