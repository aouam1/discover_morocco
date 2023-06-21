import SliderTrip from "./SliderTrip";

const BackgroundHome = ({ isHome, images }) => {
  if (isHome )
    return (
      <div className="w-full h-screen relative">
        <img
          src="images/rabat.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    );
  else
    return (
      <div className="w-full h-screen relative">
        <SliderTrip 
        images={images}
        />
      </div>
    );
};

export default BackgroundHome;
