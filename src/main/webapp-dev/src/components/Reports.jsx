import { useEffect, useState } from "react";
import axios from "axios";
import { RechartsDevtools } from '@recharts/devtools';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Line,
    LineChart
} from "recharts";


export default function Reports() {
    const [weeklyStats, setWeeklyStat] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/reports/list")
            .then((response) => {
                setWeeklyStat(response.data);
            })
            .catch((error) => {
                console.error(error);
            })
    }, [])


    return (
        <>
            <div className="text-center">
                <p className="text-left border-l-4 pl-2 border-l-red-400/40 text-4xl bg-gradient-to-r py-2 from-zinc-500/30 to-transparent mb-2">Weekly Metrics</p>
                <div className="grid grid-cols-5 font-semibold bg-zinc-900/40 py-2 gap-2">
                    <p className="border-r">Week</p>
                    <p className="border-r">Total Gain</p>
                    <p className="border-r">Total Spent</p>
                    <p className="border-r">Total Deficit</p>
                    <p>TFL</p>
                </div>
                {weeklyStats.map((ws) => (<div key={ws.id} className="grid grid-cols-5 even:bg-purple-900/30 even:py-1">
                    <div className=''>
                        <p><span className='font-bold text-green-600/80'>{ws.week}</span> {new Date(ws.startDate).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "short",
                            year: "numeric"
                        })} - {new Date(ws.endDate).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "short",
                            year: "numeric"
                        })}</p>
                    </div>

                    <p>{ws.totalGain}</p>
                    <p>{ws.totalSpent}</p>
                    <p>{ws.totalDeficit}</p>
                    <p>{ws.weeklyLoss.toFixed(2)}</p>
                </div>
                ))}
            </div>
            <div className="flex flex-col mt-20">
                <p className="border-l-2 px-4 ml-4 font-semibold mb-2 bg-purple-900/40 w-fit py-1 rounded-full border-l-red-400/40 shadow-md">Weekly Deficit Trends</p>
                <div className="bg-zinc-900/50 rounded-xl pt-4 pr-4 shadow-md">
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart
                        data={weeklyStats}
                        layout="vertical"
                        margin={{
                            top: 20,
                            right: 30,
                            left: 30,
                            bottom: 20
                        }}
                        barCategoryGap="35%"
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis type="number" />
                        <YAxis
                            type="category"
                            dataKey="week"
                        />
                        <Tooltip />
                        <Legend />
                        <Bar
                            dataKey="totalGain"
                            fill="#e94444c0"
                            barSize={20}
                        />
                        <Bar
                            dataKey="totalSpent"
                            fill="#44e960c0"
                            barSize={20}
                        />
                        <Bar
                            dataKey="totalDeficit"
                            fill="#20b2abc0"
                            barSize={20}
                        />
                    </BarChart>
                </ResponsiveContainer>
                </div>
                <p className="border-l-2 px-4 ml-4 font-semibold mb-2 bg-purple-900/40 w-fit py-1 rounded-full border-l-red-400/40 shadow-md mt-5">Weekly Loss Distribution</p>
                <div className="bg-zinc-900/50 rounded-xl pt-4 pr-4 shadow-md">
                    <LineChart
                    style={{ width: '100%', maxHeight: '70vh', aspectRatio: 1.618 }}
                    responsive
                    data={weeklyStats}
                    margin={{
                        top: 15,
                        right: 0,
                        left: 0,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid />
                    <XAxis dataKey="week" />
                    <YAxis width="auto" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="weeklyLoss" strokeDasharray="2 2" />
                    <RechartsDevtools />
                </LineChart>
                </div>
            </div>
        </>
    )
}