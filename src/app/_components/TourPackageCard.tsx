import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TourPackage, TourPackageCategory } from '@/types/tour';

interface TourPackageCardProps {
  item: TourPackage | TourPackageCategory;
  type: 'package' | 'category';
}

const TourPackageCard: React.FC<TourPackageCardProps> = ({ item, type }) => {
  const href = type === 'package' 
    ? `/tour-packages/${(item as TourPackage).packageType}/${item.slug}`
    : `/tour-packages/${item.slug}`;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="relative h-48 w-full">
        <Image
          src={item.imageUrl}
          alt={item.title}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{item.description}</p>
        
        {/* {type === 'package' && (
          <div className="mb-4">
            <p className="text-primary font-semibold">
              ₹{(item as TourPackage).price.toLocaleString('en-IN')}
            </p>
            <p className="text-sm text-gray-500">
              {(item as TourPackage).duration}
            </p>
          </div>
        )} */}

        {type === 'category' && (
          <p className="text-sm text-gray-500 mb-4">
            {(item as TourPackageCategory).numberOfPackages} packages available
          </p>
        )}

        <Link 
          href={href}
          className="inline-block bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark transition-colors duration-200"
        >
          {type === 'package' ? 'View Details' : 'Explore Packages'}
        </Link>
      </div>
    </div>
  );
};

export default TourPackageCard; 