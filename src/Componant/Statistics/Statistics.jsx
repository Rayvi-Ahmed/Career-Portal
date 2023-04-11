
import React from "react";
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter
} from "recharts";

const data = [
    {
        name: "Assignment 01",
        marks: 60,
        possible: 60,
        topic: "Lending Page"
    },
    {
        name: "Assignment 02",
        marks: 60,
        topic: "responsive CSS",
        possible: 60
    },
    {
        name: "Assignment 03",
        marks: 60,
        topic: "CSS framework",
        possible: 60
    },
    {
        name: "Assignment 04",
        marks: 52,
        topic: "Basic JS",
        possible: 60
    },
    {
        name: "Assignment 05",
        marks: 47,
        topic: "Interact JS",
        possible: 60
    },
    {
        name: "Assignment 06",
        marks: 54,
        topic: "JS API",
        possible: 60
    },
    {
        name: "Assignment 07",
        marks: 60,
        topic: "Debuging",
        possible: 60
    },
    {
        name: "Assignment 08",
        marks: 60,
        topic: "Simple React",
        possible: 60
    }
];

export default function App() {
    return (
        <ComposedChart
            width={800}
            height={400}
            data={data}
            margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20
            }}
        >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" />
            <YAxis dataKey="possible" />
            <Tooltip />
            <Legend />
            <Area
                type="monotone"
                dataKey="possible"
                fill="#8884d8"
                stroke="#8884d8"
            />
            <Bar dataKey="possible" barSize={30} fill="#413ea0" />
            <Line type="monotone" dataKey="marks" stroke="#ff7300" />
        </ComposedChart>
    );
}
