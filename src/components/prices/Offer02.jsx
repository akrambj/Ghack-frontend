import Feature from "./Feature";

const Offer02 = () => {
  return (
    <div className="w-[23%] h-[440px] rounded-[20px] text-[#0B3558] border-[1px] cursor-pointer hover:bg-[#0B3558] hover:text-white border-[#0B3558] transition-all ease-in-out duration-300 p-7 bg-white shadow-md drop-shadow-lg flex flex-col gap-5">
      <div className="flex flex-col gap-7">
        <div className="flex items-center gap-5">
          <h2 className="text-xl font-bold">Professional</h2>
          <h4 className="bg-[#E6F0FF] text-[#006BFF] px-2 py-1 rounded-lg">
            Most popular
          </h4>
        </div>
        <h4 className="text-2xl font-bold">6.99$</h4>
      </div>
      <div className="flex flex-col gap-4">
        <Feature text={"Appels sortants (1000 min / Mois)"} />
        <Feature text={"Sales Gamification"} />
        <Feature text={"Dashboard Sales"} />
        <Feature text={"Lead Management"} />
        <Feature text={"Guides conversationnels"} />
        <div className="opacity-30 flex flex-col gap-4">
          <Feature text={"Intégration Hubspot native"} />
        </div>
      </div>
      <button className="w-full bg-[#0B3558] text-white font-bold py-3 rounded-lg">
        Get Started
      </button>
    </div>
  );
};

export default Offer02;
