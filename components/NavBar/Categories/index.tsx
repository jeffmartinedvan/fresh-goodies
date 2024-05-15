import useProduct from "@/hooks/useProduct"
import Link from "next/link"
import { useState } from "react"

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState<string>("")
  const { productList, categories } = useProduct()

  const finalProduct = productList.filter((e) => {
    if (activeCategory) {
      return (e.category = activeCategory)
    }
    return true
  })

  return (
    <div className='flex ml-3 gap-[5px] overflow-x-scroll text-[18px]'>
      <div
        onClick={() => setActiveCategory("")}
        className='px-[14px] py-[10px]'
      >
        All
      </div>
      {categories.map((item, index) => (
        <div key={index}>
          <div
            onClick={() => setActiveCategory(item)}
            className='px-[14px] py-[10px] text-nowrap'
          >
            {item}
          </div>
        </div>
      ))}
    </div>
  )
}
