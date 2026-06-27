'use client';

import { BarChart, Bar, YAxis, XAxis, CartesianGrid, Legend, Tooltip } from 'recharts';
import { useEffect, useState } from 'react';
import axios from "axios";

const GainSpendChart = () => {
    const [gsData, setGsData] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/charts/gain-spend")
            .then((response) => {
                setGsData(response.data)
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <>
            <BarChart
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
                <Bar
                    dataKey="gains"
                    stroke='#542F28'
                    fill='#C77C6F'
                    type="monotone" />
                <Bar
                    dataKey="spends"
                    stroke='#24472A'
                    fill='#94FFAA'
                    type="monotone" />
            </BarChart>
        </>
    )
}

export default GainSpendChart;