import Offer01 from "./Offer01";
import Offer02 from "./Offer02";
import Offer03 from "./Offer03";

const Prices = () => {
  return (
    <section
      id="prices"
      className="w-full overflow-hidden flex flex-col gap-[6vh] px-[10vw]"
    >
      <div>
        <h3 className="text-[4.5rem] font-bold text-Typo text-center">
          Choose the perfect plan for your team
        </h3>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8">
        <Offer01 />
        <Offer02 />
        <Offer03 />
      </div>
    </section>
  );
};

export default Prices;
