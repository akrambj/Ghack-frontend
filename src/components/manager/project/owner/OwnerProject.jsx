import Cards from "./Cards";
import FileStorage from "./FileStorage";
import Head from "./Head";
import Statistics from "./Statistics";
import Tasks from "./Tasks";
import Tools from "./Tools";

const OwnerProject = () => {
  return (
    <div className="flex flex-col gap-10 px-16">
      <Head />
      <Cards />
      <Statistics />
      <Tools />
      <Tasks />
      <FileStorage />
    </div>
  );
};

export default OwnerProject;
