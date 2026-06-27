import { useEffect, useState } from "react";
import axios from "axios";
import { IconCharts } from "../assets/static/Icons";

export default function Stats() {

    const [stats, setStats] = useState([]);
    const [change, setChange] = useState(false);
    const [refresh, setRefresh] = useState(1);
    const [rowCount, setRowCount] = useState(0)
    const [formData, setFormData] = useState({
        gain: "",
        spent: "",
        protein: "",
        statDate: ""
    });

    var tfl = 0;
    var cl = tfl;
    var rl = cl;
    var tempEta = rl;

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

    function calcNetGain(gain, spent) {
        return gain - spent;
    }

    function calcTotalDeficit(netGain) {
        const tdRow = 2500 - netGain;
        tfl = tfl + tdRow
        cl = tfl / 7700;
        rl = 10 - cl;
        tempEta = rl * 6;

        return tdRow;
    }

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
                    <div className="grid grid-cols-6 font-semibold bg-zinc-900/40 py-2">
                        <p className="border-r">Date</p>
                        <p className="border-r">Gain</p>
                        <p className="border-r">Spent</p>
                        <p className="border-r">Protein</p>
                        <p className="border-r">Net Gain</p>
                        <p>Total Deficit</p>
                    </div>
                    {stats.map((stat) => (<div key={stat.id} className="grid grid-cols-6 even:bg-purple-900/30 even:py-1">
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
                        <p>{calcNetGain(stat.gain, stat.spent)}</p>
                        <p>{calcTotalDeficit(calcNetGain(stat.gain, stat.spent))}</p>
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
            <div className="grid grid-cols-4 mt-12 gap-3">
                <div className="grid grid-cols-1 font-semibold bg-zinc-900/40 py-5 rounded-lg shadow-2xl">
                    <p className="text-center text-zinc-300/70 text-xl">Total Fat Loss</p>
                    <p className="text-center text-5xl">
                        {tfl}
                    </p>
                    <p className="text-center text-sm text-zinc-300/70">kCal</p>
                </div>
                <div className="grid grid-cols-1 font-semibold bg-zinc-900/40 py-5 rounded-lg shadow-2xl">
                    <p className="text-center text-zinc-300/70 text-xl">Current Loss</p>
                    <p className="text-center text-5xl">
                        {cl.toFixed(2)}
                    </p>
                    <p className="text-center text-sm text-zinc-300/70">kg</p>
                </div>
                <div className="grid grid-cols-1 font-semibold bg-zinc-900/40 py-5 rounded-lg shadow-2xl">
                    <p className="text-center text-zinc-300/70 text-xl">Remaining Loss</p>
                    <p className="text-center text-5xl">
                        {rl.toFixed(2)}
                    </p>
                    <p className="text-center text-sm text-zinc-300/70">kg</p>
                </div>
                <div className="grid grid-cols-1 font-semibold bg-zinc-900/40 py-5 rounded-lg shadow-2xl">
                    <p className="text-center text-zinc-300/70 text-xl">ETA</p>
                    <p className="text-center text-5xl">
                        {(((77000 * rowCount)/tfl).toFixed())-13}
                    </p>
                    <p className="text-center text-sm text-zinc-300/70">days</p>
                </div>
            </div>
        </div>
    );
}