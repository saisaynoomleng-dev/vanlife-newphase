import { NavLinksProps } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { FaUserAstronaut } from "react-icons/fa";

const NAVLINKS = [
    { name: "About", url: "/about" },
    { name: "Vans", url: "/vans" },
    { name: "Sign Up", url: "/sign-up", icon: <FaUserAstronaut /> },
];

const Header = () => {
    return (
        <header className="flex justify-between px-2 py-5 items-center">
            <Link href="/">
                <Image
                    src="/logo.png"
                    alt="vanlife logo"
                    width={80}
                    height={80}
                />
            </Link>

            <nav>
                <ul className="flex gap-x-4 items-center">
                    {NAVLINKS.map((link: NavLinksProps) => (
                        <li key={link.name}>
                            <Link href={link.url}>
                                {link.icon ? link.icon : link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
