import { NavLogo, NavCtaBtns, NavLinkList } from "./navbar-comps";

const Navbar = () => {
  return (
    <nav className="col-start-1 col-end-13 grid grid-cols-desk bg-plainWhite">
      <div className="flex justify-between py-3 col-start-2 col-end-12">
        <NavLogo />
        <div className="flex justify-center items-center gap-[58px]">
          <NavLinkList />
          <NavCtaBtns />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
