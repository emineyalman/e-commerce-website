import Image from 'next/image'
const Banner = () => {
  return (
    <div className="h-[237px]">
        <div className="h-[137px] bg-orange-600 relative">
             <Image src="/hepsi.jpeg" alt="banner" fill className='object-cover' />
        </div>
        </div>
  )
}

export default Banner