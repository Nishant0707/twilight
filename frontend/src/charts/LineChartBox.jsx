import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { lineChartData } from "../../utils/mockData";

const LineChartBox = () => {
  return (
    <div className="bg-[#1e1e2f] p-6 rounded-2xl shadow-lg text-white w-full h-[300px]">
      <h2 className="text-lg font-semibold mb-4">Monthly Activity</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={lineChartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <XAxis dataKey="month" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip contentStyle={{ backgroundColor: "#2c2c3e", border: "none" }} labelStyle={{ color: "#fff" }} />
          <Line type="monotone" dataKey="value" stroke="#00e6e6" strokeWidth={3} dot={{ r: 5 }} activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartBox;
