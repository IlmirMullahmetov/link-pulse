import { Sites } from './sites';
import { Metadata } from 'next';
import { NO_INDEX_PAGE } from '@/constants/seo.constants';
import { SitesHeader } from '../../../components/site/SitesHeader';

export const metadata: Metadata = {
  title: 'Selected resources',
  ...NO_INDEX_PAGE,
};

export default function SitesPage() {
  return (
    <div className='global-border fade-in flex h-full flex-col gap-8 bg-(--background) p-4'>
      <SitesHeader />
      <Sites />
    </div>
  );
}
