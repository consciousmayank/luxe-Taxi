import { notFound } from "next/navigation";
import Image from "next/image";
import BookingForm from "@/app/_components/ServicesBookingForm";

const services = {
  "one-way-taxi-service": {
    title: "One Way Taxi Service",
    image: "/images/taxi.jpg",
    description: `Epic Journey Cabs Provides Ludhiana One Way Taxi Rental Service. Book One Way Taxi from Ludhiana to Outstation & Cheapest one way car rental deals, Book Oneway, Round Trip. Taxi hire for Ludhiana to Himachal Tour, Round Trip Taxi in Ludhiana. Epic Journey Cabs is the best one way or round trip taxi provider in Ludhiana.

We are dealing with budgeted and luxury car rentals. We have an own fleet of Toyota Innova, Innova Crysta, Toyota Etios, Swift Dzire, Force Tempo Traveller, in a budgeted or economic car and in Luxury, we offer Fortuner for Business or leisure trips to Ludhiana. Book Ludhiana to Outstation One Way Taxi.`,
  },
  "wedding-car-rental": {
    title: "Wedding Car Rental",
    image: "/images/fortuner-3.jpg",
    description: `We are the Punjab's fastest growing wedding car hire service offering a sensational array of vehicles, all available for hire at ultra-low rates. With our expertise in the provision of wedding day transport and our dedication to providing an outstanding level of customer service, we guarantee to ensure your wedding car hire service is second to none.

Epic Journey Cabs Car Rentals service tends to make your wedding day a memorable experience of your life. Make your special day a part of the extravaganza show through a luxurious wedding car hire service.

Nowadays, cars have become an integral part of everyone's life. When someone needs cars for their wedding occasion, they mean to have cars with the most amount of luxury. To fulfill your desire, Epic Journey Cabs provides luxury cars with maximum possible amounts of pre-installed as well as custom installed luxurious features.`,
  },
  "pick-up-and-drop-service": {
    title: "Pick-up and Drop Service",
    image: "/images/pick-up-drop1.jpg",
    description:
      "Professional pick-up and drop service for all your transportation needs. Available 24/7 with reliable and comfortable vehicles.",
  },
};

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services[slug as keyof typeof services];

  if (!service) {
    notFound();
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">{service.title}</h1>

          <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="prose max-w-none mb-12">
            {service.description.split("\n\n").map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">
              Book {service.title}
            </h2>
            <BookingForm service={service.title} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({
    slug,
  }));
}
