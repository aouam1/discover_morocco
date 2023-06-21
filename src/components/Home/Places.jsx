import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { data } from "../../data/trips";

const CityCard = ({ city }) => {
  return (
    <Link to={`/${city.name}`}>
      <div className="drop-shadow-2xl text-left rounded space-y-2 bg-white cursor-pointer opacity-80 hover:opacity-100 duration-200 md:h-[496px]">
        <img
          className="w-full h-40 object-cover rounded-t-lg"
          src={city.image}
          alt=""
        />
        <div className="p-4 space-y-4 md:h-[335px] md:flex md:flex-col md:justify-between">
          <div className="flex justify-between">
            <p className="text-sm text-red-400"> {city.name} </p>
            <p className="font-bold"> {city.price}</p>
          </div>
          <p className="font-semibold">{city.description}</p>
          <div className="flex justify-between items-center">
            <h2>{city.duration} </h2>
            <p className="flex items-center space-x-2 text-orange-400">
              <AiFillStar />
              <span>{city.rate}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Places = () => {
  return (
    <div className="w-4/5 m-auto cursor-default">
      <div className="w-full xl:w-1/2 m-auto text-center my-10 space-y-5">
        <h1 className="text-4xl font-bold">Places not to be missed</h1>
        <p>
          Morocco is a country filled with incredible places to visit, but here
          are some must-see destinations that you won't want to miss:
        </p>
      </div>

      <div className="inline md:grid grid-rows-3 lg:grid-rows-2 grid-flow-col gap-4 w-full lg:h-[450px] pb-10 border-b space-y-6 md:space-y-0">
        <div className="row-span-1 col-span-2">
          <img
            className="w-full h-full  rounded-md cursor-pointer opacity-80 hover:opacity-100 "
            src="images/marrakesh/1.jpg"
            alt=""
          />
        </div>
        <div className="lg:row-span-1 lg:col-span-1 md:col-span-2">
          <img
            className="w-full h-full object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 duration-200"
            src="images/chefchaouen/1.jpg"
            alt=""
          />
        </div>
        <div className="lg:row-span-1 lg:col-span-1 md:col-span-2">
          <img
            className="w-full h-full object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 duration-200"
            src="images/Ait.jpg"
            alt=""
          />
        </div>
        <div className="lg:row-span-2 lg:col-span-1 md:col-span-2 md:row-span-1">
          <img
            className="w-full h-full object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 duration-200"
            src="images/casablanca.jpg"
            alt=""
          />
        </div>
        <div className="lg:row-span-1 lg:col-span-1 md:col-span-2">
          <img
            className="w-full h-full object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 duration-200"
            src="images/sahra.jpg"
            alt=""
          />
        </div>
        <div className="lg:row-span-1 lg:col-span-1 md:col-span-2">
          <img
            className="w-full h-full object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 duration-200"
            src="images/essaouira.jpg"
            alt=""
          />
        </div>
      </div>

      <div id="trips" className="my-10 text-center">
        <h1 className="text-4xl font-bold">Organized trips</h1>
        <section className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 grid-cols-1 gap-10 my-10 justify-items-center items-center pb-10 border-b">
          {data.map((city) => (
            <CityCard key={city.name} city={city} />
          ))}
          {/* 
         
         
       
          <div className="drop-shadow-2xl text-left rounded space-y-2 bg-white cursor-pointer opacity-80 hover:opacity-100 duration-200 md:h-[496px]">
            <img
              className="w-full h-40 object-cover rounded-t-lg block"
              src="images\Khenifra.jpg"
              alt=""
            />
            <div className="p-4 space-y-4 md:h-[335px] md:flex md:flex-col md:justify-between">
              <div className="flex justify-between">
                <p className="text-sm text-red-400">Khenifra</p>
                <p className="font-bold">$420</p>
              </div>
              <p className="font-semibold">
                Khenifra is a hidden gem that rewards intrepid travelers with
                stunning natural beauty and a warm welcome from the locals.
                Whether you're interested in exploring the region's waterfalls
                and canyons or experiencing the local music and dance, Khenifra
                is a destination that is sure to leave a lasting impression.
              </p>
              <div className="flex justify-between items-center">
                <h2>5 days tour</h2>
                <p className="flex items-center space-x-2 text-orange-400">
                  <AiFillStar />
                  <span>4.5</span>
                </p>
              </div>
            </div>
          </div> */}
        </section>
      </div>
    </div>
  );
};

export default Places;
