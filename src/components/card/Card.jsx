import React, { useState } from 'react';

const Cart = ({ data }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleDotClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="w-full p-4">
      <div
        className="relative w-full h-96 overflow-hidden "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={
            isHovered
              ? currentImage === 0
                ? data.hoverImg
                : data.colorImg[currentImage]
              : data.colorImg[currentImage]
          }
          alt={data.name}
          className="absolute w-full h-full object-cover transition-opacity duration-700"
        />

        <button
          className={`absolute w-3/4 left-1/2 transform -translate-x-1/2 bg-white text-black py-2 px-4 rounded-sm shadow-lg 
            hover:bg-[#ef4f5e] hover:text-white transition-all duration-500 ease-in-out
            ${isHovered ? 'bottom-4 translate-y-0 opacity-100' : 'bottom-0 translate-y-full opacity-0'}
          `}
          onClick={() => alert('Thêm vào giỏ hàng!')}
        >
          Thêm vào giỏ hàng
        </button>
      </div>

      <div className="flex mt-2  space-x-2">
        {data.colorImg.map((image, index) => (
          <span
            key={index}
            onClick={() => handleDotClick(index)}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: '300px 400px',   
        backgroundPosition: '43% 65%',   
        filter: 'contrast(1.1)',
            }}
            className={`h-8 w-8 rounded-full cursor-pointer transition-all duration-300 
              ${index === currentImage ? 'border-2 border-red-600' : 'border border-gray-300'}
            `}
          ></span>
        ))}
      </div>

      <div className="mt-4 ">
        <p className="mt-2 text-lg  text-blue-500">${data.price}</p>
        <h2 className="text-xl  text-black truncate">{data.name}</h2>
      </div>
    </div>
  );
};

export default Cart;
