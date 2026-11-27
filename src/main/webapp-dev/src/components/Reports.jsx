import { useEffect, useState } from "react";
import axios from "axios";
import { RechartsDevtools } from '@recharts/devtools';
import { useTheme } from "../context/ThemeContext";
import { useAccentColor } from "../context/AccentColorContext";
import accentColors from "../themes/accentColors";
import { themeSelector } from "../themes/themeSelector";
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
    LineChart,
    ComposedChart
} from "recharts";


export default function Reports() {
    const [weeklyStats, setWeeklyStats] = useState([]);
    const [currentWeekProgress, setCurrentWeekProgress] = useState([]);
    const [currentWeekGains, setCurrentWeekGains] = useState([]);
    const [currentWeekSpends, setCurrentWeekSpends] = useState([]);
    const { theme } = useTheme();
    const styles = themeSelector(theme);
    const { accentColor } = useAccentColor();
    const accent = accentColors[accentColor][theme];

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

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/reports/current-week/gains")
            .then((response) => {
                setCurrentWeekGains(response.data);
            })
            .catch((error) => {
                console.error(error);
            })
    }, [])

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/reports/current-week/spends")
            .then((response) => {
                setCurrentWeekSpends(response.data);
            })
            .catch((error) => {
                console.error(error);
            })
    }, [])

    const GAIN_THRESHOLD = 12000;

    const averageSpent = currentWeekSpends.length > 0
                         ? currentWeekSpends.reduce(
                            (total, item) => total + item.spent, 0
                         ) / currentWeekSpends.length
                         : 0;

    const averageGain = currentWeekGains.length > 0
                         ? currentWeekGains.reduce(
                            (total, item) => total + item.gain, 0
                         ) / currentWeekGains.length
                         : 0;                         

    return (
        <>
            <div className="text-center">
                <p className={`text-left border-l-4 pl-2 border-l-red-400/40 text-4xl bg-gradient-to-r py-2 from-[${accent.foreground}] to-transparent mb-5`}>Weekly Metrics</p>
                <div className="grid grid-cols-4 mb-3 gap-2">
                    <div className={`grid grid-cols-1 font-semibold bg-[${accent.foreground}] py-5 rounded-lg shadow-2xl`}>
                        <p className={`text-center text-[${accent.text}]/70 text-xl`}>Current Gain / Limit</p>
                        <p className={`text-center text-4xl ${currentWeekProgress.currentGain > currentWeekProgress.gainLimit ? `text-[${styles.danger}]` : `text-[${styles.success}]`} animate animate-pulse hover:animate-none`}>
                            {currentWeekProgress.currentGain}
                        </p>
                        <p className={`text-center text-sm text-[${accent.text}]/70 mt-1`}>{currentWeekProgress.gainLimit}</p>
                    </div>
                    <div className={`grid grid-cols-1 font-semibold bg-[${accent.foreground}] py-5 rounded-lg shadow-2xl`}>
                        <p className={`text-center text-[${accent.text}]/70 text-xl`}>Current Spent</p>
                        <p className={`text-center text-4xl text-[${accent.text}]`}>
                            {currentWeekProgress.currentSpent}
                        </p>
                    </div>
                    <div className={`grid grid-cols-1 font-semibold bg-[${accent.foreground}] py-5 rounded-lg shadow-2xl`}>
                        <p className={`text-center text-[${accent.text}]/70 text-xl`}>Remaining Gain</p>
                        <p className={`text-center text-4xl text-[${accent.text}]`}>
                            {currentWeekProgress.remainingGain}
                        </p>
                    </div>
                    <div className={`grid grid-cols-1 font-semibold bg-[${accent.foreground}] py-5 rounded-lg shadow-2xl`}>
                        <p className={`text-center text-[${accent.text}]/70 text-xl`}>Daily Limit</p>
                        <p className={`text-center text-4xl text-[${accent.text}]`}>
                            {currentWeekProgress.dailyLimit}
                        </p>
                    </div>
                </div>
                <div className={`grid grid-cols-5 font-semibold bg-[${accent.foreground}] py-2 gap-2`}>
                    <p className="border-r">Week</p>
                    <p className="border-r">Total Gain</p>
                    <p className="border-r">Total Spent</p>
                    <p className="border-r">Total Deficit</p>
                    <p>TFL</p>
                </div>
                {weeklyStats.map((ws) => (<div key={ws.id} className={`grid grid-cols-5 even:bg-[${accent.foreground}] even:py-1 animate-row mt-2`}>
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
                <div className={`grid grid-cols-5 font-semibold bg-[${accent.foreground}] py-2 gap-2 shadow-lg mt-3`}>
                    <p className="border-r">Week</p>
                    <p className="border-r">Total Gain</p>
                    <p className="border-r">Total Spent</p>
                    <p className="border-r">Total Deficit</p>
                    <p>TFL</p>
                </div>
            </div>
            <div className="flex flex-col mt-20">
                <p className={`border-l-2 px-4 ml-4 font-semibold bg-[${accent.foreground}] w-fit py-2 rounded-full h-fit border-l-red-400/40 shadow-md text-[${accent.text}]`}>Weekly Deficit Trends</p>
                <div className="rounded-xl pt-4 pr-4 shadow-md">
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
                <p className={`border-l-2 mt-8 px-4 ml-4 font-semibold bg-[${accent.foreground}] w-fit py-2 rounded-full h-fit border-l-red-400/40 shadow-md text-[${accent.text}]`}>Weekly Loss Distribution</p>
                <div className="rounded-xl pt-4 pr-4 shadow-md">
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
                        <Line type="monotone" dataKey="weeklyLoss" strokeDasharray="2 2" stroke={accent.text} />
                        <RechartsDevtools />
                    </LineChart>
                </div>
                <div className="grid grid-cols-2 mt-5 gap-5">
                    <div className="rounded-xl pt-4 pr-4 shadow-md">
                        <p className={`border-l-2 px-4 ml-4 font-semibold bg-[${accent.foreground}] w-fit py-2 rounded-full h-fit border-l-red-400/40 shadow-md text-[${accent.text}]`}>Gain Distribution</p>
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
                            <Line type="monotone" dataKey="totalGain" strokeDasharray="2 2" stroke={accent.text} />
                            <RechartsDevtools />
                        </LineChart>
                    </div>
                    <div className="rounded-xl pt-4 pr-4 shadow-md">
                        <p className={`border-l-2 px-4 ml-4 font-semibold bg-[${accent.foreground}] w-fit py-2 rounded-full h-fit border-l-red-400/40 shadow-md text-[${accent.text}]`}>Spent Distribution</p>
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
                            <Line type="monotone" dataKey="totalSpent" strokeDasharray="2 2" stroke={accent.text} />
                            <RechartsDevtools />
                        </LineChart>
                    </div>
                    <div className="rounded-xl pt-4 pr-4 shadow-md">
                        <div className="flex justify-between items-center">
                            <p className={`border-l-2 px-4 ml-4 font-semibold bg-[${accent.foreground}] w-fit py-2 rounded-full h-fit border-l-red-400/40 shadow-md text-[${accent.text}]`}>Current Week Gains</p>
                            <p>Average: <span className="font-semibold">{averageGain}</span></p>
                        </div>
                        <ComposedChart
                            style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
                            responsive
                            data={currentWeekGains}
                            margin={{
                                top: 20,
                                right: 0,
                                bottom: 0,
                                left: 0,
                            }}
                        >
                            <CartesianGrid stroke={accent.accent} />
                            <XAxis dataKey="day" scale="band" />
                            <YAxis label={{ value: 'Gain', angle: -90, position: 'insideLeft' }} width="auto" />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="gain" barSize={20} fill={accent.accent} />
                            <Line type="monotone" dataKey="gain" stroke={accent.accent} />
                            <RechartsDevtools />
                        </ComposedChart>
                    </div>
                    <div className={`rounded-xl pt-4 pr-4 shadow-md`}>
                        <div className="flex justify-between items-center">
                            <p className={`border-l-2 px-4 ml-4 font-semibold bg-[${accent.foreground}] w-fit py-2 rounded-full h-fit border-l-red-400/40 shadow-md text-[${accent.text}]`}>Current Week Spends</p>
                            <p>Average: <span className="font-semibold">{averageSpent}</span></p>
                        </div>
                        <ComposedChart
                            style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
                            responsive
                            data={currentWeekSpends}
                            margin={{
                                top: 20,
                                right: 0,
                                bottom: 0,
                                left: 0,
                            }}
                        >
                            <CartesianGrid stroke={accent.accent} />
                            <XAxis dataKey="day" scale="band"/>
                            <YAxis label={{ value: 'Spent', angle: -90, position: 'insideLeft'}} width="auto" />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="spent" barSize={30} fill={accent.accent} />
                            <Line type="monotone" dataKey="spent" stroke={accent.accent} />
                            <RechartsDevtools />
                        </ComposedChart>
                    </div>
                </div>
            </div>
        </>
    )
}