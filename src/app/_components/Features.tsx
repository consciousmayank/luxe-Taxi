import { FaCar, FaWindowClose, FaHeadset } from 'react-icons/fa';

const features = [
  {
    icon: FaCar,
    title: 'Sanitized Cabs',
    description: 'Our cars are equipped with sanitizers and driver with mask, Full Sanitized car rentals.'
  },
  {
    icon: FaWindowClose,
    title: 'No Hidden Charges',
    description: 'Prices for one-way dropping and outstation tours are fixed with no hidden prices.'
  },
  {
    icon: FaHeadset,
    title: '24x7 Customer Support',
    description: 'Get the best of cars on rent for easy and comfortable traveling at pocket friendly prices.'
  }
];

export default function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex items-start p-6 bg-gray-50 rounded-lg transition-transform hover:transform hover:scale-105"
            >
              <feature.icon className="text-4xl text-orange-500 flex-shrink-0 mr-4 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 