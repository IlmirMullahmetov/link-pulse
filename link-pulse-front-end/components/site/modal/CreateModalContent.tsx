import { SiteService } from '@/services/site.service';
import { TypeSiteFormState } from '@/types/site.types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { SiteForm } from './SiteForm';

export type CreateModalContentProps = {
  onClose: () => void;
};

export const CreateModalContent = ({ onClose }: CreateModalContentProps) => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ['sites'],
    mutationFn: (data: TypeSiteFormState) => SiteService.createSite(data),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['sites'] });
      onClose();
    },
  });

  return <SiteForm title='Создание ресурса' onSubmit={(data) => mutate(data)} isLoading={isPending} />;
};
