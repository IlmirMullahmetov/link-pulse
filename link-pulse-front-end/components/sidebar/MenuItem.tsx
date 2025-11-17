import Link from 'next/link';
import { IMenuItem } from './menu.types';
import { FolderKanban } from 'lucide-react';
import styles from './sidebar.module.css';

interface MenuItemProps {
  item: IMenuItem;
}
export function MenuItem({ item }: MenuItemProps) {
  return (
    <Link href={item.link} className={`${styles.link} rounded-lg transition-colors duration-300`}>
      <div className='flex flex-col gap-1'>
        <div className='flex items-center gap-2'>
          <FolderKanban className='h-10 w-10 stroke-2' />
          <div className='flex flex-col'>
            <span className='font-tektur font-semibold'>{item.name}</span>
            <span className='font-tektur text-xs font-normal text-white/60'>{item.desc}</span>
          </div>
        </div>
        <div className='flex justify-end text-xs text-white/40'>code: {item.code}</div>
      </div>
    </Link>
  );
}
