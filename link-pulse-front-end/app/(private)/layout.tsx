import Header from '@/components/header/Header';
import Sidebar from '@/components/sidebar/Sidebar';
import { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <div className='grid min-h-screen grid-cols-[1.8fr_6fr] gap-4 p-4 2xl:grid-cols-[1.7fr_6fr]'>
      <Sidebar />
      <main className='p-big-layout relative flex max-h-screen flex-col gap-8 overflow-x-hidden'>
        <Header />
        {children}
      </main>
    </div>
  );
}
