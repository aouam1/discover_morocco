import {
  AiFillStar,
  AiOutlineCheck,
  AiOutlineClockCircle,
  AiOutlineClose,
  AiOutlinePlus,
  AiOutlineSmile,
} from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const PriceIE = ({ label, Icon, labels, color }) => {
  return (
    <div className="h-auto p-3 grid grid-cols-2 items-center border-b-[1px] border-[#676977] border-solid ">
      <span className="text-[#0f2454]">{label}</span>
      <ul className="pl-4 box-border text-[#676977] ">
        {labels.map((l) => (
          <li className="flex">
            <IconBook key={l} label={l} Icon={Icon} color={color} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const TableInfo = ({ Info, label }) => {
  return (
    <div className="py-[15px] grid grid-cols-2 items-center border-b-[1px] border-[#676977] border-solid ">
      <span className="text-[#0f2454]">{label} </span>
      <p className="text-[#676977]">{Info}</p>
    </div>
  );
};

const IconBook = ({ Icon, label, color = "text-[#2095AE]" }) => {
  return (
    <p className="flex items-center text-[#676977]">
      <Icon className={`mr-3 text-lg ${color}`} />
      {label}
    </p>
  );
};

const InputForm = ({ placeholder, type = "text" }) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      className="block outline-0 max-w-full mb-0 p-5 h-auto bg-white shadow-none border-0 rounded-none w-full leading-6 text-base font-normal text-[#676977]"
    />
  );
};

const Book = ({ place }) => {
  return (
    <section className=" flex flex-col md:flex-row gap-5 md:max-w-3xl lg:max-w-5xl xl:max-w-7xl md:mx-auto mt-[120px]">
      <div className="bgs-red-600  md:basis-2/3">
        <div className=" text-[#2095AE] text-xs font-normal uppercase mb-[5px] tracking-[5px]	">
          Discover morocco
        </div>
        <div className=" mb-4 text-5xl leading-[54px] font-bold text-[#0f2454] relative uppercase letter-spacing-2">
          {place.name}
        </div>
        <div className="flex gap-1 mb-4">
          {[...Array(Math.floor(place.rate)).keys()].map((rate) => (
            <AiFillStar className="text-[15px]" key={rate} color="#e4a853" />
          ))}
        </div>
        <div className=" grid grid-cols-2 auto-rows-[45px]  items-center py-5 px-0">
          <IconBook Icon={AiOutlineClockCircle} label={place.duration} />
          <IconBook Icon={FiUsers} label={place.people} />
          <IconBook Icon={IoLocationOutline} label={place.name} />
          <IconBook Icon={AiOutlineSmile} label={place.rate} />
        </div>
        <h6 className=" relative text-[27px] text-[#0f2454] font-bold">
          Programm
        </h6>
        <br/>
        <p className="mb-[30px]">
       <h7  className=" text-[#2095AE] text-xs font-normal uppercase mb-[5px] tracking-[5px]	"> Day 1:</h7>
       <br/>

- Departure by plane from Casablanca to Dakhla: arrival in Dakhla.
<br/>
- Transfer from the airport to the hotel.
<br/>
<h7 className=" text-[#2095AE] text-xs font-normal uppercase mb-[5px] tracking-[5px]	"> Day 2:</h7>
       <br/>

- Breakfast at the hotel.
<br/>
- Portorico + Imlili excursion (132$ for 2 to 5 people).
<br/>
Enjoy a fantastic 4x4 excursion in the desert. It's a 2-hour journey through the dunes, offering diverse landscapes and ending with a fish pedicure experience by the water. Along the way, you'll see camels and experience some of the unique traditions of the Sahara desert. Come and discover this fabulous place. Lunch and dinner at the hotel.
<br/>
<h7  className=" text-[#2095AE] text-xs font-normal uppercase mb-[5px] tracking-[5px]	"> Day 3:</h7>
       <br/>

- Breakfast at the hotel.
<br/>
- Visit to Dragon Island by boat (35$ per person).
<br/>
 Embark on an exploration of Herné Island (Dragon Island), one of the many geological wonders to visit in Dakhla. Accessible on foot at low tide, you'll find curious seashell specimens there. The site is extraordinary! Dinner at the hotel.
<br/>
<h7 className=" text-[#2095AE] text-xs font-normal uppercase mb-[5px] tracking-[5px]	"> Day 4:</h7>
       <br/>

- Breakfast at the hotel.
<br/>
- Visit to the White Dune and Asnaa Thermal Spring (89$ per person).
<br/>
On the road from Laayoune, 30 km from Dakhla, discover the White Dune, a stunning natural phenomenon rising in the middle of the lagoon. 
This wild site is also a favorite spot for flamingos. Opt for a 4x4 safari: after a 20-minute ride along the bay, you'll discover breathtaking landscapes!
You'll also experience the benefits of the Asnaa Thermal Spring and enjoy its warm, sulfurous waters in the heart of the desert. Dinner at the hotel.
<br/>
<h7 className=" text-[#2095AE] text-xs font-normal uppercase mb-[5px] tracking-[5px]	"> Day 5:</h7>
       <br/>

- Breakfast at the hotel.
<br/>
- Transfer from the hotel to Dakhla Airport, return to Casablanca.
<br/>
<br/>
Please note that the prices mentioned are approximate and may vary. Make sure to check the availability and book in advance. Enjoy your trip to Dakhla!
</p>
        
        {/* <TableInfo label="Departure" Info={`Airport ${place.name}`} />
        <TableInfo label="Departure Time" Info={place.DepartureTime} />
        <TableInfo label="Return Time" Info={place.ReturnTime} />
        <PriceIE
          Icon={AiOutlineCheck}
          label="Price Includes"
          labels={[
            " Accommondatio",
            "Porter & Personal Guide",
            "Insurance",
            "Breakfast",
            "Tranportation / Car",
          ]}
        />
        <PriceIE
          Icon={AiOutlineClose}
          label="Price Excludes"
          labels={[
            "Flights",
            "Lunch",
            "Typical Souvenir",
            "Sunscreen, toiletries and personal items",
          ]}
          color="text-[#ff0000]"
        /> */}
      </div>
      {/* <div className="absolute">
        <h6 className="relative text-[27px] text-[#0f2454]">Tour Plan</h6>
        <ul className="relative p-0">
          <li className="relative bg-[#f4f5f8] rounded-none overflow-hidden mb-[15px]">
            <div className="relative text-base leading-6 font-medium cursor-pointer py-5 pl-[30px] pr-[60px] text-[#0f2454] transition duration-500 ease-in-out ">
              <AiOutlinePlus className=" absolute right-9 top-5 h-[30px] text-base font-normal text-[#2095AE] leading-8 transition duration-500 ease-in-out" />{" "}
              Day 1: Departure
            </div>
            <div className="relative hidden	">
              <div className="relative px-[30px] pt-0 pb-[30px] bg-[#f4f5f8] text-[#676977]">
                <div className="relative top-0 block">
                  Travel non lorem ac erat suscipit bibendum nulla facilisi.
                  Sedeuter nunc volutpat miss sapien vel conseyen turpeutionyer
                  masin libero sevenion vusetion viventa augue sit amet hendrerit
                  vestibulum. Duisteyerion venenatis lacus gravida eros ut turpis
                  interdum ornare.
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div> */}

      <div id="#Book" className=" md:basis-1/3">
        <h3 className="block h-[80px] leading-[80px] text-center w-full m-0 bg-[#2095AE] text-[27px] text-white font-semibold">
          From $400
        </h3>

        <form className="bg-[#f4f5f8] py-[45px] px-[25px]">
          <div className="flex flex-col gap-3">
            <InputForm placeholder="Full Name" />
            <InputForm placeholder="Email Address" />
            <InputForm placeholder="Travel Date" type="date" />
            <InputForm placeholder="People" />
            <textarea
              placeholder="Your Enquiry"
              cols={30}
              rows={4}
              className="block outline-0 max-w-full mb-0 p-5 h-auto bg-white shadow-none border-0 rounded-none w-full leading-6 text-base font-normal text-[#676977]"
            ></textarea>
            <button type="submit" className="flex leading-6 text-left">
              <span className="text-base py-[14px] px-[25px] font-normal bg-[#2095AE] text-white m-0">
                Book Now
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Book;
