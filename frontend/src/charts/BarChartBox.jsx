import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { barData } from "../utils/mockData";

const BarChartBox = () => {
  return (
    <div className="bg-gray-900 p-4 rounded-2xl shadow-lg text-white w-full h-[350px]">
      <h2 className="text-xl font-bold mb-4 text-blue-400">Admin Type Distribution</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={barData}>
          <XAxis dataKey="name" stroke="#ccc" tick={{ fill: '#ccc' }} />
          <YAxis stroke="#ccc" tick={{ fill: '#ccc' }} />
          <Tooltip
            contentStyle={{ backgroundColor: "#1a202c", borderColor: "#4fd1c5" }}
            itemStyle={{ color: "#63b3ed" }}
          />
          <Bar dataKey="count" fill="#4299e1" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartBox;
