import { Product } from "@/types/product"
import Image from "next/image"
import add from "@/public/add.png"

export default function Card({
  id,
  price,
  weight,
  name,
  category,
  imageUrl,
  metadata,
}: Product) {
  return (
    <div className='mx-3 bg-[#F9F8F6] rounded-md'>
      <Image
        src={imageUrl}
        alt=''
        width={500}
        height={500}
        className='bg-transparent'
      />
      <p className='text-[600] text-[22px]'>${price * 1000}</p>
      <p className='text=[400] text-[16px]'>{name}</p>
      <div className='flex justify-between'>
        {weight}
        <Image src={add} alt='' />
      </div>
    </div>
  )
}
