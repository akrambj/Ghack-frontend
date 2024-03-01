import Workspace from "../services/Workspace";

const Services = () => {
  return (
    <section
      id="services"
      className="w-full overflow-hidden px-[10vw]"
    >
      <div className="flex items-center justify-center gap-[96px] flex-wrap  bg-[#F3FAFF] mx-auto py-[8vh] rounded-[4px]">
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
