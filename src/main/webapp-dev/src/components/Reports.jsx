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
    ReferenceLine,
    LineChart
} from "recharts";


export default function Reports() {
    const [weeklyStats, setWeeklyStats] = useState([]);
    const [currentWeekProgress, setCurrentWeekProgress] = useState([])

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/reports/list")
            .then((response) => {
                setWeeklyStats(response.data);
            })
            .catch((error) => {
                console.error(error);
            })
    }, [])

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/reports/progress")
            .then((response) => {
                setCurrentWeekProgress(response.data);
            })
            .catch((error) => {
                console.error(error);
            })
    }, [])

    const GAIN_THRESHOLD = 12000;

    return (
        <>
            <div className="text-center">
                <p className="text-left border-l-4 pl-2 border-l-red-400/40 text-4xl bg-gradient-to-r py-2 from-zinc-500/30 to-transparent mb-2">Weekly Metrics</p>
                <div className="grid grid-cols-4 mb-3">
                    <div className="grid grid-cols-1 font-semibold bg-zinc-900/40 py-5 rounded-lg shadow-2xl">
                    <p className="text-center text-zinc-300/70 text-xl">Current Gain / Limit</p>
                    <p className="text-center text-4xl text-white">
                        {currentWeekProgress.currentGain}
                    </p>
                    <p className="text-center text-sm text-zinc-300/70 mt-1">{currentWeekProgress.gainLimit}</p>
                </div>
                <div className="grid grid-cols-1 font-semibold bg-zinc-900/40 py-5 rounded-lg shadow-2xl">
                    <p className="text-center text-zinc-300/70 text-xl">Current Spent</p>
                    <p className="text-center text-4xl text-white">
                        {currentWeekProgress.currentSpent}
                    </p>
                </div>
                <div className="grid grid-cols-1 font-semibold bg-zinc-900/40 py-5 rounded-lg shadow-2xl">
                    <p className="text-center text-zinc-300/70 text-xl">Remaining Gain</p>
                    <p className="text-center text-4xl text-white">
                        {currentWeekProgress.remainingGain}
                    </p>
                </div>
                <div className="grid grid-cols-1 font-semibold bg-zinc-900/40 py-5 rounded-lg shadow-2xl">
                    <p className="text-center text-zinc-300/70 text-xl">Daily Limit</p>
                    <p className="text-center text-4xl text-white">
                        {currentWeekProgress.dailyLimit}
                    </p>
                </div>
                </div>
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
                <div className="grid grid-cols-5 font-semibold bg-zinc-900/40 py-2 gap-2 shadow-lg">
                    <p className="border-r">Week</p>
                    <p className="border-r">Total Gain</p>
                    <p className="border-r">Total Spent</p>
                    <p className="border-r">Total Deficit</p>
                    <p>TFL</p>
                </div>
            </div>
            <div className="flex flex-col mt-20">
                <p className="border-l-2 px-4 ml-4 font-semibold mb-2 bg-purple-900/40 w-fit py-1 rounded-full border-l-red-400/40 shadow-md">Weekly Deficit Trends</p>
                <div className="bg-zinc-900/50 rounded-xl pt-4 pr-4 shadow-md">
                    <ResponsiveContainer width="100%" height={600}>
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
                                fill="#35B049"
                                barSize={20}
                            />
                            <Bar
                                dataKey="totalDeficit"
                                fill="#3620B2"
                                barSize={20}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <p className="border-l-2 px-4 ml-4 font-semibold mb-2 bg-purple-900/40 w-fit py-1 rounded-full border-l-red-400/40 shadow-md mt-5">Weekly Loss Distribution</p>
                <div className="bg-zinc-900/50 rounded-xl pt-4 pr-4 shadow-md">
                    <LineChart
                        style={{ width: '100%', maxHeight: '30vh', aspectRatio: 1.618 }}
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
                <div className="grid grid-cols-2 mt-5 gap-5">
                    <div className="bg-zinc-900/50 rounded-xl pt-4 pr-4 shadow-md">
                        <p className="border-l-2 px-4 ml-4 font-semibold mb-2 bg-purple-900/40 w-fit py-1 rounded-full border-l-red-400/40 shadow-md mt-5">Gain Distribution</p>
                        <LineChart
                            style={{ width: '100%', maxHeight: '30vh', aspectRatio: 1.618 }}
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
                            <ReferenceLine
                                y={GAIN_THRESHOLD}
                                stroke="red"
                                strokeWidth={2}
                                label={{ value: 'Threshold', fill: 'red', position: 'left' }}
                            />
                            <Line type="monotone" dataKey="totalGain" strokeDasharray="2 2" />
                            <RechartsDevtools />
                        </LineChart>
                    </div>
                    <div className="bg-zinc-900/50 rounded-xl pt-4 pr-4 shadow-md">
                        <p className="border-l-2 px-4 ml-4 font-semibold mb-2 bg-purple-900/40 w-fit py-1 rounded-full border-l-red-400/40 shadow-md mt-5">Spent Distribution</p>
                        <LineChart
                            style={{ width: '100%', maxHeight: '30vh', aspectRatio: 1.618 }}
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
                            <Line type="monotone" dataKey="totalSpent" strokeDasharray="2 2" />
                            <RechartsDevtools />
                        </LineChart>
                    </div>
                </div>
            </div>
        </>
    )
}