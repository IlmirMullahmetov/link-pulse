import { PAGES } from "@/config/page-url.config";
import { IMenuItem } from "./menu.types";

export const MENU:IMenuItem[] = [
    {name: 'Профиль', link: PAGES.PROFILE, desc: 'Ваша статистика', code: '042'},
    {name: 'Избранное', link: PAGES.SITES, desc: 'Сохранённые ресурсы', code: '012'},
]