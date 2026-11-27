import DeficitTrendChart from './DeficitTrendChart'
import GainSpendChart from './GainSpendChart'
import NetGainChart from './NetGainChart'
import LastThirtyDaysSpends from './LastThirtyDaysSpends'
import { useTheme } from '../context/ThemeContext'
import { useAccentColor } from '../context/AccentColorContext'
import accentColors from '../themes/accentColors'

export default function Charts() {
    const {theme} = useTheme();
    const {accentColor} = useAccentColor();
    const accent = accentColors[accentColor][theme];

    return (
        <div className="grid grid-cols-1 select-none">
            <p className={`text-left border-l-4 pl-2 border-l-red-400/40 text-4xl bg-gradient-to-r py-2 from-[${accent.foreground}] to-transparent`}>Visualize</p>
            <p className={`border-l-2 px-4 ml-4 font-semibold bg-[${accent.foreground}] w-fit py-2 rounded-full h-fit mb-2 border-l-red-400/40 shadow-md mt-12 text-[${accent.text}]`}>Gain / Spend Distribution</p>
            <div className={`mb-5 rounded-xl  pr-4 shadow-md bg-[${accent.foreground}]/30`}>
                <GainSpendChart />
            </div>
            <p className={`border-l-2 px-4 ml-4 font-semibold bg-[${accent.foreground}] w-fit py-2 rounded-full h-fit mb-2 border-l-red-400/40 shadow-md mt-12 text-[${accent.text}]`}>Deficit Trends</p>
            <div className={`mb-5 rounded-xl pr-4 shadow-md bg-[${accent.foreground}]/30`}>
                <DeficitTrendChart />
            </div>
            <div className='grid grid-cols-2'>
                {/* Phased out TFL Goal chart */}
                {/* <div className="grid grid-cols-1 pl-3">
                    <p className={`border-l-2 px-4 ml-4 font-semibold bg-[${accent.foreground}] w-fit py-2 rounded-full h-fit mb-2 border-l-red-400/40 shadow-md mt-12 text-[${accent.text}]`}>Total Loss Goal</p>
                    <div className='mb-4 rounded-xl pt- pr-4 shadow-md mr-5 max-w-md'>
                        <TflGoalChart />
                        <div className='grid grid-cols-1 mb-3 ml-4'>
                        <p className='text-left'><span className='bg-[#00C49F] px-2.5 mr-2 rounded-full'></span>Completed</p>
                        <p className="text-left"><span className='bg-[#F56527] px-2.5 mr-2 rounded-full'></span>Remaining</p>
                    </div>
                    </div>
                </div> */}
                <div className="grid grid-cols-1 col-span-2">
                    <p className={`border-l-2 px-4 ml-4 font-semibold bg-[${accent.foreground}] w-fit py-2 rounded-full h-fit mb-2 border-l-red-400/40 shadow-md mt-12 text-[${accent.text}]`}>Net Gain per Day</p>
                    <div className={`mb-4 rounded-xl px-3 shadow-md bg-[${accent.foreground}]/30`}>
                        <NetGainChart theme={accent.text}/>
                    </div>
                </div>
            </div>
            <p className={`border-l-2 px-4 ml-4 mb-2 mt-12 font-semibold bg-[${accent.foreground}] w-fit py-2 rounded-full h-fit border-l-red-400/40 shadow-md text-[${accent.text}]`}>Spent Distribution</p>
            <div className={`bg-[${accent.foreground}]/30 p-6 rounded-xl shadow-md`} >
            <LastThirtyDaysSpends />
            </div>
        </div>
    )
}