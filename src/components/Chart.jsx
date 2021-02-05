import React from "react";
import {
    ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [{ name: 'Activity timeline', A: 211, B: 974, C1: 2492, C: 791, D: 2799, E: 3682, F: 1218 }];

function StackedBarChart() {

    return (


        <ResponsiveContainer width="100%" height={120}>
            <BarChart layout={'vertical'} width={100} height={100} data={data}
                margin={{ top: 0, right: 100, left: 50, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis orientation="top" type="number" ticks={[0, 211, 1185, 2492, 3283, 3984, 7666, 8884]} label={{ value: "days", angle: 0, position: "right", offset: 15 }} />
                <YAxis dataKey="name" type="category" />
                <Tooltip contentStyle={{ backgroundColor: "#183940", opacity: 0.8 }} itemStyle={{ color: "#ffffff" }} labelStyle={{ color: "#ffffff" }} wrapperStyle={{ zIndex: 10 }} allowEscapeViewBox={{ x: true, y: true }} />
                <Legend iconSize="15" iconType="wye" payload={[
                    { value: "A", type: "wye", color: "#402D22" },
                    { value: "B", type: "wye", color: "#26BFA3" },
                    { value: "C", type: "wye", color: "#118C76" },
                    { value: "D", type: "wye", color: "#118C76" },
                    { value: "E", type: "wye", color: "#183940" },
                    { value: "F", type: "wye", color: "#0CF2B1" }

                ]} />
                <Bar dataKey="A" stackId="a" fill="#402D22" unit=" days" />
                <Bar dataKey="B" stackId="a" fill="#26BFA3" unit=" days" />
                <Bar dataKey="C1" stackId="b" fill="transparent" unit=" days" />
                <Bar dataKey="C" stackId="b" fill="#118C76" unit=" days" />
                <Bar dataKey="D" stackId="a" fill="#118C76" unit=" days" />
                <Bar dataKey="E" stackId="a" fill="#183940" unit=" days" />
                <Bar dataKey="F" stackId="a" fill="#0CF2B1" unit=" days" />

            </BarChart>
        </ResponsiveContainer >
    )
};

export default StackedBarChart;