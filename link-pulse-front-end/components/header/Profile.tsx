'use client';
import { useProfile } from '@/hooks/useProfile';
import { Loader } from '../UI/Loader';
import { NegativeButton, SecondaryButton } from '../UI/buttons';
import { useMutation } from '@tanstack/react-query';
import { authService } from '@/services/auth.service';
import { useRouter } from 'next/navigation';
import { LogOut } from 'lucide-react';

export const Profile = () => {
  const { profile, isLoading } = useProfile();
  const router = useRouter();
  const { mutate } = useMutation({
    mutationKey: ['logout'],
    mutationFn: () => authService.logout(),
    onSuccess: () => router.push('/auth'),
  });

  return (
    <div className='flex items-center'>
      {isLoading ? (
        <Loader />
      ) : (
        <div className='flex items-center gap-3'>
          <div className='flex flex-col text-right'>
            <h4 className='-mb-1 font-bold tracking-wider text-(--color-tertiary)'>{profile?.user.name || 'Гость'}</h4>
            <p className='font-orbitron text-sm tracking-wide text-white/60'>{profile?.user.email}</p>
          </div>
          <div className='font-orbitron flex h-12 w-12 items-center justify-center rounded-lg bg-(--color-secondary) text-xl text-white uppercase'>
            {profile?.user.name?.charAt(0) || 'A'}
          </div>
          <NegativeButton onClick={() => mutate()} className='min-w-24'>
            <LogOut />
          </NegativeButton>
        </div>
      )}
    </div>
  );
};
