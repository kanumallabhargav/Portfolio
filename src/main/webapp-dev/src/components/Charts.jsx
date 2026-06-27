import DeficitTrendChart from './DeficitTrendChart'
import GainSpendChart from './GainSpendChart'
import NetGainChart from './NetGainChart'
import TflGoalChart from './TflGoalChart'

export default function Charts() {

    return (
        <div className="grid grid-cols-1 select-none">
            <p className="text-left border-l-4 pl-2 text-4xl bg-gradient-to-r py-2 from-zinc-500/30 to-transparent mb-4 border-l-red-400/40">Visualize</p>
            <p className="border-l-2 px-4 ml-4 font-semibold mb-2 bg-purple-900/40 w-fit py-1 rounded-full border-l-red-400/40 shadow-md">Gain / Spend Distribution</p>
            <div className="mb-5 rounded-xl bg-zinc-900/50 pt-4 pr-4 shadow-md">
                <GainSpendChart />
            </div>
            <p className="border-l-2 px-4 ml-4 font-semibold mb-2 bg-purple-900/40 w-fit py-1 rounded-full border-l-red-400/40 shadow-md">Deficit Trends</p>
            <div className="mb-5 rounded-xl bg-zinc-900/50 pt-4 pr-4 shadow-md">
                <DeficitTrendChart />
            </div>
            <div className='grid grid-cols-2'>
                <div className="grid grid-cols-1 pl-3">
                    <p className="border-l-2 px-4 ml-4 font-semibold mb-3 bg-purple-900/40 w-fit py-2 rounded-full border-l-red-400/40 shadow-md flex items-center h-fit">Total Loss Goal</p>
                    <div className='mb-4 rounded-xl bg-zinc-900/50 pt- pr-4 shadow-md mr-5 max-w-md'>
                        <TflGoalChart />
                        <div className='grid grid-cols-1 mb-3 ml-4'>
                        <p className='text-left'><span className='bg-[#00C49F] px-2.5 mr-2 rounded-full'></span>Completed</p>
                        <p className="text-left"><span className='bg-[#F56527] px-2.5 mr-2 rounded-full'></span>Remaining</p>
                    </div>
                    </div>
                </div>
                <div className="grid grid-cols-1">
                    <p className="border-l-2 px-4 ml-4 font-semibold bg-purple-900/40 w-fit py-2 rounded-full h-fit mb-2 border-l-red-400/40 shadow-md">Net Gain per Day</p>
                    <div className='mb-4 rounded-xl bg-zinc-900/50 pt-24 px-3 shadow-md'>
                        <NetGainChart />
                    </div>
                </div>
            </div>
        </div>
    )
}