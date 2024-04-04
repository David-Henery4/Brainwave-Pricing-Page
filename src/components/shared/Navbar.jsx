import { NavLogo, NavCtaBtns, NavLinkList } from "./navbar-comps";

const Navbar = () => {
  return (
    <nav className="col-start-2 col-end-12 flex justify-between py-3">
      <NavLogo />
      <div className="flex justify-center items-center gap-[58px]">
        <NavLinkList />
        <NavCtaBtns />
      </div>
    </nav>
  );
};

export default Navbar;
