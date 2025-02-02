import { FaTaxi } from 'react-icons/fa';
import Link from 'next/link';

const taxiRoutes = [
  { name: 'Ludhiana One Way Taxi', link: '/one-way-taxis/ludhiana' },
  { name: 'Delhi One Way Taxi', link: '/one-way-taxis/delhi' },
  // { name: 'Jammu One Way Taxi', link: '/one-way-taxis/jammu-one-way-taxi' },
  { name: 'Amritsar One Way Taxi', link: '/one-way-taxis/amritsar' },
  { name: 'Jalandhar One Way Taxi', link: '/one-way-taxis/jalandhar' },
  { name: 'Phagwara One Way Taxi', link: '/one-way-taxis/phagwara' },
  { name: 'Chandigarh One Way Taxi', link: '/one-way-taxis/chandigarh' },
  // { name: 'Manali One Way Taxi', link: '/one-way-taxis/manali' },
  { name: 'Patiala One Way Taxi', link: '/one-way-taxis/patiala' },
  { name: 'Shimla One Way Taxi', link: '/one-way-taxis/shimla' },
  { name: 'Delhi NCR One Way Taxi', link: '/one-way-taxis/delhi-ncr' },
  { name: 'Moga One Way Taxi', link: '/one-way-taxis/moga' },
  { name: 'Bathinda One Way Taxi', link: '/one-way-taxis/bathinda' }
];

export default function OneWayTaxiLinks() {
  return (
    <section className="py-12 bg-orange-500">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-4 justify-center">
          {taxiRoutes.map((route, index) => (
            <Link
              key={index}
              href={route.link}
              className="flex items-center bg-white px-4 py-2 rounded-full text-gray-800 hover:bg-gray-100 transition-colors"
            >
              <FaTaxi className="mr-2 text-orange-500" />
              <span>{route.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 