import React from 'react';

function Farmhouse() {
  const amenities = [
    { icon: '🛎️', title: 'Room Service', desc: 'Available 24/7 for your convenience.' },
    { icon: '📶', title: 'Free Wi-Fi', desc: 'High-speed internet access everywhere.' },
    { icon: '❄️', title: 'Air Conditioning', desc: 'Stay cool in every room.' },
    { icon: '🅿️', title: 'Parking', desc: 'Safe and spacious parking area.' },
    { icon: '🔌', title: 'Generator', desc: 'Backup power for uninterrupted stay.' },
    { icon: '🚿', title: 'Bathroom', desc: 'Clean bathrooms with hot & cold water.' },
    { icon: '🧹', title: 'Housekeeping', desc: 'Daily cleaning and maintenance.' },
    { icon: '🍳', title: 'Breakfast', desc: 'Delicious breakfast included.' },
    { icon: '🔥', title: 'Bonfire', desc: 'Enjoy cozy bonfire evenings.' },
    { icon: '🍽️', title: 'Outdoor Dining', desc: 'Fresh air dining experience.' },
    { icon: '🏊‍♂️', title: 'Swimming Pool', desc: 'Clean and refreshing pool.' },
    { icon: '🌳', title: 'Private Garden', desc: 'Peaceful garden space.' },
    { icon: '🦆', title: 'Animal Area', desc: 'Interact with ducks & dogs.' },
    { icon: '🎮', title: 'Indoor Games', desc: 'Carrom, chess and more.' },
    { icon: '🏏', title: 'Outdoor Games', desc: 'Play cricket and other sports.' },
    { icon: '📽️', title: 'Projector', desc: 'Watch movies and presentations.' },
    { icon: '🧊', title: 'Mini Fridge', desc: 'Keep your drinks cool.' },
    { icon: '🛁', title: 'Jacuzzi', desc: 'Relax in the jacuzzi bath.' },
    { icon: '⛰️', title: 'Hill View', desc: 'Beautiful scenic views.' },
    { icon: '🗄️', title: 'Locker', desc: 'Secure your valuables.' },
    { icon: '📸', title: 'Photo Zones', desc: 'Perfect spots for pictures.' },
    { icon: '🌇', title: 'Sunset Point', desc: 'Watch stunning sunsets.' },
    { icon: '🎧', title: 'DJ Setup', desc: 'Party with great music.' },
    { icon: '🎥', title: 'CCTV', desc: '24/7 security surveillance.' },
  ];

  return (
    <div className="h-[100vh] w-full bg-[#f7f5f2] flex flex-col justify-center items-center px-4 py-2">
      <h2 className="text-xl font-semibold text-gray-700 mb-6">Farmhouse Facilities</h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 max-w-6xl w-full">
        {amenities.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 p-4 rounded-xl flex flex-col items-center text-center shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all duration-200"
            style={{ minHeight: '110px' }}
          >
            <div className="text-2xl mb-1">{item.icon}</div>
            <span className="text-xs font-medium text-gray-800">{item.title}</span>
            <p className="text-[9px] text-gray-500 mt-1">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Farmhouse;
