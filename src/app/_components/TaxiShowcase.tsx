import Image from 'next/image';
import Link from 'next/link';
import { FaRupeeSign } from 'react-icons/fa';

const taxis = [
  {
    name: 'Honda Amaze',
    description: 'Honda Amaze One Way Taxi',
    image: '/images/honda-amaze-31.jpg',
    price: '10',
    link: '/car-rentals/honda-amaze'
  },
  {
    name: 'Toyota Etios',
    description: 'Etios One Way Cab',
    image: '/images/etios4.jpg',
    price: '10',
    link: '/car-rentals/etios'
  },
  {
    name: 'Swift Dzire',
    description: 'Swift Dzire One Way or Round Trip Taxi',
    image: '/images/swift1.jpg',
    price: '10',
    link: '/car-rentals/swift-dzire'
  },
  {
    name: 'Toyota Innova',
    description: 'Innova Round Trip Taxi Service',
    image: '/images/innova-taxi2.jpg',
    price: '13',
    link: '/car-rentals/innova'
  },
  {
    name: 'Innova Crysta',
    description: 'Hire Innova Crysta One Way or Round Trip Taxi',
    image: '/images/innova-crysta13.jpg',
    price: '14',
    link: '/car-rentals/innova-crysta'
  },
  {
    name: 'Mahindra Marazzo',
    description: 'Online Marazzo One Way Taxi Service',
    image: '/images/marazoo1.jpg',
    price: '13',
    link: '/car-rentals/mahindra-marazzo'
  }
];

export default function TaxiShowcase() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our <span className="text-orange-500">Taxi</span></h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Our Best Cars for One Way Tour</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {taxis.map((taxi, index) => (
            <Link href={taxi.link} key={index}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
                <div className="relative h-48">
                  <Image
                    src={taxi.image}
                    alt={taxi.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full flex items-center">
                    <FaRupeeSign className="mr-1" />
                    <span>{taxi.price} - Per Km</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{taxi.name}</h3>
                  <p className="text-gray-600">{taxi.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 