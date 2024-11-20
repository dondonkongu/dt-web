import React from 'react';
import Cart from '../card/Card';

export default function HomeListWrap({ title, data }) {
  console.log(data);

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-semibold text-gray-800 mt-4 mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item, index) => (
          <div key={index} className="bg-white ">
            <Cart data={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
