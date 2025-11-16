'use client'
import { PAGES } from "@/config/page-url.config"
import Link from "next/link"

export const Logo = () => {
    return (
        <Link href={PAGES.HOME}>
            <span className="uppercase text-4xl font-tektur font-bold transition hover:text-(--color-tertiary)">Link Pulse</span>
        </Link>
    )
}