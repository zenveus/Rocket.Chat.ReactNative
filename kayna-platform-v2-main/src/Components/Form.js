import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";

const Form = ({ open, setOpen }) => {
  const [kaynaConfig, setKaynaConfig] = useState({
    width: "500px",
    height: "400px",
    extCustomerID: "123",
    extCustomerName: "Kumail Pirzada",
    buildingArea: "92",
    address: "London",
    electricalInspectionDate: "2021-10-20",
    tenantOccupation: "fireWorks",
    primaryColor: "#800080",
    secondaryColor: "#ffffff",
    // logo: "https://dev-widget-kayna.netlify.app/favicon.ico",
  });

  const updateKaynaConfig = (e) => {
    e.preventDefault();
    let kaynaConfigTemp = { ...kaynaConfig };
    kaynaConfigTemp[e.target.name] = e.target.value;
    setKaynaConfig(kaynaConfigTemp);
  };

  const updateWidget = () => {
    window.MyLibrary.init({ ...kaynaConfig });
    setOpen(false);
  };

  useEffect(() => {
    updateWidget();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("WINDOW: ", window);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => 50),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: labels.map(() => 60),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const donutData = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="ml-[20vw] w-[40vw] flex flex-col items-center ml-[27vw] mt-[1vw]">
      {/* <div className="flex flex-col w-[40vw]">
        <div className="flex flex-row items-center justify-around">
          <div>
            <label className="ml-[8px]">External Customer ID:</label>
            <input
              placeholder="External Customer ID"
              type="text"
              className="border-2 rounded-lg w-[20vw] h-[2.6vw] text-[#bdbdbd] m-[8px] pl-[0.3vw] "
              value={kaynaConfig?.extCustomerID}
              name="extCustomerID"
              onChange={updateKaynaConfig}
            />
          </div>
          <div>
            <label className="ml-[8px]">Customer Name:</label>
            <input
              placeholder="Customer Name"
              type="text"
              className="border-2 rounded-lg w-[20vw] h-[2.6vw] text-[#bdbdbd] m-[8px] pl-[0.3vw] "
              value={kaynaConfig?.extCustomerName}
              name="extCustomerName"
              onChange={updateKaynaConfig}
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-around">
          <div>
            <label className="ml-[8px]">Address:</label>
            <input
              placeholder="Address"
              type="text"
              className="border-2 rounded-lg w-[20vw] h-[2.6vw] text-[#bdbdbd] m-[8px] pl-[0.3vw] "
              value={kaynaConfig?.address}
              name="address"
              onChange={updateKaynaConfig}
            />
          </div>
          <div>
            <label className="ml-[8px]">Building Area:</label>
            <input
              placeholder="Building Area"
              type="number"
              className="border-2 rounded-lg w-[20vw] h-[2.6vw] text-[#bdbdbd] m-[8px] pl-[0.3vw] "
              value={kaynaConfig?.buildingArea}
              name="buildingArea"
              onChange={updateKaynaConfig}
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-around">
          <div>
            <label className="ml-[8px]">Company Logo URL:</label>
            <input
              placeholder="Logo URL"
              type="text"
              className="border-2 rounded-lg w-[20vw] h-[2.6vw] text-[#bdbdbd] m-[8px] pl-[0.3vw] "
              value={kaynaConfig?.logo}
              name="logo"
              onChange={updateKaynaConfig}
            />
          </div>
          <div>
            <label className="ml-[8px]">Inspection Date:</label>
            <input
              type="date"
              className="border-2 rounded-lg w-[20vw] h-[2.6vw] text-[#bdbdbd] m-[8px] pl-[0.3vw] "
              value={kaynaConfig?.electricalInspectionDate}
              name="electricalInspectionDate"
              onChange={updateKaynaConfig}
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-between">
          <label>Primary Color:</label>
          <input
            type="color"
            className="w-[8vw] h-[2.4vw] m-[8px]"
            value={kaynaConfig?.primaryColor}
            name="primaryColor"
            onChange={updateKaynaConfig}
          />
          <label>Secondary Color:</label>
          <input
            type="color"
            className="w-[8vw] h-[2.4vw] m-[8px]"
            value={kaynaConfig?.secondaryColor}
            name="secondaryColor"
            onChange={updateKaynaConfig}
          />
        </div>
      </div>
      <button
        className="bg-black text-white w-[12vw] h-[3vw] rounded-3xl mb-[1vw]"
        onClick={updateWidget}
      >
        Update Widget
      </button> */}
      <div className="w-[50vw] md:w-[70vw] ">
        <Bar options={options} data={data} />
      </div>
      <div className=" flex flex-row items-center mt-[4vw] md:flex-col">
        <div className="w-[20vw] ml-[-8vw] md:w-[70vw] ">
          <Pie data={donutData} />
        </div>
        <div id="kayna" className="ml-[3vw]" />
      </div>
      <div className="flex items-center justify-center w-[100vw]">
        <Modal
          open={open}
          setOpen={setOpen}
          updateWidget={updateWidget}
          updateKaynaConfig={updateKaynaConfig}
          kaynaConfig={kaynaConfig}
        />
      </div>
    </div>
  );
};

export default Form;
