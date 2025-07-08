import React from 'react';

function SaffronInn() {
  const amenities = [
    { icon: '🛎️', title: '24x7 Room Service', desc: 'Round-the-clock service for your comfort.' },
    { icon: '📺', title: 'Smart TV', desc: 'Enjoy Smart TV with entertainment options.' },
    { icon: '❄️', title: 'Air Conditioning', desc: 'Fully air-conditioned rooms for a pleasant stay.' },
    { icon: '🚿', title: 'Attached Washroom', desc: 'Private washrooms with essential amenities.' },
    { icon: '📞', title: 'Telephone', desc: 'Direct telephone service available in rooms.' },
    { icon: '🅿️', title: 'Parking', desc: 'Free and secure parking available.' },
    { icon: '🧹', title: 'Daily Housekeeping', desc: 'Clean and well-maintained rooms every day.' },
    { icon: '🛏️', title: 'Double Bed', desc: 'Comfortable double beds in every room.' },
    { icon: '📶', title: 'Free Wi-Fi', desc: 'Enjoy high-speed internet throughout your stay.' },
  ];

  return (
    <div className='p-10 bg-gray-100'>
      <h2 className='text-3xl font-serif font-bold text-center mb-8'>Hotel Saffron Inn Facilities</h2>
      <div className='flex flex-wrap justify-center gap-8'>
        {amenities.map((item, index) => (
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
  );
}

export default SaffronInn;
