import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
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
          <div className="lg:w-1/2">
            <span className="text-orange-500 font-medium mb-2 block">About Us</span>
            <h2 className="text-3xl font-bold mb-6">Epic Journey Cabs</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Whether you want to travel within the city or go to another city, Epic Journey Cabs gives you the benefit of booking both one way and round trip. With more than 15+ years of experience, we believe that &quot;Customer Comfort and Satisfaction&quot; is the cornerstone of our success.
              </p>
              <p>
                Our aim is to offer quality taxi rental services at a reasonable price all over India. You would only be charged for the one way trip.
              </p>
            </div>
            <Link 
              href="/about-us"
              className="inline-block mt-8 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 