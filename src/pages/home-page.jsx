import Discover from "../components/Home/Discover";
import Footer from "../components/Home/Footer";
import Home from "../components/Home/Home";
import Places from "../components/Home/Places";

const home = () => {
  return (
    <>
      <Home />
      <Places />
      <Discover />
      <Footer />
    </>
  );
};

export default home;
