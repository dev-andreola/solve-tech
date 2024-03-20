import ActionButtons from "./action-buttons";
import Logo from "./logo";
import { NavigationBar } from "./navigation-bar";

const Navbar = () => {
  return (
    <div className=" border-b ">
      <div className="flex justify-between items-center px-10 h-20 max-w-6xl mx-auto">
        <Logo />
        <NavigationBar />
        <ActionButtons />
      </div>
    </div>
  );
};

export default Navbar;
