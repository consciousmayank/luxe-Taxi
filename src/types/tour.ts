export interface TourPackage {
  id: string;
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  duration: string;
  price: number;
  highlights: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
  inclusions: string[];
  exclusions: string[];
  packageType: 'amritsar-packages' | 'punjab-gurudwara' | 'devi-darshan' | 'himachal' | 'kashmir';
  numberOfPackages?: number;
  carDetails: CarDetails[];
}

export type TourPackageCategory = {
  id: string;
  title: string;
  slug: string;
  description: string;
  imageUrl: string;
  numberOfPackages: number;
} 

export type CarDetails = {
  carName: string;
  price: number;
}