import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import SearchBar from "./Searchbar";

export const Header = () => {
  return (
    <header className="bg-mainBeige">
      <div className="sub-wrap flex items-center">
        <Link to="/">
          <h1 className="text-2xl font-bold">
            <span className="text-pointRed font-extrabold">C</span>harity Finder
          </h1>
        </Link>
        <SearchBar />
        <Link to="/favorites">
          <button className="bg-pointBeige flex h-10 w-12 items-center justify-center rounded-full shadow-md">
            <AiFillHeart size={25} className=" fill-pointRed" />
          </button>
        </Link>
      </div>
    </header>
  );
};
