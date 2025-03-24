import Image from 'next/image'
import Link from 'next/link'

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Our services",
};

const services = [
  {
    slug: 'one-way-taxi-service',
    title: 'One Way Taxi Service',
    image: '/images/taxi-service.jpg',
    description: 'One Way Taxi Service in Ludhiana'
  },
  {
    slug: 'wedding-car-rental',
    title: 'Wedding Car Rental',
    image: '/images/wedding-car.jpg',
    description: 'Luxury Wedding Car Rentals in Ludhiana'
  },
  {
    slug: 'pick-up-and-drop-service',
    title: 'Pick-up and Drop Service',
    image: '/images/pick-up-drop.jpg',
    description: 'Taxi Service for Pickup and Drop Service'
  }
]

export default function ServicesPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.slug} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link 
                  href={`/services/${service.slug}`}
                  className="inline-block bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600 transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 