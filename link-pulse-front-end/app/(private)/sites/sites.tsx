'use client'
import { Loader } from "@/components/UI/Loader"
import { SiteService } from "@/services/site.service"
import { useQuery } from "@tanstack/react-query"
import { SiteCard } from "../../../components/site/SiteCard"
import { useEffect, useState } from "react"
import { ISiteResponse } from "@/types/site.types"
import { Modal } from "@/components/modal/Modal"
import { DeleteModalContent } from "../../../components/site/modal/DeleteModalContent"
import { EditModalContent } from "@/components/site/modal/EditModalContent"

export const Sites = () => {
  const [sites, setSites] = useState<ISiteResponse[]>();
  const [modal, setModal] = useState<{ action: 'edit' | 'delete', site: ISiteResponse } | null>(null);

  const { data: sitesData, isLoading } = useQuery({
    queryKey: ['sites'],
    queryFn: () => SiteService.getSites()
  })

  useEffect(() => {
    if (sitesData?.data)
      setSites(sitesData.data)
  }, [sitesData])

  if (isLoading) {
    return <Loader />
  }
  return (
    <>
      {sites?.length === 0 ? (
        <div className="flex items-center justify-center h-1/2">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl">Нет избранных ресурсов</h2>
            <span className="text-white/60">Добавьте новый сайт через кнопку сверху</span>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {sites?.map((site) => (
            <SiteCard
              site={site}
              key={site.id}
              onOpenModal={(action, site) => setModal({ action, site })}
            />
          ))}
          <Modal isOpen={!!modal} onClose={() => setModal(null)}>
            {modal?.action === 'edit' && (
              <EditModalContent
                onClose={() => setModal(null)}
                site={modal.site}
              />
            )}
            {modal?.action === 'delete' && (
              <DeleteModalContent
                onClose={() => setModal(null)}
                site={modal.site}
              />
            )}
          </Modal>

        </div>
      )}

    </>
  )
}
