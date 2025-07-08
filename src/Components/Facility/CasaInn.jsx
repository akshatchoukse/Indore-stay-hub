import React from 'react';

function CasaInn() {
  const sections = [
    {
      name: 'Terrace',
      amenities: [
        { icon: '🌅', title: 'View', desc: 'Beautiful scenic views from the terrace.' },
        { icon: '🍽️', title: 'Dining', desc: 'dining experience on the terrace.' },
      ],
    },
    {
      name: 'Deluxe Room',
      amenities: [
        { icon: '📶', title: 'Free Wi-Fi', desc: 'High-speed internet access.' },
        { icon: '☕', title: 'Tea/Coffee Maker', desc: 'In-room tea and coffee setup.' },
        { icon: '💧', title: 'Mineral Water', desc: 'Complimentary mineral water bottles.' },
        { icon: '📞', title: 'Telephone', desc: 'Direct telephone access.' },
        { icon: '❄️', title: 'Air Conditioning', desc: 'Fully air-conditioned rooms.' },
        { icon: '📺', title: 'Android TV', desc: 'Entertainment with Android Smart TV.' },
        { icon: '🦷', title: 'Dental Kit', desc: 'Basic dental amenities provided.' },
      ],
    },
    {
      name: 'Premium Room',
      amenities: [
        { icon: '📶', title: 'Free Wi-Fi', desc: 'High-speed internet access.' },
        { icon: '☕', title: 'Tea/Coffee Maker', desc: 'In-room tea and coffee setup.' },
        { icon: '💧', title: 'Mineral Water', desc: 'Complimentary mineral water bottles.' },
        { icon: '📞', title: 'Telephone', desc: 'Direct telephone access.' },
        { icon: '❄️', title: 'Air Conditioning', desc: 'Fully air-conditioned rooms.' },
        { icon: '📺', title: 'Android TV', desc: 'Entertainment with Android Smart TV.' },
        { icon: '🦷', title: 'Dental Kit', desc: 'Basic dental amenities provided.' },
        { icon: '🪑', title: 'Work Desk', desc: 'Comfortable workspace available.' },
        { icon: '🛋️', title: 'Sofa Sitting', desc: 'Relaxing sofa sitting area.' },
        { icon: '🌅', title: 'Balcony', desc: 'Private balcony with views.' },
      ],
    },
    {
      name: 'Suite Room',
      amenities: [
        { icon: '❄️', title: 'Air Conditioning', desc: 'Fully air-conditioned rooms.' },
        { icon: '☕', title: 'Tea/Coffee Maker', desc: 'In-room tea and coffee setup.' },
        { icon: '💧', title: 'Mineral Water', desc: 'Complimentary mineral water bottles.' },
        { icon: '📞', title: 'Telephone', desc: 'Direct telephone access.' },
        { icon: '🪞', title: 'Large Vanity Area', desc: 'Spacious vanity space provided.' },
        { icon: '📺', title: 'Android TV', desc: 'Entertainment with Android Smart TV.' },
        { icon: '🦷', title: 'Dental Kit', desc: 'Basic dental amenities provided.' },
        { icon: '🛀', title: 'Bath Robe', desc: 'Complimentary bathrobes provided.' },
        { icon: '🛁', title: 'Bath Tub', desc: 'Relaxing bathtub available.' },
        { icon: '💇', title: 'Hair Dryer', desc: 'Hair dryer available in the room.' },
      ],
    },
  ];

  return (
    <div className='p-10 bg-gray-100'>
      <h2 className='text-3xl font-serif font-bold text-center mb-8'>Hotel Casa Inn Facilities</h2>
      {sections.map((section, idx) => (
        <div key={idx} className='mb-12'>
          <h3 className='text-2xl font-bold mb-6 text-center'>{section.name}</h3>
          <div className='flex flex-wrap justify-center gap-8'>
            {section.amenities.map((item, index) => (
              <div
                key={index}
                className='flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all w-[200px] text-center'
              >
                <div className='text-5xl'>{item.icon}</div>
                <span className='mt-4 text-lg font-bold'>{item.title}</span>
                <p className='mt-2 text-gray-600 text-sm'>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CasaInn;
