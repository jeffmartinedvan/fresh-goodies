import Card from "@/components/Card"
import NavBar from "@/components/NavBar"
import Categories from "@/components/NavBar/Categories"

export default function Home() {
  return (
    <body className='max-w-md'>
      <NavBar />
      <Categories />
      <div className='grid grid-cols-2'>
        {}
        <Card />
      </div>
    </body>
  )
}
