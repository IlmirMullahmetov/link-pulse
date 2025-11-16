import { ClockDisplay } from "./ClockDisplay";
import { MENU } from "./menu.data";
import { MenuItem } from "./MenuItem";

export default function Sidebar () {
    return (
        <aside className="global-border flex flex-col gap-4 px-3 bg-(--background)">
            <ClockDisplay />
            <hr className="w-full bg-(--color-primary) h-0.5"></hr>
            {MENU.map((item, index) => (
                <MenuItem item={item} key={index}/>
            ))}
            </aside>
    )
}

