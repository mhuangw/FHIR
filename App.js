import React from "react";
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
import { Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const demographicsData = {
  name: "John Doe",
  age: 32,
  gender: "Male",
  birthDate: "1989-05-22",
};

const observationsData = [
  { date: "2022-01-01", type: "Blood Pressure", value: "120/80" },
  { date: "2022-01-02", type: "Heart Rate", value: "78 bpm" },
  // More observations...
];

const conditionsData = ["Hypertension", "Hyperlipidemia", "Type 2 Diabetes"];
const medicationsData = ["Metformin", "Lisinopril", "Atorvastatin"];

const genderChartData = {
  labels: ["Males", "Females"],
  datasets: [
    {
      label: "Gender Distribution",
      data: [55, 45],
      backgroundColor: ["rgba(54, 162, 235, 0.2)", "rgba(255, 99, 132, 0.2)"],
      borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"],
      borderWidth: 1,
    },
  ],
};

const conditionsChartData = {
  labels: conditionsData,
  datasets: [
    {
      label: "Conditions",
      data: [10, 20, 30],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const App = () => {
  return (
    <div>
      <h1>Healthcare Dashboard</h1>
      <section>
        <h2>Patient Demographics</h2>
        <p>Name: {demographicsData.name}</p>
        <p>Age: {demographicsData.age}</p>
        <p>Gender: {demographicsData.gender}</p>
        <p>Birth Date: {demographicsData.birthDate}</p>
      </section>

      <section>
        <h2>Clinical Observations</h2>
        <Bar data={genderChartData} />
        <ul>
          {observationsData.map((obs) => (
            <li key={obs.date}>
              {obs.date} - {obs.type}: {obs.value}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Conditions and Diagnoses</h2>
        <Doughnut data={conditionsChartData} />
      </section>

      <section>
        <h2>Medications</h2>
        <ul>
          {medicationsData.map((med) => (
            <li key={med}>{med}</li>
          ))}
        </ul>
      </section>

      {/* Immunizations/Vaccine History */}
      {/* Allergies */}
      {/* Encounters */}
      {/* Procedure History */}
      {/* Care Plans */}
      {/* Health Goals */}
    </div>
  );
};

export default App;
