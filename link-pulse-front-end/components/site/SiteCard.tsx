import { NegativeButton, SecondaryButton } from '@/components/UI/buttons';
import { EnumSiteStatus, ISiteResponse } from '@/types/site.types';
import { CircleQuestionMark, Cog, X } from 'lucide-react';
import Link from 'next/link';

interface SiteCardProps {
  site: ISiteResponse;
  onOpenModal: (action: 'edit' | 'delete', site: ISiteResponse) => void;
}
export const SiteCard = ({ site, onOpenModal }: SiteCardProps) => {
  const isOnline = site.status === EnumSiteStatus.Online;
  return (
    <div className='relative flex w-full flex-col gap-2 rounded-lg border-2 p-2'>
      <div className='grid grid-cols-[3fr_4fr_2fr_3fr] items-center gap-4'>
        <div className='flex items-center gap-2'>
          <span className='font-roboto text-sm text-white/60'>Название:</span>
          <span className='font-tektur font-semibold'>{site.name}</span>
          <CircleQuestionMark className='h-4 w-4 cursor-pointer transition duration-300 hover:text-(--color-tertiary)' />
        </div>

        <div className='flex items-center gap-2 overflow-hidden'>
          <span className='font-roboto text-sm text-white/60'>URL:</span>
          <Link
            href={site.url}
            className='font-tektur truncate font-semibold transition-all duration-300 hover:text-(--color-tertiary)'
          >
            {site.url}
          </Link>
        </div>

        <div className='flex items-center gap-2 rounded-lg border-2 border-white/20 p-2'>
          <span
            className={`h-4 w-4 rounded-full border border-white/20 ${isOnline ? 'bg-green-500' : 'bg-(--color-negative)'}`}
          />
          <span className='font-tektur text-sm'>{site.status}</span>
        </div>

        <div className='flex justify-end gap-2'>
          <SecondaryButton onClick={() => onOpenModal('edit', site)} className='min-w-24'>
            <Cog />
          </SecondaryButton>
          <NegativeButton onClick={() => onOpenModal('delete', site)} className='min-w-24'>
            <X />
          </NegativeButton>
        </div>
      </div>
    </div>
  );
};
