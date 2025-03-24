import Image from "next/image";
import Link from "next/link";
import { oneWayTaxis } from "@/data/one-way-taxis";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "One Way Taxi Services | Epic Journey Cabs",
  description: "Book your one-way taxi for outstation trips to various destinations",
};

export default function OneWayTaxis() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">One Way Taxi Services</h1>
        <p className="text-gray-600">Book your one-way taxi for outstation trips to various destinations</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.keys(oneWayTaxis).map((destination) => (
          <div key={destination} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Link href={`/one-way-taxis/${destination}`}>
              <div className="relative h-48">
                <Image
                  src={oneWayTaxis[destination].image}
                  alt={oneWayTaxis[destination].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{oneWayTaxis[destination].title}</h3>
                <p className="text-gray-600">{Object.keys(oneWayTaxis[destination].routes).length} routes available</p>
                <div className="mt-4">
                  <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                    Book Now
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
