import { useEffect, useState } from "react"
import axios from "axios";

export default function History() {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/history/list")
            .then((response) => {
                setHistory(response.data);
            })
            .catch((error) => {
                console.error(error);
            })
    }, [])

    return (
        <div className="grid grid-cols-1 gap-2 text-center">
            <p className="text-left border-l-4 pl-2 border-l-red-400/40 text-4xl bg-gradient-to-r py-2 from-zinc-500/30 to-transparent mb-2">Historical Data</p>
            <div className="grid grid-cols-5 font-semibold bg-zinc-900/40 py-2">
                <p className="border-r">Date</p>
                <p className="border-r">Total Fat Loss<p className="text-sm text-slate-50/30 font-light">kCal</p></p>
                <p className="border-r">Current Loss<p className="text-sm text-slate-50/30 font-light">kg</p></p>
                <p className="border-r">Remaining Loss<p className="text-sm text-slate-50/30 font-light">kg</p></p>
                <p>ETA<p className="text-sm text-slate-50/30 font-light">days</p></p>
            </div>
            {history.map((hist) => (<div key={hist.id} className="grid grid-cols-5 even:bg-purple-900/30 even:py-1">
                <div className="grid grid-cols-2 text-center">
                    <div className="text-right pr-3">
                        {new Date(hist.statDate).toLocaleDateString("en-US", {
                            weekday: "long"
                        }).slice(0, 3)},
                    </div>
                    <div className="text-left">
                        {new Date(hist.statDate).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "short",
                            year: "numeric"
                        })}
                    </div>

                </div>
                <p>{hist.totalFatLoss}</p>
                <p>{hist.currentLoss.toFixed(2)}</p>
                <p>{hist.remainingLoss.toFixed(2)}</p>
                <p>{hist.eta.toFixed(1)}</p>
            </div>
            ))}
            <div className="grid grid-cols-5 font-semibold bg-zinc-900/40 py-2">
                <p className="border-r">Date</p>
                <p className="border-r">Total Fat Loss</p>
                <p className="border-r">Current Loss</p>
                <p className="border-r">Remaining Loss</p>
                <p>ETA</p>
            </div>
        </div>
    )
}