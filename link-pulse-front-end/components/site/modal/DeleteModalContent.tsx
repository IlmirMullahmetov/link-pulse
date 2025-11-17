import { NegativeButton } from '@/components/UI/buttons';
import { SiteService } from '@/services/site.service';
import { ISiteResponse } from '@/types/site.types';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export type DeleteModalContentProps = {
  site: ISiteResponse;
  onClose: () => void;
};

export const DeleteModalContent = ({ site, onClose }: DeleteModalContentProps) => {
  const queryClient = useQueryClient();

  const { mutate, isPending, isError } = useMutation({
    mutationFn: (id: string) => SiteService.deleteSite(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['sites'] });
      onClose();
    },
  });

  return (
    <div className='relative flex flex-col gap-6 text-center'>
      <h2 className='text-2xl text-(--color-negative)'>Подтверждение удаления</h2>
      <div className='flex flex-col gap-1 font-medium text-white/60'>
        <span>
          Вы уверены, что хотите удалить ресурс <span className='text-(--color-primary)'>{site.name}</span>?
        </span>
        <span className='text-sm font-extralight'>После удаления восстановить данные будет невозможно</span>
      </div>
      <div className='flex justify-end'>
        <NegativeButton onClick={() => mutate(site.id)}>Удалить</NegativeButton>
      </div>
    </div>
  );
};
