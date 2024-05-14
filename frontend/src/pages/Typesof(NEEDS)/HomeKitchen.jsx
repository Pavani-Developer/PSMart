import React from 'react';
import banner1 from '../../assets/Kitchenbanners/Kitchen1.jpg'
import banner2 from '../../assets/Kitchenbanners/Kitchen2.jpg'
import banner3 from '../../assets/Kitchenbanners/Kitchen3.jpg'
import banner4 from '../../assets/Kitchenbanners/Kitchen4.jpg'
import Banners from '../../components/Banners';

const HomeKitchen = () => {
  const customBanners = [banner1,banner2,banner3,banner4]
  return (
    <div>
      <Banners images ={customBanners}/>
    </div>
  )
}

export default HomeKitchen
