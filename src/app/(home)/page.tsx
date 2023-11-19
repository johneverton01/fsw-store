import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <Image className="h-auto w-full" sizes="100vw" src="/banner-home-01.png" width={0} height={0} alt="até 55% desconto só esse mês" />
    </main>
  )
}
