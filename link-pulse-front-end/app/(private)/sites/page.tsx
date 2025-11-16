import { Sites } from "./sites";
import { Metadata } from "next";
import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import { SitesHeader } from "../../../components/site/SitesHeader";

export const metadata: Metadata = {
    title: 'Selected resources',
    ...NO_INDEX_PAGE
}

export default function SitesPage() {

    return (
        <div className="p-4 global-border flex flex-col gap-8 bg-(--background) h-full">
            <SitesHeader />
            <Sites />
        </div>
    )
}