import React from 'react';
import Header from '../components/Header';
import Grid from '../components/Grid';
import SecondarySchool from '../components/SecondarySchool';
import Lower from '../components/levels/Lower';
import Middle from '../components/levels/Middle';
import High from '../components/levels/High';
import Boarding from '../components/levels/Boarding';
import Environment from '../components/Environment';

const Home = () => {
  return (
    <div>
      <Header />
      <Grid />
      <SecondarySchool />
      <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2">
        <Lower />
        <Middle />
        <High />
        <Boarding />

      </div>
      <Environment />
    </div>
  )
}

export default Home;