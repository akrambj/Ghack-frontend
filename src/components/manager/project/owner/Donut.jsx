import { useEffect } from "react";
import ApexCharts from "apexcharts";

const Donut = () => {
  useEffect(() => {
    const getChartOptions = () => {
      return {
        series: [35.1, 23.5, 2.4, 5.4, 1],
        colors: ["#F1511B", "#F1511BB2", "#F1511B80", "#F1511B80", "#F1511B1A"],
        chart: {
          height: 320,
          width: "100%",
          type: "donut",
        },
        stroke: {
          colors: ["transparent"],
          lineCap: "",
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                name: {
                  show: true,
                  fontFamily: "Inter, sans-serif",
                  offsetY: 20,
                },
                total: {
                  showAlways: true,
                  show: true,
                  label: "165 Task",
                  fontFamily: "Inter, sans-serif",
                  formatter: function (w) {
                    return "Complete Task";
                  },
                },
                value: {
                  show: true,
                  fontFamily: "Inter, sans-serif",
                  offsetY: -20,
                  formatter: function (value) {
                    return value + "k";
                  },
                },
              },
              size: "80%",
            },
          },
        },
        grid: {
          padding: {
            top: -2,
          },
        },
        labels: [
          "Complete Task",
          "Inprogress Task",
          "On Hold Task",
          "Review Task",
          "Pending Task",
        ],
        dataLabels: {
          enabled: false,
        },
        legend: {
          position: "bottom",
          fontFamily: "Inter, sans-serif",
        },

        xaxis: {
          labels: {
            formatter: function (value) {
              return value + "k";
            },
          },
          axisTicks: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
        },
      };
    };

    const chartOptions = getChartOptions();

    if (
      document.getElementById("donut-chart") &&
      typeof ApexCharts !== "undefined"
    ) {
      const chart = new ApexCharts(
        document.getElementById("donut-chart"),
        chartOptions
      );
      chart.render();

      const checkboxes = document.querySelectorAll(
        '#devices input[type="checkbox"]'
      );
      return () => {
        chart.destroy();
      };
    }
  }, []);

  return (
    <div className="w-[300px] ">
      <div className="flex justify-between mb-3"></div>
      <div className="py-6" id="donut-chart"></div>
    </div>
  );
};

export default Donut;
