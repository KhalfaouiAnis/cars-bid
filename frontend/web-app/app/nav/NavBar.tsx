import Search from "./Search";
import Logo from "./Logo";
import UserMenu from "./UserMenu";

export default function NavBar() {
    return (
        <header className="sticky top-0 z-50 flex justify-between bg-white p-5 items-center text-gray-800 shadow-md">
            <Logo />
            <Search />
            <UserMenu />
        </header>
    )
}