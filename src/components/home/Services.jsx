import Workspace from "../services/Workspace";

const Services = () => {
  return (
    <section
      id="services"
      className="w-full h-screen overflow-hidden flex flex-col justify-center items-center"
    >
      <div className=" flex items-center justify-center p-10 gap-10 flex-wrap bg-[#F3FAFF] drop-shadow-md shadow-sm w-[70%] mx-auto">
        <Workspace
          bg="#66DC90"
          title={"Personal Workspaces"}
          text={"+40k users"}
        />
        <Workspace
          bg={"#BFB7F1"}
          title={"Intelligent Cordinator"}
          text={"+50k users"}
        />
        <Workspace
          bg={"#56A0EA"}
          title={"Manager's Decision panel"}
          text={"+60k users"}
        />
        <Workspace
          bg={"#0AE7EF"}
          title={"Virtual Collaboration Room"}
          text={"+50k users"}
        />
      </div>
    </section>
  );
};

export default Services;
