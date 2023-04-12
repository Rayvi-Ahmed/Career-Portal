import React from "react";
import {
    ResponsiveContainer,
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const data = [
    {
        name: "A-01",
        marks: 60,
        possibleMark: 60,
        amt: 1400
    },
    {
        name: "A-02",
        marks: 60,
        possibleMark: 60,
        amt: 1506
    },
    {
        name: "A-03",
        marks: 60,
        possibleMark: 60,
        amt: 989
    },
    {
        name: "A-04",
        marks: 52,
        possibleMark: 60,
        amt: 1228
    },
    {
        name: "A-05",
        marks: 47,
        possibleMark: 60,
        amt: 1100
    },
    {
        name: "A-06",
        marks: 54,
        possibleMark: 60,
        amt: 1700
    },
    {
        name: "A-07",
        marks: 60,
        possibleMark: 60,
        amt: 1700
    },
    {
        name: "A-08",
        marks: 60,
        possibleMark: 60,
        amt: 1700
    }
];

export default function App() {
    return (
        <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
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
                    <XAxis dataKey="name" scale="band" />
                    <YAxis dataKey="possibleMark" />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="possibleMark" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="marks" barSize={40} fill="#413ea0" />
                    <Line type="monotone" dataKey="marks" stroke="#ff7300" />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
}
