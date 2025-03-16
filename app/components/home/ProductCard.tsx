"use client"

import Image from 'next/image'
import Rating from '@mui/material/Rating'
import textClip from '@/public/utils/TextClip'
const ProductCard = ({product} : {product:any}) => {
  let productRating =product?.reviews?.reduce((acc:number,item:any) => acc+item.rating,0) /product?.reviews?.length || 0;
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
                <div className='text-sm text-gray-500'>{textClip(product.name)}</div>
                <Rating name="read-only" value={productRating} readOnly />
                <div className='text-sm text-orange-500 font-bold'>${product.price}</div>
            </div>
    </div>
  )
}
export default ProductCard