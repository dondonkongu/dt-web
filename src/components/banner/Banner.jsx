import React from 'react';

import { Carousel } from 'antd';


const contentStyle = {
  height: '250px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const Banner = () => (
  <Carousel autoplay draggable>
    <div className='h-fit'>
        <img src="https://media-fmplus.cdn.vccloud.vn/uploads/sliders/e583ad3d-3c98-4cc4-b12b-0023fb0c5b58.jpg" alt="" />
    </div>
    <div className='h-fit'>
        <img src="https://media-fmplus.cdn.vccloud.vn/uploads/sliders/1ef014db-3c0e-4f6a-bd37-9af9ed13d834.jpg" alt="" />
    </div>
    <div className='h-fit'>
        <img src="https://media-fmplus.cdn.vccloud.vn/uploads/sliders/77e75b25-c6be-48a3-ba31-c426ed66d60a.jpg" alt="" />
    </div>
   
  </Carousel>
);
export default Banner;