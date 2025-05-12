import { FaPaw } from "react-icons/fa";
import { LinksMenu } from "./LinksMenu";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <nav className=" shadow-md px-6 py-4 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-3">
        <FaPaw className="text-pink-600 text-2xl" />
        <span className="text-xl font-bold text-white">Pet Care</span>
      </Link>

      <div className="hidden md:flex items-center gap-6">
        <LinksMenu />
      </div>
    </nav>
  );
};
