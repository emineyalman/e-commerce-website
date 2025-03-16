"use client"

import React from 'react'
import Heading from '@/app/general/Heading'
import { products } from '@/public/utils/Products'
import ProductCard from './ProductCard'

const Products = () => {
  return (
    <div>
        <Heading text="Our Products" />
        <div className="flex items-center flex-wrap gap-3 md:gap-10 px-3 md:px-10">
            {
                products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
            }
        </div>
    </div>
  )
}

export default Products