import { Profile } from './Profile';
import { Logo } from './Logo';

export default function Header() {
  return (
    <header className='global-border flex items-center justify-between bg-(--background) px-4 py-4'>
      <Logo />
      <Profile />
    </header>
  );
}
