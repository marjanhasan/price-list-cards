import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const marksArray = [
    { name: "Alice", id: "S001", physics: 75, chemistry: 80, math: 85 },
    { name: "Bob", id: "S002", physics: 80, chemistry: 85, math: 75 },
    { name: "Charlie", id: "S003", physics: 90, chemistry: 80, math: 85 },
    { name: "David", id: "S004", physics: 85, chemistry: 75, math: 90 },
    { name: "Emma", id: "S005", physics: 95, chemistry: 85, math: 90 },
    { name: "Frank", id: "S006", physics: 75, chemistry: 80, math: 85 },
    { name: "Grace", id: "S007", physics: 80, chemistry: 75, math: 90 },
    { name: "Henry", id: "S008", physics: 85, chemistry: 90, math: 80 },
    { name: "Isabelle", id: "S009", physics: 80, chemistry: 85, math: 90 },
    { name: "James", id: "S010", physics: 75, chemistry: 80, math: 85 },
    { name: "Katie", id: "S011", physics: 85, chemistry: 90, math: 80 },
    { name: "Leo", id: "S012", physics: 90, chemistry: 80, math: 85 },
  ];

  return (
    <div>
      <LineChart width={1000} height={300} data={marksArray}>
        <Line dataKey="physics"></Line>
        <Line dataKey="math" stroke="#82ca9d"></Line>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
      </LineChart>
    </div>
  );
};

export default Dashboard;
