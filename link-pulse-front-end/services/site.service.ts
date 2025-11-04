import { axiosWithAuth } from "@/api/interceptors"
import { ISiteResponse, TypeSiteFormState } from "@/types/site.types"

const BASE_URL = '/user/sites'

export const SiteService = {
    async getSites() {
        const response = axiosWithAuth.get<ISiteResponse[]>(BASE_URL);
        return response
    },
    async createSite(data: TypeSiteFormState) {
        const response = axiosWithAuth.post<TypeSiteFormState>(BASE_URL, data);
        return response
    },
    async updateSite(id: string, data: TypeSiteFormState) {
        const response = axiosWithAuth.put<TypeSiteFormState>(`${BASE_URL}/${id}`, data);
        return response;
    },
    async deleteSite(id: string) {
        const response = axiosWithAuth.delete<TypeSiteFormState>(`${BASE_URL}/${id}`);
        return response
    }
}