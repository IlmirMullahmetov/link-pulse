import { NegativeButton, SecondaryButton } from "@/components/UI/buttons";
import { EnumSiteStatus, ISiteResponse } from "@/types/site.types";
import { CircleQuestionMark, Cog, X } from "lucide-react";
import Link from "next/link";

interface SiteCardProps {
  site: ISiteResponse;
  onOpenModal: (action: 'edit' | 'delete', site: ISiteResponse) => void
}
export const SiteCard = ({ site, onOpenModal }: SiteCardProps) => {
  const isOnline = site.status === EnumSiteStatus.Online
  return (
    <div className="relative w-full p-2 flex flex-col gap-2 border-2 rounded-lg">
      <div className="grid grid-cols-[3fr_4fr_2fr_3fr] gap-4 items-center">

        <div className="flex items-center gap-2">
          <span className="font-roboto text-sm text-white/60">Название:</span>
          <span className="font-tektur font-semibold">{site.name}</span>
          <CircleQuestionMark className="w-4 h-4 cursor-pointer transition duration-300 hover:text-(--color-tertiary)" />
        </div>

        <div className="flex items-center gap-2 overflow-hidden">
          <span className="font-roboto text-sm text-white/60">URL:</span>
          <Link href={site.url} className="font-tektur font-semibold truncate transition-all hover:text-(--color-tertiary) duration-300">{site.url}</Link>
        </div>

        <div className="p-2 flex items-center gap-2 border-2 border-white/20 rounded-lg">
          <span
            className={`w-4 h-4 rounded-full border border-white/20 ${isOnline ? 'bg-green-500' : 'bg-(--color-negative)'}`}
          />
          <span className="font-tektur text-sm">{site.status}</span>
        </div>

        <div className="flex gap-2 justify-end">
          <SecondaryButton onClick={() => onOpenModal('edit', site)} className="min-w-24">
            <Cog />
          </SecondaryButton>
          <NegativeButton onClick={() => onOpenModal('delete', site)} className="min-w-24">
            <X />
          </NegativeButton>
        </div>
      </div>

    </div>
  );
};