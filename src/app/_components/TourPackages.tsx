import { tourPackages } from '@/data/tour-packages';
import Image from 'next/image';
import Link from 'next/link';

// const tourPackages = [
//   {
//     name: 'Ludhiana with Amritsar 3 Days Tour',
//     description: 'Ludhiana with Amritsar 3 Days Tour',
//     image: '/images/golden-temple-1.jpg',
//     link: '/tour-packages/amritsar-packages/ludhiana-with-amritsar-3-days-tour'
//   },
//   {
//     name: 'Full Day Tour Amritsar',
//     description: '1 Day Sightseeing Tour in Amritsar',
//     image: '/images/amritsar-tours3.jpg',
//     link: '/tour-packages/amritsar-packages/full-day-tour-amritsar'
//   },
//   {
//     name: 'Ludhiana Dalhousie Dharamshala Ludhiana',
//     description: 'Ludhiana - Dalhousie Dharamshala Tour Package',
//     image: '/images/dalhousie-31.jpg',
//     link: '/tour-packages/himachal-tour-packages/ludhiana-dalhousie-dharamshala-ludhiana'
//   },
//   {
//     name: 'Ludhiana to Dharamshala (Mcleodganj) Tour',
//     description: 'Ludhiana Dharamshala Mcleodganj Tour',
//     image: '/images/mcleodganj.2_.jpg',
//     link: '/tour-packages/himachal-tour-packages/ludhiana-to-dharamshala-mcleodganj-tour'
//   },
//   {
//     name: 'Ludhiana Manali to Shimla Tour',
//     description: 'Ludhiana to Manali Shimla Taxi Service',
//     image: '/images/shimla5.jpg',
//     link: '/tour-packages/himachal-tour-packages/ludhiana-manali-to-shimla-tour'
//   },
//   {
//     name: 'Ludhiana Shimla Manali Dharamshala',
//     description: 'Shimla Manali Dharamshala Tour from Ludhiana',
//     image: '/images/dharamshala-images4.jpg',
//     link: '/tour-packages/himachal-tour-packages/ludhiana-shimla-manali-dharamshala'
//   },
//   {
//     name: 'Ludhiana to Shimla Manali Tour',
//     description: 'Shimla Manali 4 Nights Tour',
//     image: '/images/shimla-taxi2.jpg',
//     link: '/tour-packages/himachal-tour-packages/ludhiana-to-shimla-manali-tour'
//   },
//   {
//     name: 'Ludhiana Dharamshala Palampur',
//     description: 'Dharamshala Palampur Tour with Ludhiana',
//     image: '/images/palampur.jpg',
//     link: '/tour-packages/himachal-tour-packages/ludhiana-dharamshala-palampur'
//   },
//   {
//     name: 'Srinagar Tour',
//     description: 'Srinagar-Kashmir 6 Days Tour Package',
//     image: '/images/srinagar-tour.jpg',
//     link: '/tour-packages/jammu-kashmir-tours/srinagar-tour'
//   }
// ];

export default function TourPackages() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Tour <span className="text-orange-500">Packages</span></h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Book Tour Packages from Ludhiana to All over North India</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tourPackages.slice(0, 6).map((tour, index) => (
            <Link key={index} href={`/tour-packages/${tour.packageType}/${tour.slug}`}>
              <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <div className="relative h-64">
                <Image
                  src={tour.imageUrl}
                  alt={tour.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-30" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">{tour.title}</h3>
                <p className="text-sm opacity-90 mb-4">{tour.duration}</p>
                <button 
                  className="inline-flex items-center bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Book Now
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 