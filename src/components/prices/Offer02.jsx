import Feature from "./Feature";

const Offer02 = () => {
  return (
    <div className="md:w-[25vw] w-[80vw]  h-[66vh] rounded-[32px] text-[#0B3558] border-[1.5px] cursor-pointer hover:border-[#0B3558]  border-Typo transition-all ease-in-out duration-300 bg-white flex items-center justify-center">
      <div className="flex flex-col items-start w-[90%] gap-[3.5vh]">
          <h2 className="font-bold text-[1.6rem]">Basic</h2>
          <h2 className="font-bold text-[2.7rem]">3.99$</h2>
          <div className="h-[1px] w-[100%] bg-[#E7EDF6]"></div>
          <div className="flex flex-col gap-4">
            <Feature text={"Appels sortants (1000 min / Mois)"} />
            <Feature text={"Sales Gamification"} />
            <Feature text={"Dashboard Sales"} />
            <Feature text={"Lead Management"} />
          </div>
          <button className="w-full bg-[#0B3558] text-white border-2 border-Typo text-[1.4rem] font-bold py-[22px] rounded-[22px] mt-[5vh] hover:text-Typo hover:bg-transparent transition-all ease-in-out duration-300">
            Get Started
          </button>
      </div>
    </div>
  );
};

export default Offer02;
