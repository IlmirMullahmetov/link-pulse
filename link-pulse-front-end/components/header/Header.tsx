import { Profile } from "./Profile";
import { Logo } from "./Logo";

export default function Header () { 
    return (
        <header className=" py-4 global-border flex justify-between px-4 items-center bg-(--background)">
            <Logo />
            <Profile />
        </header>
    )
}


