'use client';

import { ReactNode } from 'react';
import { PrimaryButton } from '../UI/buttons';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className='fade-in fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xs' onClick={onClose}>
      <div className='global-border relative w-full max-w-lg bg-(--background) p-6' onClick={(e) => e.stopPropagation()}>
        <div className='absolute -top-6 -right-6'>
          <PrimaryButton onClick={() => onClose()}>
            {' '}
            <X />
          </PrimaryButton>
        </div>
        {children}
      </div>
    </div>
  );
};
