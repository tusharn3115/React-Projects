import React from 'react'
import './Campus.css'
import gallery1 from '/src/assets/gallery-1.png'
import gallery2 from '/src/assets/gallery-2.png'
import gallery3 from '/src/assets/gallery-3.png'
import gallery4 from '/src/assets/gallery-4.png'
import white_arrow from '/src/assets/white-arrow.png'

const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={gallery1} alt="" />
            <img src={gallery2} alt="" />
            <img src={gallery3} alt="" />
            <img src={gallery4} alt="" />
        </div>
        <button className='btn dark-btn'>Some more here <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Campus