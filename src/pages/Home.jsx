import Hero from "../components/home/Hero";
import Prices from "../components/home/Prices";
import Services from "../components/home/Services";

const Home = () => {
  return (
    <section className="w-screen min-h-screen">
      <Hero />
      <Services />
      <Prices />
    </section>
  );
};

export default Home;
