import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";
import Logo from "./logo";
import { Link } from "react-router-dom";

const LeftSection = ({ place }) => {
  return (
    <div className="absolute top-0 h-screen flex flex-col space-y-10 justify-center items-center bg-black opacity-75 xl:w-1/3 sm:w-1/2 z-10">
      <Logo />
      <div className="text-white text-center space-y-5">
        <h2 className="text-2xl font-bold cursor-default">D I S C O V E R</h2>
        <h1 className="text-5xl font-bold cursor-default uppercase letter-spacing-2">
          {place.name}
        </h1>
        <p className="mx-10 text-gray-400 cursor-default">
          {place.description}
          <br />
          Come discover the magic of {place.name} for yourself!
        </p>
      </div>

      <div className="space-x-4">
        <Link
          to={`https://www.google.com/maps/place/${place.name}`}
          className="bg-gray-300 py-2 px-5 rounded-md hover:bg-white hover:duration-300"
        >
          Road Map
        </Link>
        <a className="text-gray-300 border rounded-md py-2 px-5 hover:bg-white hover:text-black hover:duration-300">
          Book a Trip
        </a>
      </div>

      <div className="text-white flex space-x-5">
        <AiFillFacebook size={"2rem"} className="cursor-pointer" />
        <AiFillInstagram size={"2rem"} className="cursor-pointer" />
        <AiFillTwitterSquare size={"2rem"} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default LeftSection;
