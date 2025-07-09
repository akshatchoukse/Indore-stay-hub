import React from 'react';
import Header from '../Components/Header';
import Hero from '../Components/Hero';
import Rooms from '../Components/Rooms';
import Farmhouse from '../Components/Facility/Farmhouse';
import CastleInn from '../Components/Facility/CastleInn';
import CasaInn from '../Components/Facility/CasaInn';
import SaffronInn from '../Components/Facility/SaffronInn';
import Footer from '../Components/Footer';

function Home() {
  return (
    <div className='m-0 p-0 overflow-x-hidden'>
      <Header/>
      <Hero/>
      <Rooms/>
      <Farmhouse/>
      <CastleInn/>
      <CasaInn/>
      <SaffronInn/>
      <Footer/>
         </div>
  );
}

export default Home;
