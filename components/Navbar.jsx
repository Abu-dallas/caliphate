"use client";
import { Menu, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

function Navbar({ setOpen }) {
  const pathname = usePathname();
  const { data: session } = useSession();
  return (
    <div className="w-full  max-sm:fixed z-10 top-0  flex items-center justify-between maroon">
      <Link href="/" className="text-3xl p-2  text-white font-bold">
        <Image
          src="/whitelogo.png"
          alt="logo image"
          width={2000}
          height={2000}
          className="w-64 h-12 max-sm:w-32 max-sm:h-11"
        />
      </Link>
      <div className="hidden md:flex items-center justify-end w-full gap-4 pr-12">
        {NavLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={`${
              pathname === link.href
                ? "text-blue-500 font-semibold"
                : "text-white"
            }`}
          >
            {link.title}
          </Link>
        ))}
      </div>
      <div className="flex gap-4 items-center justify-center">
        {session ? (
          <button
            className="text-lg md:mr-4 font-semibold text-white"
            onClick={() => signOut()}
          >
            Logout
          </button>
        ) : (
          <Link
            href="/login"
            className="text-lg md:mr-4 font-semibold text-white"
          >
            Login
          </Link>
        )}

        <Menu
          onClick={() => setOpen(true)}
          className="md:hidden mr-2 w-8 h-8 text-white"
        />
      </div>
    </div>
  );
}

const NavLinks = [
  {
    title: "Events",
    href: "#highlights",
  },
  {
    title: "Schedule",
    href: "#schedule",
  },
  {
    title: "Register",
    href: "#register",
  },
  {
    title: "Organizers",
    href: "#organizers",
  },
  {
    title: "Sponsors",
    href: "#sponsors",
  },
  {
    title: "Updates",
    href: "#updates",
  },
  {
    title: "News",
    href: "#endorsements",
  },
  {
    title: "Gallery",
    href: "#gallery",
  },
  {
    title: "Exhibitors",
    href: "#exhibitors",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];
export default Navbar;
