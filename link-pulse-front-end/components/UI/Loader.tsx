import { LoaderCircle as LoaderIcon } from 'lucide-react';

export const Loader = () => {
  return (
    <div className='flex items-center justify-center'>
      <LoaderIcon className='text-primary h-5 w-5 animate-spin' />
    </div>
  );
};
