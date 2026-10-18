import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { IconBarsDownArrow, IconBarsUpArrow, IconDoubleArrows } from '../assets/static/Icons';

export default function Stats() {

    const [stats, setStats] = useState([]);
    const [refresh, setRefresh] = useState(1);
    const [rowCount, setRowCount] = useState(0)
    const [calcLoss, setCalcLoss] = useState(0);
    const [history, setHistory] = useState([]);
    const [sortConfig, setSortConfig] = useState({
        key: "statDate",
        direction: "asc",
    });
    const [formData, setFormData] = useState({
        gain: "",
        spent: "",
        protein: "",
        statDate: ""
    });

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/stats/list")
            .then((response) => {
                setStats(response.data);
                setRowCount(response.data.length)
            })
            .catch((error) => {
                console.error(error);
            });
    }, [refresh]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/history/vitals")
            .then((response) => {
                setHistory(response.data);
            })
            .catch((error) => {
                console.error(error);
            })
    }, [])

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/stats/getNewTfl")
            .then((response) => {
                setCalcLoss(response.data)
            })
            .catch((error) => {
                console.error(error);
            });
    }, [refresh]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.post(
            "http://localhost:8080/api/stats/add",
            {
                gain: Number(formData.gain),
                spent: Number(formData.spent),
                protein: Number(formData.protein),
                statDate: formData.statDate
            }
        );

        setFormData({
            gain: "",
            spent: "",
            protein: "",
            statDate: "",
        });

        setRefresh(refresh + 1);
    };

    const handleSort = (key) => {
        setSortConfig((prev) => ({
            key,
            direction:
                prev.key === key && prev.direction === "asc"
                    ? "desc"
                    : "asc",
        }));
    };

    const sortedStats = useMemo(() => {
        return [...stats].sort((row1, row2) => {
            const value1 = row1[sortConfig.key];
            const value2 = row2[sortConfig.key];

            let comparison;

            if (sortConfig.key === "statDate") {
                comparison = value1.localeCompare(value2);
            } else if (
                typeof value1 === "number" &&
                typeof value2 === "number"
            ) {
                comparison = value1 - value2;
            } else {
                comparison = String(value1).localeCompare(String(value2));
            }

            return sortConfig.direction === "asc"
                ? comparison
                : -comparison;
        });
    }, [stats, sortConfig]);

    const getSortArrow = (key) => {
        if (sortConfig.key !== key) return <IconDoubleArrows />;
        return sortConfig.direction === "asc" ? <IconBarsUpArrow /> : <IconBarsDownArrow />;
    };

    const resolveCase = (key) => {
        switch (key) {
            case 'statDate':
                return 'Date';
            case 'gain':
                return 'Gain';
            case 'spent':
                return 'Spent';
            case 'protein':
                return 'Protein';
            case 'netGain':
                return 'Net Gain';
            case 'totalDeficit':
                return 'Total Deficit';
        }
    }

    return (
        <div className="select-none">
            <div className="grid grid-cols-1 gap-4">
                <p className="text-left border-l-4 pl-2 border-l-red-400/40 text-4xl bg-gradient-to-r py-2 from-zinc-500/30 to-transparent">Stats</p>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-5 gap-2">
                        <input
                            type="date"
                            name="statDate"
                            value={formData.statDate}
                            onChange={handleChange}
                            className="rounded bg-purple-800/50 text-slate-300 p-3 font-semibold"
                            required
                        />

                        <input
                            type="number"
                            name="gain"
                            placeholder="Gain"
                            value={formData.gain}
                            onChange={handleChange}
                            className="rounded bg-purple-800/50 text-slate-300 p-3 font-semibold"
                            required
                        />

                        <input
                            type="number"
                            name="spent"
                            placeholder="Spent"
                            value={formData.spent}
                            onChange={handleChange}
                            className="rounded bg-purple-800/50 text-slate-300 p-3 font-semibold"
                            required
                        />

                        <input
                            type="number"
                            name="protein"
                            placeholder="Protein"
                            value={formData.protein}
                            onChange={handleChange}
                            className="rounded bg-purple-800/50 text-slate-300 p-3 font-semibold"
                            required
                        />
                        <button
                            type="submit"
                            className="
                            text-red hover:before:bg-redborder-red-500 relative overflow-hidden border font-semibold 
                            border-red-400/40 rounded px-3 text-slate-300 shadow-sm transition-all 
                            before:absolute before:bottom-0 before:left-0 before:top-0 
                            before:z-0 before:h-full before:w-0 before:bg-red-400/40 
                            before:transition-all before:duration-100 
                            hover:text-white hover:shadow-red-400/50 hover:before:left-0 
                            hover:before:w-full
                            ">
                            Save
                        </button>
                    </div>
                </form>
                <div className="grid grid-cols-1 gap-2 text-center shadow-xl">
                    <div className="grid grid-cols-6 bg-zinc-900/40 py-2">
                        {["statDate", "gain", "spent", "protein", "netGain", "totalDeficit"].map((key) => (
                            <th key={key} className="border-x grid xl:grid-cols-4 lg:grid-cols-3">
                                <span className="col-span-1 pl-4">
                                    {getSortArrow(key)}
                                </span>
                                <button
                                    type="button"
                                    className="col-span-2"
                                    onClick={() => handleSort(key)}>
                                    <span className="font-medium">
                                        {resolveCase(key)}
                                    </span>
                                </button>
                            </th>
                        ))}
                    </div>
                    {sortedStats.map((stat) => (<div key={stat.id} className="grid grid-cols-6 even:bg-purple-900/30 even:py-1 animate-row">
                        <div className="grid grid-cols-2 text-center">
                            <div className="text-right pr-3">
                                {new Date(stat.statDate).toLocaleDateString("en-US", {
                                    weekday: "long"
                                }).slice(0, 3)},
                            </div>
                            <div className="text-left">
                                {new Date(stat.statDate).toLocaleDateString("en-GB", {
                                    day: "numeric",
                                    month: "short",
                                    year: "numeric"
                                })}
                            </div>

                        </div>
                        <p>{stat.gain}</p>
                        <p>{stat.spent}</p>
                        <p>{stat.protein}</p>
                        <p>{stat.netGain}</p>
                        <p>{stat.totalDeficit}</p>
                    </div>
                    ))}
                    <div className="grid grid-cols-6 font-semibold bg-zinc-900/40 py-2">
                        <p className="border-r">Date</p>
                        <p className="border-r">Gain</p>
                        <p className="border-r">Spent</p>
                        <p className="border-r">Protein</p>
                        <p className="border-r">Net Gain</p>
                        <p>Total Deficit</p>

                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 mt-12 gap-3">
                <div className="grid grid-cols-1 font-semibold bg-zinc-900/40 py-5 rounded-lg shadow-2xl my-animation">
                    <p className="text-center text-zinc-300/70 text-xl">Total Fat Loss</p>
                    <p className="text-center text-5xl">
                        {history.tfl}
                    </p>
                    <p className="text-center text-sm text-zinc-300/70">kCal</p>
                </div>
                <div className="grid grid-cols-1 font-semibold bg-zinc-900/40 py-5 rounded-lg shadow-2xl my-animation">
                    <p className="text-center text-zinc-300/70 text-xl">Current Loss</p>
                    <p className="text-center text-5xl">
                        {history.cl}
                    </p>
                    <p className="text-center text-sm text-zinc-300/70">kg</p>
                </div>
                <div className="grid grid-cols-1 font-semibold bg-zinc-900/40 py-5 rounded-lg shadow-2xl my-animation">
                    <p className="text-center text-zinc-300/70 text-xl">Adjusted Loss</p>
                    <p className="text-center text-5xl">
                        {calcLoss}
                    </p>
                    <p className="text-center text-sm text-zinc-300/70">kg</p>
                </div>
            </div>
        </div>
    );
}