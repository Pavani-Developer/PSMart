import React from 'react'
import Banners from '../../components/Banners'
import banner1 from '../../assets/Topoffersbanners/offer1.jpg';
import banner2 from '../../assets/Topoffersbanners/offer2.jpg';
import banner3 from '../../assets/Topoffersbanners/offer3.jpg'

const Topoffers = () => {
    const customBanners= [banner1,banner2,banner3]
  return (
    <div>
      <Banners images = {customBanners}/>
    </div>
  )
}

export default Topoffers
