'use client';

import { BarChart, Bar, YAxis, XAxis, CartesianGrid, Legend, Tooltip } from 'recharts';
import { useEffect, useState } from 'react';
import axios from "axios";
import accentColors from '../themes/accentColors';
import { useTheme } from '../context/ThemeContext';
import { useAccentColor } from '../context/AccentColorContext';

const GainSpendChart = () => {
    const [gsData, setGsData] = useState([]);
    const [gainSpendStartDate, setGainSpendStartDate] = useState('2026-09-01');
    const { theme } = useTheme();
    const { accentColor } = useAccentColor();
    const accent = accentColors[accentColor][theme];

    useEffect(() => {
        axios
            .get(`http://localhost:8080/api/charts/gain-spend/${gainSpendStartDate}`)
            .then((response) => {
                setGsData(response.data)
            })
            .catch((error) => {
                console.error(error);
            });
    }, [gainSpendStartDate]);

    const handleSelectedDate = (e) => {
        setGainSpendStartDate(e.target.value);
    }

    return (
        <>
            <div className='flex flex-col px-12 mb-5 shadow-md rounded-xl py-5 w-fit'>
                <p className={`text-[${accent.text}] mb-2 font-semibold`}>Start Date</p>
                <input
                    type="date"
                    name="statDate"
                    value={gainSpendStartDate}
                    onChange={handleSelectedDate}
                    className={`rounded bg-[${accent.foreground}] text-[${accent.text}] p-3 font-semibold`}
                    required
                />
            </div>
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