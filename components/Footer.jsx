import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="bg-rose-950 py-4 px-4 flex flex-col md:items-center lg:justify-center mt-16">
      <div>
        <p className="text-xl font-bold text-slate-200 mb-6 uppercase">
          Support and Assistance
        </p>

        <p className="text-slate-100">
          Follow our social media handles for more updates
        </p>

        <div className="flex gap-8 p-6 w-full items-center md:px-0 justify-center">
          <Link href="https://www.instagram.com/1stlanding_100">
            <Image
              src="/instagram.png"
              alt="insta logo"
              width={2000}
              height={2000}
              className="h-8 w-8 "
            />
          </Link>
          <Link href="https://vm.tiktok.com/ZSHWEo6dk39nf-fOaya">
            <Image
              src="/tiktok.png"
              alt="tiktok logo"
              width={2000}
              height={2000}
              className="h-8 w-8 "
            />
          </Link>
          <Link href="https://x.com/1stlandiNG100?t=FIMy47hjUUeOJiVmfcOIBg&s=09">
            <Image
              src="/x.png"
              alt="X logo"
              width={2000}
              height={2000}
              className="h-8 w-8 "
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
