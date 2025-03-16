"use client"

import Image from 'next/image'
import Rating from '@mui/material/Rating'
const ProductCard = ({product} : {product:any}) => {
  return (
    <div className='w-[240px] shadow-lg p-2 rounded-lg'>
        <div className='relative h-[240px]'>
            <Image 
                src={product.image} 
                alt={product.name} 
                className="object-contain" 
                fill
                priority
            />
           
        </div>
        <div className='text-center mt-2 space-y-2'>
                <div className='text-sm text-gray-500'>{product.name}</div>
                <Rating name="read-only" value={4} readOnly />
                <div className='text-sm text-orange-500 font-bold'>${product.price}</div>
            </div>
    </div>
  )
}
export default ProductCard