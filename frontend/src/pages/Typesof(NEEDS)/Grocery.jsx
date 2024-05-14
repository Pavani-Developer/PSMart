import React from 'react'
import banner1 from '../../assets/Grocerybanners/Grocery1.jpg'
import banner2  from '../../assets/Grocerybanners/Grocery2.jpg'
import banner3 from '../../assets/Grocerybanners/Grocery3.jpg'
import banner4 from '../../assets/Grocerybanners/Grocery4.jpg'
import Banners from '../../components/Banners'

const Grocery = () => {
  const customBanners = [banner1,banner2,banner3,banner4]
  return (
    <div>
      <Banners images = {customBanners}/>
    </div>
  )
}

export default Grocery
