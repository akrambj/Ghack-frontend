import Hero from "../components/home/Hero";
import Prices from "../components/prices/Prices";
import Services from "../components/home/Services";
import Testimonials from "../components/home/Testimonials";

const Home = () => {
  return (
    <section className="w-screen min-h-screen">
      <Hero />
      <Services />
      <Prices />
      <Testimonials />
    </section>
  );
};

export default Home;
