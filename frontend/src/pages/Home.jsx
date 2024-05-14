import React from 'react'
import '../styles/Home.css'
import TypesOfNeeds from '../components/TypesOfNeeds'
import Banners from '../components/Banners';
import banner1 from '../assets/HomeBanners/black-friday.jpg';
import banner2 from '../assets/HomeBanners/shop.jpg'

const Home = () => {

  const customBanners =  [banner1, banner2];
  return (
    <div className='home'>
      <TypesOfNeeds/>
      <Banners images={customBanners} />
    </div>
  )
}

export default Home
