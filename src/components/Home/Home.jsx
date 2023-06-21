import Header from "../Header";
import LeftSection from "../LeftSection";
import BackgroundHome from "../BackgroundHome";
import Logo from "../logo";

const place = {
  name: "Morocco",
  description:
    "If you're looking for a travel destination rich in culture, history, and breathtaking landscapes, Morocco is the place to be. This North African country is a fascinating blend of Berber, Arab, African, and European traditions, making it a unique and captivating place to explore.",
};

const Home = () => {
  return (
    <>
      <BackgroundHome isHome={true}  />
      <Header />
      <LeftSection place={place} />
    </>
  );
};

export default Home;
