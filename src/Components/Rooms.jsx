import React from 'react';

function Rooms() {
  return (
    <div className='min-h-[80vh] w-full p-5'>
      <div className='min-h-[80vh] w-full flex flex-wrap gap-4 lg:gap-0 lg:justify-between justify-center'>

        {/* Room Card 1 */}
        <div className='h-[70vh] w-full md:w-[48%] lg:w-[23%] bg-[#f7f5f2] shadow-lg hover:shadow-2xl transition-shadow rounded-xl overflow-hidden cursor-pointer'>
          <div className='h-[55vh] w-full bg-[url("/Rooms/farmhose.png")] bg-cover bg-center'></div>
          <div className='flex flex-col items-center justify-between p-4'>
            <label className='font-bold text-[20px] font-serif'>Verde Vista Farm</label>
            <span className='text-[11px] text-center'>"Nature’s Peaceful Farm Stay"</span>
          </div>
        </div>

        {/* Room Card 2 */}
        <div className='h-[70vh] w-full md:w-[48%] lg:w-[23%] bg-[#f7f5f2] shadow-lg hover:shadow-2xl transition-shadow rounded-xl overflow-hidden cursor-pointer'>
          <div className='h-[55vh] w-full bg-[url("/Rooms/castle.png")] bg-cover bg-center'></div>
          <div className='flex flex-col items-center justify-between p-4'>
            <label className='font-bold text-[20px] font-serif'>Hotel Castle Inn</label>
            <span className='text-[11px] text-center'>"Comfort, Class, Perfect Stay"</span>
          </div>
        </div>

        {/* Room Card 3 */}
        <div className='h-[70vh] w-full md:w-[48%] lg:w-[23%] bg-[#f7f5f2] shadow-lg hover:shadow-2xl transition-shadow rounded-xl overflow-hidden cursor-pointer'>
          <div className='h-[55vh] w-full bg-[url("/Rooms/casa.JPG")] bg-cover bg-center'></div>
          <div className='flex flex-col items-center justify-between p-4'>
            <label className='font-bold text-[20px] font-serif'>Hotel Casa Inn</label>
            <span className='text-[11px] text-center'>"Relax, Refresh, Repeat Here"</span>
          </div>
        </div>

        {/* Room Card 4 */}
        <div className='h-[70vh] w-full md:w-[48%] lg:w-[23%] bg-[#f7f5f2] shadow-lg hover:shadow-2xl transition-shadow rounded-xl overflow-hidden cursor-pointer'>
          <div className='h-[55vh] w-full bg-[url("/Rooms/Saffron.JPG")] bg-cover'></div>
          <div className='flex flex-col items-center justify-between p-4'>
            <label className='font-bold text-[20px] font-serif'>Hotel Saffron Inn</label>
            <span className='text-[11px] text-center'>"Cozy Comfort, City Heart"</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Rooms;
