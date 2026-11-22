import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import {
    IconBarsDownArrow,
    IconBarsUpArrow,
    IconDoubleArrows,
    IconActions,
    IconComment,
    IconEdit,
    IconDelete,
    IconSuccess,
    IconFailure
} from '../assets/static/Icons';
import { useTheme } from "../context/ThemeContext";
import { useAccentColor } from "../context/AccentColorContext";
import accentColors from "../themes/accentColors";
import { themeSelector } from "../themes/themeSelector";

export default function Stats() {

    const [stats, setStats] = useState([]);
    const [refresh, setRefresh] = useState(1);
    const [rowCount, setRowCount] = useState(0)
    const [calcLoss, setCalcLoss] = useState(0);
    const [history, setHistory] = useState([]);
    const [showToast, setShowToast] = useState(false);
    const [saveSuccess, setSaveSuccess] = useState();
    const [sortConfig, setSortConfig] = useState({
        key: "statDate",
        direction: "asc",
    });
    const [formData, setFormData] = useState({
        gain: "",
        spent: "",
        protein: "",
        statDate: "",
        comments: ""
    });
    const { theme } = useTheme();
    const { accentColor } = useAccentColor();
    const accent = accentColors[accentColor][theme];
    const styles = themeSelector(theme);

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

        try {
            await axios.post(
                "http://localhost:8080/api/stats/add",
                {
                    gain: Number(formData.gain),
                    spent: Number(formData.spent),
                    protein: Number(formData.protein),
                    statDate: formData.statDate,
                    comments: formData.comments
                }
            );

            setFormData({
                gain: "",
                spent: "",
                protein: "",
                statDate: "",
                comments: "",
            });

            setRefresh(prev => prev + 1);
            setSaveSuccess(true);
        } catch (error) {
            setSaveSuccess(false);
            console.error("Error saving stats:", error);
        } finally {
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false);
            }, 4000);
        }
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
            case 'comments':
                return 'Comments';
        }
    }

    return (
        <div className="select-none">
            <div
                className={`
                    fixed top-5 left-1/2 -translate-x-1/2 z-50
                    px-6 py-3 rounded-xl shadow-lg
                    bg-[${accent.background}] text-[${accent.text}]
                    transition-all duration-500 ease-in-out
                    ${showToast
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-20 opacity-0 pointer-events-none"
                    }
                `}
            >
                <p className="text-sm font-medium flex gap-2 items-center">
                    <span> {
                        saveSuccess ?
                            <IconSuccess theme={styles.success} /> :
                            <IconFailure theme={styles.danger} />
                    }
                    </span>
                    {
                        saveSuccess ? `Stats Updated!` :
                            `Failed to update stats`
                    }
                </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
                <p className={`text-left border-l-4 pl-2 border-l-red-400/40 text-4xl bg-gradient-to-r py-2 from-[${accent.foreground}] to-transparent`}>Stats</p>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-5 gap-2">
                        <input
                            type="date"
                            name="statDate"
                            value={formData.statDate}
                            onChange={handleChange}
                            className={`rounded bg-[${accent.foreground}] text-[${accent.text}] p-3 font-semibold`}
                            required
                        />
                        <input
                            type="number"
                            name="gain"
                            placeholder="Gain"
                            value={formData.gain}
                            onChange={handleChange}
                            className={`rounded bg-[${accent.foreground}] text-[${accent.text}] placeholder:text-[${accent.text}] p-3 font-semibold`}
                            required
                        />

                        <input
                            type="number"
                            name="spent"
                            placeholder="Spent"
                            value={formData.spent}
                            onChange={handleChange}
                            className={`rounded bg-[${accent.foreground}] text-[${accent.text}] placeholder:text-[${accent.text}] p-3 font-semibold`}
                            required
                        />

                        <input
                            type="number"
                            name="protein"
                            placeholder="Protein"
                            value={formData.protein}
                            onChange={handleChange}
                            className={`rounded bg-[${accent.foreground}] text-[${accent.text}] placeholder:text-[${accent.text}] p-3 font-semibold`}
                            required
                        />

                        <button
                            type="submit"
                            className={`
                            text-[${styles.success}] hover:before:bg-redborder-red-500 relative overflow-hidden border font-semibold 
                            border-[${styles.success}]/40 rounded px-3 text-slate-300 shadow-sm transition-all 
                            before:absolute before:bottom-0 before:left-0 before:top-0 
                            before:z-0 before:h-full before:w-0 before:bg-[${styles.success}]/40
                            before:transition-all before:duration-100 
                            hover:shadow-[${accent.accent}]/50 hover:before:left-0 
                            hover:before:w-full
                            row-span-2
                            `}>
                            Save
                        </button>
                        <input
                            type="text"
                            name="comments"
                            placeholder="Comments"
                            value={formData.comments}
                            onChange={handleChange}
                            className={`rounded bg-[${accent.foreground}] text-[${accent.text}] placeholder:text-[${accent.text}] p-3 font-semibold col-span-4`}
                            required
                        />
                    </div>
                </form>
                <div className="grid grid-cols-1 gap-2 text-center shadow-xl">
                    <div className={`grid grid-cols-7 bg-[${accent.header}] py-2`}>
                        {["statDate", "gain", "spent", "protein", "netGain", "totalDeficit", "comments"].map((key) => (
                            <th key={key}
                                className={`border-x grid xl:grid-cols-4 lg:grid-cols-3 text-[${accent.text}]`}>
                                {key === "comments" ?
                                    <div className="justify-items-center col-span-4"><IconActions theme={accent.text} />
                                    </div> :
                                    (<>
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
                                    </>)
                                }
                            </th>
                        ))}
                    </div>
                    {sortedStats.map((stat) => (<div key={stat.id}
                        className={`grid grid-cols-7 even:bg-[${accent.foreground}] even:py-1 odd:bg-[${accent.background}]/50 animate-row text-[${accent.text}]`}>
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
                        <div className="flex justify-center gap-4">
                            <div className="relative group inline-block">
                                <button className="">
                                    <IconComment theme={accent.text} />
                                </button>
                                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2
                                            px-3 py-2 rounded-lg
                                          bg-gray-900 text-white text-xs whitespace-nowrap
                                            opacity-0 invisible
                                            group-hover:opacity-100 group-hover:visible
                                            transition-all duration-200
                                            pointer-events-none">
                                    {stat.comments === null ? 'No Comments' : stat.comments}
                                </span>
                            </div>
                            <button><IconEdit theme={accent.text} /></button>
                            <button><IconDelete theme={accent.text} /></button>
                        </div>
                    </div>
                    ))}
                    <div className={`grid grid-cols-6 bg-[${accent.header}] py-2`}>
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
                <div
                    className={`grid grid-cols-1 font-semibold bg-[${accent.foreground}] py-5 rounded-lg shadow-2xl my-animation`}>
                    <p className={`text-center text-[${accent.text}]/70 text-xl`}>Total Fat Loss</p>
                    <p className={`text-center text-5xl text-[${accent.text}]`}>
                        {history.tfl}
                    </p>
                    <p className={`text-center text-sm text-[${accent.text}]/70`}>kCal</p>
                </div>
                <div
                    className={`grid grid-cols-1 font-semibold bg-[${accent.foreground}] py-5 rounded-lg shadow-2xl my-animation`}>
                    <p className={`text-center text-[${accent.text}]/70 text-xl`}>Current Loss</p>
                    <p className={`text-center text-5xl text-[${accent.text}]`}>
                        {history.cl}
                    </p>
                    <p className={`text-center text-sm text-[${accent.text}]/70`}>kg</p>
                </div>
                <div
                    className={`grid grid-cols-1 font-semibold bg-[${accent.foreground}] py-5 rounded-lg shadow-2xl my-animation`}>
                    <p className={`text-center text-[${accent.text}]/70 text-xl`}>Adjusted Loss</p>
                    <p className={`text-center text-5xl text-[${accent.text}]`}>
                        {calcLoss}
                    </p>
                    <p className={`text-center text-sm text-[${accent.text}]/70`}>kg</p>
                </div>
            </div>
        </div>
    );
}