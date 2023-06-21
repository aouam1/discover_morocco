import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../data/trips";
import BackgroundHome from "../components/BackgroundHome";
import Header from "../components/Header";
import LeftSection from "../components/LeftSection";
import Footer from "../components/Home/Footer";
import Book from "../components/Detail/Book";
import Review from "../components/Review";

const Detailstrips = () => {
  const [trip, setTrip] = useState(null);
  const { city } = useParams();

  useEffect(() => {
    const abc = data.find((d) => d.name === city);
    setTrip(abc);
  }, []);

  if (!trip) return <div>no data found</div>;
  return (
    <>
      <BackgroundHome isHome={false} images={trip.images} />
      <Header showBtn />
      <LeftSection place={trip} />
      <Book place={trip} />
      <Review place={trip} />
      <Footer />
    </>
  );
};
export default Detailstrips;
