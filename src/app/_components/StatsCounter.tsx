import { FaRupeeSign, FaUsers, FaTaxi, FaSmile } from 'react-icons/fa';

const stats = [
  {
    icon: FaRupeeSign,
    count: '10',
    label: 'Lac KM Driven',
  },
  {
    icon: FaUsers,
    count: '4978',
    label: 'People Dropped',
  },
  {
    icon: FaTaxi,
    count: '40',
    label: 'Taxis & Drivers',
  },
  {
    icon: FaSmile,
    count: '2500',
    label: 'Happy People',
  },
];

export default function StatsCounter() {
  return (
    <section className="py-16 bg-gray-900 text-white relative">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.png')]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <stat.icon className="text-4xl text-orange-500" />
              </div>
              <div className="text-4xl font-bold mb-2">{stat.count}</div>
              <p className="text-gray-300 uppercase tracking-wider text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 