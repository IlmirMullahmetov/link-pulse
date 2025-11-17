'use client';
import { Modal } from '@/components/modal/Modal';
import { PrimaryButton } from '@/components/UI/buttons';
import { Heading } from '@/components/UI/Heading';
import { PackagePlus } from 'lucide-react';
import { useState } from 'react';
import { CreateModalContent } from './modal/CreateModalContent';

export const SitesHeader = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className='flex items-center justify-between'>
        <Heading title='Избранное' className='text-(--color-tertiary)' />
        <PrimaryButton onClick={() => setOpen(true)} className='min-w-24'>
          <PackagePlus />
        </PrimaryButton>
      </div>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <CreateModalContent onClose={() => setOpen(false)} />
      </Modal>
    </>
  );
};
