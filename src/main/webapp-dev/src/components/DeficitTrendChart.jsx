'use client';

import { AreaChart, Area, YAxis, XAxis, CartesianGrid, Legend, Tooltip } from 'recharts';
import { useEffect, useState } from 'react';
import axios from "axios";
import accentColors from '../themes/accentColors';
import { useTheme } from '../context/ThemeContext';
import { useAccentColor } from '../context/AccentColorContext';
import { getDateMinusDays } from '../util/dateUtils';

const DeficitTrendChart = () => {
    const [gsData, setGsData] = useState([]);
    const { theme } = useTheme();
    const { accentColor } = useAccentColor();
    const accent = accentColors[accentColor][theme];
    const [deficitTrendStartDate, setDeficitTrendStartDate] = useState(getDateMinusDays())

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
            <div className={`flex flex-col px-2 mb-5 inset-shadow rounded-b-[2rem] py-2 w-fit bg-[${accent.background}]/20 ml-3`}>
                <p className={`text-[${accent.text}] mb-2 font-semibold`}>Start Date</p>
                <input
                    type="date"
                    name="statDate"
                    value={deficitTrendStartDate}
                    onChange={handleSelectedDate}
                    className={`rounded-[2rem] bg-[${accent.foreground}] text-[${accent.text}] p-3 font-semibold `}
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
                    cursor={{ stroke: `${accent.textInvert}` }}
                    contentStyle={{ backgroundColor: `${accent.foreground}` }}
                />
                <Area
                    dataKey="deficit"
                    stroke={accent.text}
                    fill={accent.background}
                    type="monotone" />
            </AreaChart>
        </>
    )
}

export default DeficitTrendChart;