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
                <IconData theme={statView === 'data' ? accent.textInvert : accent.text}/>
            </button>
            <button
                className={`
                    hover:border-yellow-300 p-1 mr-3 rounded-md
                    ${statView === 'charts' ? `bg-[${accent.accent}]` : 'bg-transparent'}
                `}
                onClick={() => { handleTabViewClick('charts') }}>
                <IconCharts theme={statView === 'charts' ? accent.textInvert : accent.text}/>
            </button>
            <button
                className={`
                    hover:border-yellow-300 p-1 mr-3 rounded-md
                    ${statView === 'calc' ? `bg-[${accent.accent}]` : 'bg-transparent'}
                `}
                onClick={() => { handleTabViewClick('calc') }}>
                <IconCalc theme={statView === 'calc' ? accent.textInvert : accent.text}/>
            </button>
            <button
                className={`
                    hover:border-yellow-300 p-1 mr-3 mb-4 rounded-md
                    ${statView === 'history' ? `bg-[${accent.accent}]` : 'bg-transparent'}
                `}
                onClick={() => { handleTabViewClick('history') }}>
                <IconHistory theme={statView === 'history' ? accent.textInvert : accent.text}/>
            </button>
            <button
                className={`
                    hover:border-yellow-300 p-1 mr-3 mb-4 rounded-md
                    ${statView === 'reports' ? `bg-[${accent.accent}]` : 'bg-transparent'}
                `}
                onClick={() => { handleTabViewClick('reports') }}>
                <IconReports theme={statView === 'reports' ? accent.textInvert : accent.text}/>
            </button>
            <button
                className={`
                    hover:border-yellow-300 p-1 mr-3 mb-4 rounded-md
                    ${statView === 'terminal' ? `bg-[${accent.accent}]` : 'bg-transparent'}
                `}
                onClick={() => { handleTabViewClick('terminal') }}>
                <IconTerminal theme={statView === 'terminal' ? accent.textInvert : accent.text}/>
            </button>
            {currentTabView[statView]}
        </div>
    )
}