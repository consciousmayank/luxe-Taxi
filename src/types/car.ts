export interface CarFeature {
  title: string;
  description: string;
}

export interface Car {
  id: string;
  name: string;
  slug: string;
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  pricePerKm: number;
  imagePath: string;
  capacity: number;
  dropdownLabel: string;
  features: string[];
  longDescription: string[];
  services: string[];
} 