import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const properties = [
  {
    name: "Verde Vista Farm",
    location: "Rewati Range Aurovindo Indore",
    image: "/Rooms/farmhose.png",
    price: "₹2,999",
    features: ["Free Wi-Fi", "Balcony View", "Jacuzzi", "Swimming Pool"]
  },
  {
    name: "Castle Inn",
    location: "MR10 Indore",
    image: "/Rooms/castle.png",
    price: "₹599",
    features: ["AC", "24x7 Service", "Smart TV", "Double Bed"]
  },
  {
    name: "Casa Inn",
    location: "Near Brilliant Auro Building Indore",
    image: "/Rooms/casa.JPG",
    price: "₹899",
    features: ["AC", "24x7 Service", "Smart TV", "Bath Tub"]
  },
  {
    name: "Saffron Inn",
    location: "Vijay Nagar Indore",
    image: "/Rooms/Saffron.JPG",
    price: "₹699",
    features: ["AC", "24x7 Service", "Smart TV", "Double Bed"]
  },
];

function OurProperties() {
  return (
    <div>
        <Header/>
        <div className='px-6 py-20 bg-[#f6f4f1]'>
      <h2 className="text-3xl font-bold mb-8 text-center">Our Properties</h2>
      
      <div className="flex flex-wrap justify-center gap-6">
        {properties.map((property, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition w-full sm:w-[45%] lg:w-[30%]">
            <img src={property.image} alt={property.name} className="h-80 w-full object-cover rounded-t-2xl" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{property.name}</h3>
              <p className="text-gray-500">{property.location}</p>
              <label>Starting From</label>
              <p className="text-green-600 font-bold mt-2">{property.price}</p>
              <ul className="mt-3 text-sm text-gray-600 space-y-1">
                {property.features.map((feat, i) => (
                  <li key={i}>• {feat}</li>
                ))}
              </ul>
              <button className="mt-4 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default OurProperties;
