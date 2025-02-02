import { notFound } from "next/navigation";
import Image from "next/image";
import OneWayTaxiBookingForm from "@/app/_components/OneWayTaxiBookingForm";
import { oneWayTaxis } from "@/data/one-way-taxis";

export default async function TaxiDestination({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const destination = oneWayTaxis[slug];

  if (!destination) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">{destination.title}</h1>
          <div className="relative h-[300px] mb-6 rounded-lg overflow-hidden">
            <Image
              src={destination.image}
              alt={destination.title}
              fill
              className="object-cover"
            />
          </div>
          <p className="text-gray-600 mb-6">{destination.description}</p>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Available Routes & Prices</h2>
            <div className="space-y-4">
              {Object.keys(destination.routes).map((route) => (
                <div key={route} className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-600 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{destination.title.split(" ")[0]} to {route}</span>
                  </div>
                  <div className="text-sm">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2">
                      Sedan: ₹{destination.routes[route].prices.sedan}
                    </span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                      SUV: ₹{destination.routes[route].prices.suv}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Book Your Taxi</h2>
            <OneWayTaxiBookingForm 
              fromCity={destination.title.split(" ")[0]} 
              availableRoutes={Object.entries(destination.routes).map(([to, data]) => ({
                to,
                prices: data.prices
              }))}
            />
          </div>
        </div>
      </div>
    </div>
  );
} 