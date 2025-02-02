import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaCar,
  FaWindowClose,
  FaHeadset,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Epic Journey Cabs",
  description:
    "Learn about our taxi service company with 15+ years of experience providing quality transportation services.",
};

export default function AboutUs() {
  return (
    <main>
      {/* Hero Section */}
      {/* <div className="relative bg-gray-900 text-white py-24">
        <div className="absolute inset-0 bg-[url('/images/rectangular-image-3.jpg')] bg-cover bg-center opacity-40"></div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="hover:text-yellow-400">Home</Link>
            <span>/</span>
            <span>About Us</span>
          </div>
        </div>
      </div> */}

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium">
                We have 15+ Years Business Experiences
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                Welcome to <span className="underline">Epic Journey Cabs</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Whether you want to travel within the city or go to another
                city, <span className="underline">Epic Journey Cabs</span> gives
                you the benefit of booking both one way and round trip. With
                more than 15+ years of experience, we believe that
                &ldquo;Customer Comfort and Satisfaction&rdquo; is the
                cornerstone of our success. Our aim is to offer quality taxi
                rental services at a reasonable price all over India. You would
                only be charged for the one way trip.
              </p>
              <p className="text-gray-600">
                <span className="underline">Epic Journey Cabs</span> is based in
                Ludhiana and our service details are provided as below. we
                provide return trip also along with one way if needed. We are
                the leading outdoor taxi service in Ludhiana by providing best
                service at the lowest fare. For any queries, you may contact our
                customer service.
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/images/about-us-image.jpg"
                alt="Taxi Service"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl text-yellow-500 mb-4">
                <FaCar />
              </div>
              <h3 className="text-xl font-bold mb-4">Sanitized Cabs</h3>
              <p className="text-gray-600">
                Our cars are equipped with sanitizers and driver with mask, Full
                Sanitized car rentals.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl text-yellow-500 mb-4">
                <FaWindowClose />
              </div>
              <h3 className="text-xl font-bold mb-4">No Hidden Charges</h3>
              <p className="text-gray-600">
                Prices for one-way dropping and outstation tours are fixed with
                no hidden prices.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl text-yellow-500 mb-4">
                <FaHeadset />
              </div>
              <h3 className="text-xl font-bold mb-4">24x7 Customer Support</h3>
              <p className="text-gray-600">
                Get the best of cars on rent for easy and comfortable traveling
                at pocket friendly prices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Location */}
            <div className="flex gap-4">
              <div className="text-4xl text-yellow-500">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="font-bold mb-2">Location</h4>
                <p className="text-gray-600">
                  Skycity, Gulabhgarh road Dera Bassi,
                  <br />
                  S.A.S Nagar, Punjab
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="text-4xl text-yellow-500">
                <FaPhone />
              </div>
              <div>
                <h4 className="font-bold mb-2">Phone</h4>
                <p className="text-gray-600">
                  <a href="tel:+919988563381" className="hover:text-yellow-500">
                    +91 9996179322
                  </a>
                  <br />
                  
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="text-4xl text-yellow-500">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="font-bold mb-2">Email</h4>
                <p className="text-gray-600">
                  <a
                    href="mailto:info@taxifleet.com"
                    className="hover:text-yellow-500"
                  >
                    Gurvindersoni9311@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-6">
            <a
              href="#"
              className="text-2xl text-gray-600 hover:text-yellow-500"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="text-2xl text-gray-600 hover:text-yellow-500"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-2xl text-gray-600 hover:text-yellow-500"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
