import Image from "next/image";
import Link from "next/link";
import { FaCar, FaRupeeSign } from "react-icons/fa";
import type { Metadata } from "next";
import BookingForm from "@/app/_components/BookingForm";
import { getCar, getAllCarSlugs } from "@/data/cars";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = await params;
  const car = getCar(slug.slug);

  if (!car) {
    return {
      title: "Car Not Found",
      description: "The requested car could not be found.",
    };
  }

  return {
    title: car.metaTitle,
    description: car.metaDescription,
  };
}

export async function generateStaticParams() {
  const slugs = getAllCarSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default async function CarPage({ params }: Props) {
  const slug = await params;
  const car = getCar(slug.slug);

  if (!car) {
    notFound();
  }

  return (
    <main>
      {/* Content Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h1 className="text-3xl font-bold mb-6">{car.title}</h1>

                {/* Price Tag */}
                <div className="inline-flex items-center gap-1 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-medium mb-6">
                  <FaRupeeSign />
                  <span>{car.pricePerKm} Per Km</span>
                </div>

                {/* Car Image */}
                <div className="relative h-[400px] mb-6">
                  <Image
                    src={car.imagePath}
                    alt={`${car.name} One Way Taxi`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>

                {/* Description */}
                <div className="prose max-w-none">
                  {car.longDescription.map((paragraph, index) => (
                    <p key={index} className="text-gray-600 mb-4">
                      {paragraph}
                    </p>
                  ))}

                  <p className="text-gray-600">
                    Available services with {car.name}:
                  </p>
                  <ul className="list-disc pl-5 text-gray-600">
                    {car.services.map((service, index) => (
                      <li key={index}>{service}</li>
                    ))}
                  </ul>
                </div>

                {/* Booking Form */}
                <div className="mt-8">
                  <h2 className="text-2xl font-bold mb-6">Book Now</h2>
                  <BookingForm defaultCar={car.name} />
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Car Rentals List */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-xl font-bold mb-4">Car Rentals</h2>
                <div className="border-b-2 border-yellow-500 w-12 mb-4"></div>

                <div>
                  {getAllCarSlugs().map(async (slug) => (
                    <li 
                      key={slug}
                      className={`${
                        (await params).slug === slug
                          ? "text-yellow-500 font-medium"
                          : "text-gray-600 hover:text-yellow-500"
                      } flex items-center gap-2`}
                    >
                      <FaCar className="text-gray-400" />
                      <Link href={`/car-rentals/${slug}`}>{getCar(slug)?.title}</Link>
                    </li>
                  ))}
                </div>

                {/* <ul className="space-y-2">
                  <li
                    className={`${
                      params.slug === "toyota-etios"
                        ? "text-yellow-500 font-medium"
                        : "text-gray-600 hover:text-yellow-500"
                    }`}
                  >
                    <Link href="/car-rentals/toyota-etios">Toyota Etios</Link>
                  </li>
                  <li className="text-gray-600 hover:text-yellow-500">
                    <Link href="/car-rentals/swift-dzire">Swift Dzire</Link>
                  </li>
                  <li className="text-gray-600 hover:text-yellow-500">
                    <Link href="/car-rentals/innova">Toyota Innova</Link>
                  </li>
                  <li className="text-gray-600 hover:text-yellow-500">
                    <Link href="/car-rentals/innova-crysta">Innova Crysta</Link>
                  </li>
                  <li className="text-gray-600 hover:text-yellow-500">
                    <Link href="/car-rentals/mahindra-marazzo">
                      Mahindra Marazzo
                    </Link>
                  </li>
                  <li className="text-gray-600 hover:text-yellow-500">
                    <Link href="/car-rentals/fortuner">Toyota Fortuner</Link>
                  </li>
                  <li className="text-gray-600 hover:text-yellow-500">
                    <Link href="/car-rentals/12-seater-tempo-traveller">
                      12 Seater Tempo Traveller
                    </Link>
                  </li>
                  <li className="text-gray-600 hover:text-yellow-500">
                    <Link href="/car-rentals/17-seater-tempo-traveller">
                      17 Seater Tempo Traveller
                    </Link>
                  </li>
                </ul> */}
              </div>

              {/* Quick Links */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-4">Quick Links</h2>
                <div className="border-b-2 border-yellow-500 w-12 mb-4"></div>
                <div className="space-y-4">
                  {/* One Way Taxi */}
                  <div>
                    <h3 className="font-medium mb-2">One Way Taxi</h3>
                    <ul className="space-y-1 text-sm">
                      <li className="text-gray-600 hover:text-yellow-500">
                        <Link href="/one-way-taxi/ludhiana-one-way-taxi">
                          Ludhiana One Way Taxi
                        </Link>
                      </li>
                      <li className="text-gray-600 hover:text-yellow-500">
                        <Link href="/one-way-taxi/delhi-one-way-taxi">
                          Delhi One Way Taxi
                        </Link>
                      </li>
                      <li className="text-gray-600 hover:text-yellow-500">
                        <Link href="/one-way-taxi/chandigarh-one-way-taxi">
                          Chandigarh One Way Taxi
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Services */}
                  <div>
                    <h3 className="font-medium mb-2">Services</h3>
                    <ul className="space-y-1 text-sm">
                      <li className="text-gray-600 hover:text-yellow-500">
                        <Link href="/services/one-way-taxi-service">
                          One Way Taxi Service
                        </Link>
                      </li>
                      <li className="text-gray-600 hover:text-yellow-500">
                        <Link href="/services/wedding-car-rental">
                          Wedding Car Rental
                        </Link>
                      </li>
                      <li className="text-gray-600 hover:text-yellow-500">
                        <Link href="/services/pick-up-and-drop-service">
                          Pick-up and Drop Service
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Tour Packages */}
                  <div>
                    <h3 className="font-medium mb-2">Tour Packages</h3>
                    <ul className="space-y-1 text-sm">
                      <li className="text-gray-600 hover:text-yellow-500">
                        <Link href="/tour-packages/amritsar-packages">
                          Amritsar Packages
                        </Link>
                      </li>
                      <li className="text-gray-600 hover:text-yellow-500">
                        <Link href="/tour-packages/himachal-tour-packages">
                          Himachal Tour Packages
                        </Link>
                      </li>
                      <li className="text-gray-600 hover:text-yellow-500">
                        <Link href="/tour-packages/jammu-kashmir-tours">
                          Jammu & Kashmir Tours
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
