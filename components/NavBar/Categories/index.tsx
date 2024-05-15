import Link from "next/link"

export default function Categories() {
  return (
    <div className='flex ml-3 gap-[5px] overflow-x-scroll text-[18px]'>
      <Link href='/' className='px-[14px] py-[10px]'>
        All
      </Link>
      <Link href='/' className='px-[14px] py-[10px]'>
        Spicy
      </Link>
      <Link href='/' className='px-[14px] py-[10px]'>
        Dressings
      </Link>
      <Link href='/' className='px-[14px] py-[10px]'>
        Sweet
      </Link>
      <Link href='/' className='px-[14px] py-[10px]'>
        Roots
      </Link>
    </div>
  )
}
