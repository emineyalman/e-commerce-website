import React from 'react';
import DetailClient from '@/app/components/detail/DetailClient';
import { products } from '@/public/utils/Products';
type DetailProps = {
  params: {
    productId?: string;
  };
};

const Detail = async ({ params }: DetailProps) => {
  // Await params before destructuring
  const productParams = await params;
  const { productId } = productParams;
 const product =products.find((product) => product.id === productId);

 console.log(product, "product");
  console.log(productId, "productId");

  return (
    <div>
        <DetailClient />
    </div>
  );
};

export default Detail;