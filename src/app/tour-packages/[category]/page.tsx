import React from 'react';
import { getTourPackagesByCategory, tourCategories } from '@/data/tour-packages';
import TourPackageCard from '@/app/_components/TourPackageCard';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

interface Props {
  // Promise<{ "join-now-slug": string }>;
  params: Promise<{
    category: string;
  }>;
}

async function getCategoryBySlug(slug: string) {
  return tourCategories.find(cat => cat.slug === slug);
}

async function getPackagesByCategory(categorySlug: string) {
  return getTourPackagesByCategory(categorySlug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const actualCategory = await getCategoryBySlug(category);
  
  if (!actualCategory) {
    return {
      title: 'Not Found',
      description: 'The requested tour category was not found'
    };
  }

  return {
    title: `${actualCategory.title} - Epic Journey Cabs`,
    description: actualCategory.description
  };
}

export function generateStaticParams() {
  return tourCategories.map((category) => ({
    category: category.slug,
  }));
}

export default async function TourCategoryPage({ params }: Props) {
  const { category } = await params;
  const actualCategory = await getCategoryBySlug(category);
  
  if (!actualCategory) {
    notFound();
  }

  const packages = await getPackagesByCategory(actualCategory.slug);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{actualCategory.title}</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {actualCategory.description}
        </p>
      </div>

      {packages.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((tourPackage) => (
            <TourPackageCard
              key={tourPackage.id}
              item={tourPackage}
              type="package"
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600">
            No packages available in this category at the moment.
            Please check back later or contact us for custom tour arrangements.
          </p>
        </div>
      )}
    </div>
  );
} 