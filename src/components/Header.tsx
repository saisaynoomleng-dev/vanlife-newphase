"use client";

import { NavLinksProps } from "@/lib/types";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUserAstronaut } from "react-icons/fa";

const NAVLINKS = [
    { name: "About", url: "/about" },
    { name: "Vans", url: "/vans" },
    { name: "Sign Up", url: "/sign-up", icon: <FaUserAstronaut /> },
];

const Header = () => {
    const pathname = usePathname();
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
                            <Link
                                href={link.url}
                                className={clsx(
                                    link.url === pathname
                                        ? "text-brand-black-200 underline underline-offset-2"
                                        : "text-brand-black-200/80"
                                )}
                            >
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
