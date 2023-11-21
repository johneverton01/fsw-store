import { prismaClient } from "@/lib/prisma";
import Image from "next/image";
import Categories from "./components/categories";
import ProductList from "./components/product-list";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercent: {
        gt: 0
      }
    }
  });
  return (
    <main className="flex min-h-screen flex-col gap-7 md:gap-10">
      <Image 
        className="h-auto w-full px-5" 
        sizes="100vw" 
        src="/banner-home-01.png" 
        width={0} 
        height={0} 
        alt="até 55% desconto só esse mês"
        />

      <div className="mt-8 px-5">
        <Categories />
      </div>

      <div className="mt-8">
        <h2 className="mb-3 pl-5 font-bold uppercase">Ofertas</h2>
        <ProductList products={deals} />
      </div>

      <Image 
        className="h-auto w-full px-5" 
        sizes="100vw" 
        src="/banner-home-02.png" 
        width={0} 
        height={0} 
        alt="até 55% desconto em mouses"
        />
    </main>
  )
}
