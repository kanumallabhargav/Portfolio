'use client';

import { AreaChart, Area, YAxis, XAxis, CartesianGrid, Legend, Tooltip } from 'recharts';
import { useEffect, useState } from 'react';
import axios from "axios";

const DeficitTrendChart = () => {
    const [gsData, setGsData] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/charts/deficit-trends")
            .then((response) => {
                setGsData(response.data)
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <>
            <AreaChart
                width=''
                height={400}
                data={gsData}>
                <YAxis />
                <XAxis dataKey="statDate" />
                <CartesianGrid strokeDasharray="1 1" />
                <Legend />
                <Tooltip
                    cursor={{ stroke: '#FF360F' }}
                    contentStyle={{ backgroundColor: '#474747' }}
                />
                <Area
                    dataKey="deficit"
                    stroke='#FFC405'
                    fill='#8F7833'
                    type="monotone" />
            </AreaChart>
        </>
    )
}

export default DeficitTrendChart;