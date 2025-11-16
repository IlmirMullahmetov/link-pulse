import { SiteService } from "@/services/site.service";
import { ISiteResponse, TypeSiteFormState } from "@/types/site.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SiteForm } from "./SiteForm";

export type EditModalContentProps = {
    site: ISiteResponse;
    onClose: () => void;
}


export const EditModalContent = ({ site, onClose }: EditModalContentProps) => {

    const queryClient = useQueryClient();

    const editMutation = useMutation({
        mutationFn: (data: TypeSiteFormState) => SiteService.updateSite(site.id, data),
        onSuccess() {
            queryClient.invalidateQueries({ queryKey: ["sites"] });
            onClose();
        }
    });

    return (
        <SiteForm
            title="Редактирование ресурса"
            defaultValues={site}
            onSubmit={(data) => editMutation.mutate(data)}
        />
    );
};