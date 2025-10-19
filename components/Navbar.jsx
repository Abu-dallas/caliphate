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
    <div className="w-full  max-sm:fixed z-10 top-0  flex items-center justify-between bg-rose-950">
      <Link href="/" className="p-2">
        <Image
          src="/whitelogo.png"
          alt="logo image"
          width={2000}
          height={1000}
          className="w-40 h-12 object-contain  lg:w-48 "
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
        {session && (
          <button
            className="text-lg md:mr-4 font-semibold text-white"
            onClick={() => signOut()}
          >
            Logout
          </button>
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
    href: "/register",
  },
  {
    title: "Exhibitors",
    href: "#exhibitors",
  },
  {
    title: "Organizers",
    href: "#organizers",
  },
  {
    title: "Updates",
    href: "#updates",
  },
  {
    title: "Sponsors",
    href: "#sponsors",
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
    title: "Contact",
    href: "#contact",
  },
];
export default Navbar;
