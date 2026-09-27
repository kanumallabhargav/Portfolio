import { useState } from "react";
import { IconCalc, IconCharts, IconData, IconHistory } from "../assets/static/Icons";
import Stats from "./Stats";
import Charts from "./Charts";
import Calc from "./Calc";
import History from "./History";

export default function StatsContainer() {
    const [statView, setStatView] = useState('data')

    function handleTabViewClick(statViewTab) {
        setStatView(statViewTab);
    }

    const currentTabView = {
        data: <Stats />,
        charts: <Charts />,
        calc: <Calc />,
        history: <History />
    }

    const [selectedValue, setSelectedValue] = useState('v1');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div className="text-zinc-300">
            <select value={selectedValue} onChange={handleChange}
            className="text-black w-12 rounded-md bg-slate-300/50 align-super mr-5"
            >
                <option value="v1" className="">v1</option>
                <option value="v2">v2</option>
                <option value="v3">v3</option>
            </select>
            <button
                className={`
                    hover:border-yellow-300 p-1 mr-3 rounded-md
                    ${statView === 'data' ? 'bg-purple-800/80' : 'bg-transparent'}
                `}
                onClick={() => { handleTabViewClick('data') }}>
                <IconData />
            </button>
            <button
                className={`
                    hover:border-yellow-300 p-1 mr-3 rounded-md
                    ${statView === 'charts' ? 'bg-purple-800/80' : 'bg-transparent'}
                `}
                onClick={() => { handleTabViewClick('charts') }}>
                <IconCharts />
            </button>
            <button
                className={`
                    hover:border-yellow-300 p-1 mr-3 rounded-md
                    ${statView === 'calc' ? 'bg-purple-800/80' : 'bg-transparent'}
                `}
                onClick={() => { handleTabViewClick('calc') }}>
                <IconCalc />
            </button>
            <button
                className={`
                    hover:border-yellow-300 p-1 mr-3 mb-4 rounded-md
                    ${statView === 'history' ? 'bg-purple-800/80' : 'bg-transparent'}
                `}
                onClick={() => { handleTabViewClick('history') }}>
                <IconHistory />
            </button>
            {currentTabView[statView]}
        </div>
    )
}