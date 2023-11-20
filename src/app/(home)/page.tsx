import Image from "next/image";
import Categories from "./components/categories";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-7 md:gap-10 p-5">
      <Image className="h-auto w-full" sizes="100vw" src="/banner-home-01.png" width={0} height={0} alt="até 55% desconto só esse mês" />

      <div className="mt-8">
        <Categories />
      </div>
    </main>
  )
}
