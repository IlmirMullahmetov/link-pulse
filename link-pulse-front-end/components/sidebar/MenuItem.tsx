    import Link from "next/link";
    import { IMenuItem } from "./menu.types";
    import { FolderKanban } from "lucide-react";
    import styles from "./sidebar.module.css";

    interface MenuItemProps {
        item: IMenuItem;
    }
    export function MenuItem({ item }: MenuItemProps) {
        return (
            <Link href={item.link} className={`${styles.link} transition-colors duration-300 rounded-lg`}>
                    <div className="flex flex-col gap-1">
                        <div className="flex gap-2 items-center">
                            <FolderKanban className="h-10 w-10 stroke-2" />
                            <div className="flex flex-col">
                                <span className="font-tektur font-semibold">{item.name}</span>
                                <span className="font-tektur text-xs text-white/60 font-normal">{item.desc}</span>
                            </div>
                        </div>
                        <div className="text-white/40 text-xs flex justify-end">code: {item.code}</div>
                    </div>
            </Link>
        )
    }