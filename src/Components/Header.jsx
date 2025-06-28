import React, { useEffect, useState } from 'react';
import { BedDouble, Image, Phone, Info } from 'lucide-react';

function Header() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlHeader = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlHeader);
    return () => window.removeEventListener('scroll', controlHeader);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-[12vh] bg-[#f7f5f2] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] transition-transform duration-300 z-50 ${
        show ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto gap-15 flex items-center justify-between h-full z-10 px-6 sm:px-12 md:px-20 lg:px-32 text-[13px] font-serif text-gray-700">
        <div className="cursor-pointer hover:text-gray-500 hidden sm:flex items-center gap-1">
          <BedDouble size={16} />
          Our Properties
        </div>
        <div className="cursor-pointer hover:text-gray-500 hidden sm:flex items-center gap-1">
          <Image size={16} />
          Gallery
        </div>
        <div className="flex-1 flex justify-center">
          <div
            className='bg-[url("/logo.png")] h-[12vh] w-[120px] bg-no-repeat bg-cover bg-center cursor-pointer'
          ></div>
        </div>
        <div className="cursor-pointer hover:text-gray-500 hidden sm:flex items-center gap-1">
          <Phone size={16} />
          CONTACT
        </div>
        <div className="cursor-pointer hover:text-gray-500 hidden sm:flex items-center gap-1">
          <Info size={16} />
          ABOUT
        </div>
      </div>
    </div>
  );
}

export default Header;
