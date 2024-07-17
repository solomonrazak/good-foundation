import React from 'react';
import sampleHeader from '../assets/images/sampleHeader.jpg'

const Header = () => {
  return (
    <main className='w-screen h-[38rem] p-6' style={{backgroundImage: `url(${sampleHeader})`, backgroundSize: "cover", backgroundPosition: "center"}}>
      <p className='text-6xl p-5 text-start font-medium text-white pt-48'>A dynamic day and boarding school for finals in a serene environment serving Nursery through to High School </p>

    </main>
  )
}

export default Header;