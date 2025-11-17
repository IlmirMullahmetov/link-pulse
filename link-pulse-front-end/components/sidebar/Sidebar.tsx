import { ClockDisplay } from './ClockDisplay';
import { MENU } from './menu.data';
import { MenuItem } from './MenuItem';

export default function Sidebar() {
  return (
    <aside className='global-border flex flex-col gap-4 bg-(--background) px-3'>
      <ClockDisplay />
      <hr className='h-0.5 w-full bg-(--color-primary)'></hr>
      {MENU.map((item, index) => (
        <MenuItem item={item} key={index} />
      ))}
    </aside>
  );
}
