import type { Metadata } from 'next';
import { NO_INDEX_PAGE } from '@/constants/seo.constants';
import Profile from './Profile';

export const metadata: Metadata = {
  title: 'Profile',
  ...NO_INDEX_PAGE,
};

export default function Page() {
  return (
    <div className='mt-8 flex flex-col gap-4'>
      <div>
        <h1 className='text-primary text-xl font-medium'>Мой Профиль</h1>
      </div>
      <div className='global-border p-4'>
        <Profile />
      </div>
    </div>
  );
}
