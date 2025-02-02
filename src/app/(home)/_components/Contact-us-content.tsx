import Image from "next/image";

export default function ContactUsContent() {
    return (
        <section id="about-us" className="bg-gray-50 py-16">
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Image */}
              <div className="md:w-1/2 flex-1">
                <Image
                  src="/images/about-us-image.jpg"
                  alt="About Us"
                  className="rounded-lg shadow-lg object-cover"
                  width={1000}
                  height={1000}
                />
              </div>
              {/* Content */}
              <div className="md:w-1/2 flex-1">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">About Us</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Welcome to <span className="font-bold text-blue-600">North India’s Best Taxi Rentals</span>, where your journey is our
                  priority. We specialize in offering reliable, safe, and comfortable taxi services designed for locals and tourists alike.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Whether you’re planning an adventure across the picturesque landscapes of North India or embarking on a spiritual
                  pilgrimage for the sacred <span className="font-bold text-blue-600">Chaar Dhaam Yatra</span>, our fleet is at your service.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  With a wide range of vehicles including sedans, SUVs, and luxury cars, we ensure your travel experience is unmatched. Our professional drivers and well-maintained taxis promise a smooth ride, letting you focus on enjoying the journey.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Choose Us?</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Comprehensive Tour packages, specifically designed for <span className="font-bold text-blue-600">Chaar Dhaam Yatra</span>.</li>
                  <li>Affordable rates and transparent pricing with no hidden charges.</li>
                  <li>24/7 customer support for all your travel needs.</li>
                  <li>Experienced drivers who prioritize your safety and comfort.</li>
                  <li>Clean, hygienic, and well-maintained vehicles.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      );
}