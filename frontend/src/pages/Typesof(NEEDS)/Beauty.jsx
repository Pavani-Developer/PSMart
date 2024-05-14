import React from 'react'
import Banners from '../../components/Banners'
import banner1 from '../../assets/Beautybanners/Beauty1.jpg'
import banner2 from '../../assets/Beautybanners/Beauty2.jpg'
import banner3 from '../../assets/Beautybanners/Beauty3.jpg'
import banner4 from '../../assets/Beautybanners/Beauty4.jpg'

const Beauty = () => {
  const customBanners = [banner1,banner2,banner3,banner4]
  return (
    <div>
      <Banners images ={customBanners}/>
    </div>
  )
}

export default Beauty
