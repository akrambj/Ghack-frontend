import Offer01 from "./Offer01";
import Offer02 from "./Offer02";
import Offer03 from "./Offer03";

const Prices = () => {
  return (
    <section className="w-full h-screen overflow-hidden flex flex-col py-5 gap-10">
      <div>
        <h3 className="text-4xl font-bold text-[#0B3558] text-center">
          Choose the perfect plan for your team
        </h3>
      </div>
      <div className="flex items-center justify-center gap-7">
        <Offer01 />
        <Offer02 />
        <Offer03 />
      </div>
    </section>
  );
};

export default Prices;
