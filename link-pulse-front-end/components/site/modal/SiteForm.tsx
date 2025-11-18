import { Heading } from '@/components/UI/Heading';
import { Input } from '@/components/UI/Input';
import { PrimaryButton, SecondaryButton } from '@/components/UI/buttons';
import { TypeSiteFormState } from '@/types/site.types';
import { ReactNode } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type SiteFormProps = {
  title: string;
  defaultValues?: TypeSiteFormState;
  onSubmit: SubmitHandler<TypeSiteFormState>;
  isLoading?: boolean;
};

export const SiteForm = ({ title, defaultValues, onSubmit, isLoading }: SiteFormProps) => {
  const { handleSubmit, register } = useForm<TypeSiteFormState>({
    mode: 'onChange',
    defaultValues,
  });
  const isEdit = !!defaultValues;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col gap-5'>
        <Heading title={title} className={`${isEdit && 'text-(--color-tertiary)'}`} />
        <FormField label='Имя'>
          <Input id='name' {...register('name', { required: 'Название обязательно' })} placeholder='Введите название' />
        </FormField>
        <FormField label='URL'>
          <Input id='url' {...register('url', { required: 'URL обязательно' })} placeholder='https://example.com' />
        </FormField>
        <FormField label='Описание'>
          <Input id='desciption' {...register('description')} placeholder='Укажите описание' />
        </FormField>
        <div className='flex justify-end'>
          {isEdit ? (
            <SecondaryButton isLoading={isLoading}>Изменить</SecondaryButton>
          ) : (
            <PrimaryButton isLoading={isLoading}>Создать</PrimaryButton>
          )}
        </div>
      </div>
    </form>
  );
};

interface FormFieldProps {
  label: string;
  children: ReactNode;
}
const FormField = ({ label, children }: FormFieldProps) => {
  return (
    <div className='flex items-center gap-2'>
      <h4 className='min-w-24'>{label}</h4>
      {children}
    </div>
  );
};
