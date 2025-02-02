import React from 'react';
import { tourCategories } from '@/data/tour-packages';
import TourPackageCard from '@/app/_components/TourPackageCard';

export const metadata = {
  title: 'Tour Packages - Epic Journey Cabs',
  description: 'Explore our wide range of tour packages including Amritsar, Punjab Gurudwara, Devi Darshan, Himachal, and Kashmir tours.'
};

export default function TourPackages() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Tour Packages</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover the beauty and spirituality of North India with our carefully curated tour packages.
          From the Golden Temple to the valleys of Kashmir, we offer unforgettable experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tourCategories.map((category) => (
          <TourPackageCard
            key={category.id}
            item={category}
            type="category"
          />
        ))}
      </div>
    </div>
  );
} 