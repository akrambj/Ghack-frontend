import Prices from "../../components/prices/Prices";

const Upgrade = () => {
  return <div className="flex flex-col gap-8 items-center">
    <div className="h-[10vh] w-[50vw] bg-[#66DC90] rounded-full flex justify-between items-center px-16">
      <h1 className="text-white font-bold">Your Plan</h1>
      <h1 className="text-white font-bold">Entreprise</h1>
    </div>
    <Prices />
  </div>;
};

export default Upgrade;
