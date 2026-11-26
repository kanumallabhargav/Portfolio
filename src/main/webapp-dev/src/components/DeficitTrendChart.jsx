'use client';

import { AreaChart, Area, YAxis, XAxis, CartesianGrid, Legend, Tooltip } from 'recharts';
import { useEffect, useState } from 'react';
import axios from "axios";
import accentColors from '../themes/accentColors';
import { useTheme } from '../context/ThemeContext';
import { useAccentColor } from '../context/AccentColorContext';

const DeficitTrendChart = () => {
    const [gsData, setGsData] = useState([]);
    const { theme } = useTheme();
    const { accentColor } = useAccentColor();
    const accent = accentColors[accentColor][theme];
    const [deficitTrendStartDate, setDeficitTrendStartDate] = useState('2026-09-01')

    useEffect(() => {
        axios
            .get(`http://localhost:8080/api/charts/deficit-trends/${deficitTrendStartDate}`)
            .then((response) => {
                setGsData(response.data)
            })
            .catch((error) => {
                console.error(error);
            });
    }, [deficitTrendStartDate]);

    const handleSelectedDate = (e) => {
        setDeficitTrendStartDate(e.target.value);
    }

    return (
        <>
            <div className='flex flex-col px-12 mb-5 shadow-md rounded-xl py-5 w-fit'>
                <p className={`text-[${accent.text}] mb-2 font-semibold`}>Start Date</p>
                <input
                    type="date"
                    name="statDate"
                    value={deficitTrendStartDate}
                    onChange={handleSelectedDate}
                    className={`rounded bg-[${accent.foreground}] text-[${accent.text}] p-3 font-semibold`}
                    required
                />
            </div>
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
                    fill={theme}
                    type="monotone" />
            </AreaChart>
        </>
    )
}

export default DeficitTrendChart;