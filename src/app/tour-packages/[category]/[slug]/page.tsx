import React from 'react';
import Image from 'next/image';
import { getTourPackageBySlug, tourPackages } from '@/data/tour-packages';
import TourBookingForm from '@/app/_components/TourBookingForm';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { FormData } from '@/types/tourbookingform';

interface Props {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}


async function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getTourPackageData(slug: string) {
  await delay(1); // Minimal delay to make it truly async
  return getTourPackageBySlug(slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tourPackage = await getTourPackageData(slug);
  
  if (!tourPackage) {
    return {
      title: 'Not Found',
      description: 'The requested tour package was not found'
    };
  }

  return {
    title: `${tourPackage.title} - Epic Journey Cabs`,
    description: tourPackage.description
  };
}

export function generateStaticParams() {
  return tourPackages.map((tourPackage) => ({
    category: tourPackage.packageType,
    slug: tourPackage.slug,
  }));
}

export default async function TourPackageDetail({ params }: Props) {
  const { slug } = await params;
  const tourPackage = await getTourPackageData(slug);
  
  if (!tourPackage) {
    notFound();
  }

  async function handleBookingSubmit(data: FormData) {
    'use server';
    // TODO: Implement booking submission logic
    console.log('Booking submitted:', data);
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Tour Details */}
        <div className="lg:col-span-2">
          <div className="relative h-[400px] w-full mb-6">
            <Image
              src={tourPackage.imageUrl}
              alt={tourPackage.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <h1 className="text-3xl font-bold mb-4">{tourPackage.title}</h1>
          <div className="text-gray-600 mb-6 space-y-4">
            {tourPackage.description}
          </div>

          {tourPackage.highlights.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Tour Highlights</h2>
              <ul className="list-disc list-inside space-y-2">
                {tourPackage.highlights.map((highlight, index) => (
                  <li key={index} className="text-gray-600">{highlight}</li>
                ))}
              </ul>
            </div>
          )}

          {tourPackage.itinerary.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Itinerary</h2>
              <div className="space-y-4">
              {tourPackage.itinerary.map((day) => (
                <div key={day.day} className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold mb-2">
                    Day {day.day}: {day.title}
                  </h3>
                  <p className="text-gray-600 whitespace-pre-line">{day.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Inclusions</h2>
              <ul className="list-disc list-inside space-y-2">
                {tourPackage.inclusions.map((item, index) => (
                  <li key={index} className="text-gray-600">{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Exclusions</h2>
              <ul className="list-disc list-inside space-y-2">
                {tourPackage.exclusions.map((item, index) => (
                  <li key={index} className="text-gray-600">{item}</li>
                ))}
              </ul>
            </div>
          </div> */}
        </div>

        {/* Booking Form */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            {tourPackage.carDetails.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="mb-4">
                <h3 className="text-2xl font-semibold mb-2">Vehicle Details</h3>

                {tourPackage.carDetails.length > 0 && (
                  <div className="mb-4">
                    {tourPackage.carDetails.map((car) => (
                      <div key={car.carName}>
                        <p className="text-3xl text-primary font-bold">
                          ₹{car.price.toLocaleString('en-IN')}
                        </p>
                        <p className="text-gray-500">{car.carName}</p>
                      </div>
                    ))}
                  </div>
                )}
                
              </div>
            </div>
            )}
            
            <TourBookingForm
              tourTitle={tourPackage.title}
              onSubmit={handleBookingSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
} 