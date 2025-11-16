import Header from "@/components/header/Header"
import Sidebar from "@/components/sidebar/Sidebar"
import { PropsWithChildren } from "react"

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <div className='grid min-h-screen 2xl:grid-cols-[1.7fr_6fr] grid-cols-[1.8fr_6fr] gap-4 p-4'>
      <Sidebar />
      <main className='p-big-layout overflow-x-hidden max-h-screen relative flex flex-col gap-8'>
        <Header />
        {children}
      </main>
    </div>
  )
}

