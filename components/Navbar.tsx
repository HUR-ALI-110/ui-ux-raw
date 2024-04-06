import Image from "next/image";
import { navLinks } from "@/constant";

export function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
      <div className="flex items-center">
        <Image src="/Logo.svg" alt="Logo" width={40} height={40} />

        <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
          {navLinks.map((item, index) => (
            <p className="text-[#36485C] font-medium" key={index}>
              {item.name}
            </p>
          ))}
        </div>
      </div>

      <div className="flex gap-x-5">
        <p className="hidden mt-2 lg:block font-medium text-[#36485C] pr-[56px]">
          Open an Account
        </p>

        <div className="flex items-center gap-x-2">
          <Image src="/User.svg" alt="User Profile" width={40} height={40} />
          <span className="hidden font-medium text-[#36485C] lg:block">
            Sign in
          </span>
        </div>

        <Image
          src="/Menu.svg"
          alt="Menu Button"
          className="lg:hidden"
          width={40}
          height={40}
        />
      </div>
    </nav>
  );
}
