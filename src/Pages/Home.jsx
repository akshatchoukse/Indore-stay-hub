import React from 'react';
import Header from '../Components/Header';
import Hero from '../Components/Hero';
import Rooms from '../Components/Rooms';

function Home() {
  return (
    <div className='m-0 p-0 overflow-x-hidden'>
      <Header />
      <Hero />
      <Rooms />
    </div>
  );
}

export default Home;
