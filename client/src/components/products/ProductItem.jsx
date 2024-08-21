import React from 'react'

const ProductItem = ({item}) => {
  return (
    <div  className="transition-all border cursor-pointer select-none product-item hover:shadow-lg">
    <div className="product-img">
      <img src={item.img}
      
      alt="" className="object-cover w-full border-b h-28" />
    </div>
    <div className="flex flex-col p-3 product-info">
      <span className="font-bold">{item.title}</span>
      <span>{item.price}₺</span>
    </div>
  </div>
  )
}

export default ProductItem