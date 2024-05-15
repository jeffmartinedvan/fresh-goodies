import { Product } from "@/types/product"
import { useEffect, useState } from "react"

const useProduct = () => {
  const [productList, setProductList] = useState<Product[]>([])
  const [categories, setCategories] = useState<string[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8080/products")
      const data = (await response.json()) as Product[]
      const uniqueCategories = new Set(data.map((item) => item.category))

      setCategories(Array.from(uniqueCategories))
      setProductList(data)
    }

    fetchData()
  }, [])

  return { productList, categories }
}

export default useProduct
