import { navbarLinksData } from "@/link-lists-data";
import Link from "next/link";

const NavLinkList = () => {
  return (
    <menu className="flex justify-center items-center gap-6">
      {navbarLinksData.map((navLink) => {
        return (
          <li key={navLink.id} className="text-[15px] font-bold">
            <Link href={navLink.route}>{navLink.label}</Link>
          </li>
        );
      })}
    </menu>
  );
};

export default NavLinkList;
