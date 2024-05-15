"use client"
import Card from "@/components/Card"
import NavBar from "@/components/NavBar"
import Categories from "@/components/NavBar/Categories"
import useProduct from "@/hooks/useProduct"

export default function Home() {
  const { productList } = useProduct()

  return (
    <body className='max-w-md'>
      <NavBar />
      <Categories />
      <div className='grid grid-cols-2 px-1 gap-2'>
        {productList.map((product, index) => (
          <Card
            key={index}
            id={product.id}
            price={product.price}
            weight={product.weight}
            name={product.name}
            category={product.category}
            imageUrl={product.imageUrl}
            metadata={product.metadata}
          />
        ))}
      </div>
    </body>
  )
}
