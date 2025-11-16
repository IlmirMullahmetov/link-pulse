import type { Metadata } from "next";
import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import Profile from "./Profile";

export const metadata: Metadata = {
    title: 'Profile',
    ...NO_INDEX_PAGE
}

export default function Page() {
    return (
        <div className="flex flex-col gap-4 mt-8">
            <div>
                <h1 className="text-xl font-medium text-primary">Мой Профиль</h1>
            </div>
            <div className="p-4 global-border">
            <Profile />
            </div>
        </div>
    )
}