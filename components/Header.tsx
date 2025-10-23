import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";
import UserDropdown from "./UserDropdown";

const Header = ({ user }: { user: User }) => {
  return (
    <header className="sticky top-0 header">
      <div className="container header-wrapper">
        <Link href="/" className="text-2xl font-bold">
          <Image
            src="/assets/icons/logo.svg"
            alt="Signalist logo"
            width={150}
            height={40}
            className="h-8 w-auto cursor-pointer"
          />
        </Link>
        <nav className="hidden sm:block">
          <NavItems />
        </nav>
        <UserDropdown user={user} />
      </div>
    </header>
  );
};

export default Header;
