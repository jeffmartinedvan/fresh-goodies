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
    <div className='mx-3'>
      <Image src={imageUrl} alt='' />
      <p className='text-[600] text-[22px]'>{price}</p>
      <p className='text=[400] text-[16px]'>{name}</p>
      <div className='flex justify-between'>
        {weight}
        <Image src={add} alt='' />
      </div>
    </div>
  )
}
