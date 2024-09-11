
import Header from "../components/header/Header";
import React from 'react'
import EditProduct from "../components/products/EditProduct";


const ProductsPages = () => {
  return (
<>
<Header/>
<div className="px-6">
    <h1 className="mb-4 text-4xl font-bold text-center">Ürünler</h1>
    <EditProduct/>
</div>
</>
  )
}

export default ProductsPages