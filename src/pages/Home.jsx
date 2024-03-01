import Hero from "../components/home/Hero";
import Prices from "../components/prices/Prices";
import Services from "../components/home/Services";
import Testimonials from "../components/home/Testimonials";

const Home = () => {
  return (
    <section className="w-screen min-h-screen">
      <Hero />
      <div className="flex flex-col gap-[20vh] py-[20vh]">
      <Services />
      <Prices />
      <Testimonials />
      </div>
    </section>
  );
};

export default Home;
