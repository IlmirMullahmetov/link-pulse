'use client';

import { PAGES } from '@/config/page-url.config';
import { authService } from '@/services/auth.service';
import { IAuthForm } from '@/types/auth.types';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/UI/Input';
import { PrimaryButton, SecondaryButton } from '@/components/UI/buttons';
import { Heading } from '@/components/UI/Heading';

export function Auth() {
  const { register, handleSubmit, reset } = useForm<IAuthForm>({
    mode: 'onChange',
  });
  const [isLoginForm, setIsLoginForm] = useState(false);

  const { push } = useRouter();
  const { mutate } = useMutation({
    mutationKey: ['auth'],
    mutationFn: (data: IAuthForm) => authService.main(isLoginForm ? 'login' : 'register', data),
    onSuccess() {
      toast.success('Succesfully login!');
      reset();
      push(PAGES.HOME);
    },
  });

  const onSubmit: SubmitHandler<IAuthForm> = (data) => {
    mutate(data);
  };

  return (
    <div className='flex min-h-screen'>
      <form className='global-border m-auto w-1/4 p-4' onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-5'>
          <Heading title='Авторизация' />
          <div className='flex items-end gap-2'>
            <h4 className='min-w-16'>Имя</h4>

            <Input
              id='email'
              type='email'
              {...register('email', {
                required: 'Email is requered',
              })}
              placeholder='Введите имя'
            />
          </div>
          <div className='flex items-end gap-2'>
            <h4 className='min-w-16 font-extralight'>Пароль</h4>
            <Input
              id='password'
              type='password'
              {...register('password', {
                required: 'Password is requered',
              })}
              placeholder='Введите пароль'
            />
          </div>
          <div className='flex justify-end gap-2'>
            <SecondaryButton onClick={() => setIsLoginForm(false)}>Регистрация</SecondaryButton>
            <PrimaryButton onClick={() => setIsLoginForm(true)}>Войти</PrimaryButton>
          </div>
        </div>
      </form>
    </div>
  );
}
