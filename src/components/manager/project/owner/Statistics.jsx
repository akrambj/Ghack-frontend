import EmployeesActivity from "./EmployeesActivity";
import TaskStatistics from "./TaskStatistics";

const Statistics = () => {
  return (
    <section className="w-full flex  gap-10">
      <TaskStatistics />
      <EmployeesActivity />
    </section>
  );
};

export default Statistics;
