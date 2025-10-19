import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Sidebar({ Open, setOpen }) {
  const pathname = usePathname();
  return (
    <div
      className={` transition-all delay-300 z-20 ${
        Open
          ? "w-full h-screen backdrop-blur-[1.5px] fixed top-0 md:hidden"
          : "w-full h-screen backdrop-blur-[1.5px] translate-x-full fixed top-0 md:hidden"
      }`}
    >
      <div className="relative w-full h-full">
        <div className="h-full absolute top-0 right-0 maroon w-[80%] px-4 py-6">
          <X className="mb-4 text-slate-200 " onClick={() => setOpen(false)} />
          <Link href="/">
            <Image
              src="/whitelogo.png"
              alt="logo image"
              width={2000}
              height={2000}
              className="w-48 h-12"
            />
          </Link>
          <div className="flex flex-col gap-4 m-4 pt-6">
            {NavLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`${
                  pathname === link.href
                    ? "text-blue-500 font-semibold"
                    : "text-slate-200"
                }`}
                onClick={() => setOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
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
    title: "Endorsements",
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

export default Sidebar;
