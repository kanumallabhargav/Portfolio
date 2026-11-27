import { useState, useEffect } from "react";
import axios from "axios";
import { useTheme } from "../context/ThemeContext";
import { useAccentColor } from "../context/AccentColorContext";
import accentColors from "../themes/accentColors";
import { RechartsDevtools } from '@recharts/devtools';
import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Line,
    LineChart
} from "recharts";

export default function LastThirtyDaysSpends() {
    const [spentData, setSpentData] = useState([]);
    const { theme } = useTheme();
    const { accentColor } = useAccentColor();
    const accent = accentColors[accentColor][theme];

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/charts/last-thirty-days")
            .then((response) => {
                setSpentData(response.data)
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div className="grid grid-cols-1">
            <LineChart
                style={{ width: '100%', maxHeight: '40vh', aspectRatio: 1.618 }}
                responsive
                data={spentData}
            >
                <CartesianGrid strokeDasharray="2 2" stroke="#6E6E6E" />
                <XAxis dataKey="statDate" padding={{ left: 30, right: 30 }} stroke={accent.text} />
                <YAxis width="auto" stroke={accent.text} />
                <Tooltip
                    cursor={{ stroke: '#13EB2C' }}
                    contentStyle={{ backgroundColor: `${accent.foreground}`, borderColor: '#fff' }}
                />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="spent"
                    stroke={accent.text}
                    dot={{
                        fill: '#F56527',
                    }}
                    activeDot={{ r: 8, stroke: '#fff' }}
                />
                <RechartsDevtools />
            </LineChart>
        </div>
    )
}