import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = ({ showBtn }) => {
  return (
    <nav className="w-full absolute top-0 left-0 flex justify-end items-center text-white z-10">
      <div className="flex gap-10 items-center space-x-4">
        <Link to="/">Home</Link>
        <a href="#trips">Organized Trips</a>
        <a href="#footer">Contact Us</a>
      </div>
      <div className="w-full= absolute=  top-0 p-5 flex justify-end items-center text-white z-10">
        <label className="group flex items-center   ">
          <input
            className=" invisible group-hover:visible placeholder:italic placeholder:text-white/80 bg-inherit border-b outline-0 border-gray-300 p-1 ml-2"
            placeholder="Search"
          />
          <span className="peer/search ">
            <AiOutlineSearch className="text-xl cursor-pointer" />
          </span>
        </label>
        {showBtn && (
          <>
            <Link to='/login' className="text-gray-300 border rounded-md py-2 px-5 hover:bg-white hover:text-black hover:duration-300 mx-2">
              Login
            </Link>
            <Link to='/SignUp' className="bg-black/75 py-2 px-5 rounded-md hover:bg-black/60 hover:duration-300 ">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
