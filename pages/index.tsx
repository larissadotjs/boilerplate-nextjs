import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

type Props = {
  name: string
}

export default function Home({ name = 'Larissa' }: Props) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1>hello world, {name}</h1>
    </main>
  )
}
