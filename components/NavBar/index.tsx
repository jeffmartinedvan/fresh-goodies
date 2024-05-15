import Image from "next/image"
import filter from "@/public/filter.png"
import search from "@/public/search.png"
import Link from "next/link"

export default function NavBar() {
  return (
    <div className='flex justify-between items-center pt-[58px] pb-4'>
      <div className='ml-4'>
        <Link href='/'>
          <p className='text-[20px] font-[600]'>Vegetables</p>
        </Link>
      </div>
      <div className='flex gap-7 mr-4 items-center'>
        <Link href='/'>
          <Image src={filter} alt='' />
        </Link>
        <Link href='/'>
          <Image src={search} alt='' />
        </Link>
      </div>
    </div>
  )
}
