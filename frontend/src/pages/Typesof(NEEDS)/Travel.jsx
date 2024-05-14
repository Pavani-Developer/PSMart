import React from 'react'
import Banners from '../../components/Banners'
import banner1 from '../../assets/Travelbanners/Travel1.jpg'
import banner2 from '../../assets/Travelbanners/Travel2.jpg'
import banner3 from '../../assets/Travelbanners/Travel3.jpg'
import banner4 from '../../assets/Travelbanners/Travel4.jpg'


const Travel = () => {
  const customBanners = [banner1,banner2,banner3,banner4]
  return (
    <div>
      <Banners images={customBanners}/>
    </div>
  )
}

export default Travel
