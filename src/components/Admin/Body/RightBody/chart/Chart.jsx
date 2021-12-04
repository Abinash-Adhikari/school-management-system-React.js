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

export default function Chart() {
  const data = [
    {
      month: "Jan",
      income: 40000,
      expenses: 20400,
      amt: 50000,
    },
    {
      month: "Feb",
      income: 23000,
      expenses: 9098,
      amt: 10000,
    },
    {
      month: "Mar",
      income: 30500,
      expenses: 13298,
      amt: 10000,
    },
    {
      month: "Apr",
      income: 23400,
      expenses: 39098,
      amt: 10000,
    },
    {
      month: "May",
      income: 58500,
      expenses: 14598,
      amt: 10000,
    },
    {
      month: "Jun",
      income: 53500,
      expenses: 45398,
      amt: 10000,
    },
    {
      month: "Jul",
      income: 33500,
      expenses: 22398,
      amt: 50000,
    },
    {
      month: "Aug",
      income: 63500,
      expenses: 42398,
      amt: 70000,
    },
    {
      month: "Sep",
      income: 35000,
      expenses: 42398,
      amt: 10000,
    },
    {
      month: "Oct",
      income: 45000,
      expenses: 21398,
      amt: 10000,
    },
    {
      month: "Nov",
      income: 23500,
      expenses: 12398,
      amt: 10000,
    },
    {
      month: "Dec",
      income: 33500,
      expenses: 11398,
      amt: 10000,
    },
  ];
  return (
    <div>
      <div className="chart m-2 px-4 pb-4">
        <h4 className="text-center m-2 p-2">Income Analysis</h4>
        <ResponsiveContainer width="100%" aspect={4 / 1.5}>
          <LineChart data={data}>
            <XAxis dataKey="month" stroke="#5550bd" />
            <Line type="monotone" dataKey="income" stroke="green" />
            <Line type="monotone" dataKey="expenses" stroke="red" />
            <YAxis dataKey="amt" stroke="#5550bd" />
            <Tooltip />
            <CartesianGrid />
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
