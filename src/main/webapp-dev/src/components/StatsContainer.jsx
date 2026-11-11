import { useState } from "react";
import {IconCalc, IconCharts, IconData, IconHistory, IconReports, IconTerminal} from "../assets/static/Icons";
import Stats from "./Stats";
import Charts from "./Charts";
import Calc from "./Calc";
import History from "./History";
import Reports from "./Reports.jsx";
import Terminal from "./Terminal.jsx";
import { useTheme } from "../context/ThemeContext.jsx";
import { useAccentColor } from "../context/AccentColorContext.jsx";
import accentColors from "../themes/accentColors.js";

export default function StatsContainer() {
    const [statView, setStatView] = useState('data')

    function handleTabViewClick(statViewTab) {
        setStatView(statViewTab);
    }

    const currentTabView = {
        data: <Stats />,
        charts: <Charts />,
        calc: <Calc />,
        history: <History />,
        reports: <Reports />,
        terminal: <Terminal />
    }

    const {theme} = useTheme();
    const {accentColor} = useAccentColor();
    const accent = accentColors[accentColor][theme];

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div className={`text-[${accent.text}] nav-container`}>
            <button
                className={`
                    hover:border-yellow-300 p-1 mr-3 rounded-md
                    ${statView === 'data' ? `bg-[${accent.accent}]` : 'bg-transparent'}
                `}
                onClick={() => { handleTabViewClick('data') }}>
                <IconData />
            </button>
            <button
                className={`
                    hover:border-yellow-300 p-1 mr-3 rounded-md
                    ${statView === 'charts' ? `bg-[${accent.accent}]` : 'bg-transparent'}
                `}
                onClick={() => { handleTabViewClick('charts') }}>
                <IconCharts />
            </button>
            <button
                className={`
                    hover:border-yellow-300 p-1 mr-3 rounded-md
                    ${statView === 'calc' ? `bg-[${accent.accent}]` : 'bg-transparent'}
                `}
                onClick={() => { handleTabViewClick('calc') }}>
                <IconCalc />
            </button>
            <button
                className={`
                    hover:border-yellow-300 p-1 mr-3 mb-4 rounded-md
                    ${statView === 'history' ? `bg-[${accent.accent}]` : 'bg-transparent'}
                `}
                onClick={() => { handleTabViewClick('history') }}>
                <IconHistory />
            </button>
            <button
                className={`
                    hover:border-yellow-300 p-1 mr-3 mb-4 rounded-md
                    ${statView === 'reports' ? `bg-[${accent.accent}]` : 'bg-transparent'}
                `}
                onClick={() => { handleTabViewClick('reports') }}>
                <IconReports />
            </button>
            <button
                className={`
                    hover:border-yellow-300 p-1 mr-3 mb-4 rounded-md
                    ${statView === 'terminal' ? `bg-[${accent.accent}]` : 'bg-transparent'}
                `}
                onClick={() => { handleTabViewClick('terminal') }}>
                <IconTerminal />
            </button>
            {currentTabView[statView]}
        </div>
    )
}