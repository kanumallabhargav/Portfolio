import { useState } from "react";

export default function Calc() {
    const [remaining, setRemaining] = useState();
    const [net, setNet] = useState();
    const [isEnabled, setIsEnabled] = useState(false);
    const [formData, setFormData] = useState({
        gain: "",
        spent: ""
    });

     const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setNet(formData.gain-formData.spent)
        setRemaining(2500-formData.gain)
        setIsEnabled(true)
        setFormData({
            gain: "",
            spent: ""
        });
    };

    const handleCalcClear = async (e) => {
        setNet(null);
        setRemaining(null);
        setIsEnabled(false)
    }

    return (
        <>
            <p className="text-left border-l-4 pl-2 border-l-red-400/40 text-4xl bg-gradient-to-r py-2 from-zinc-500/30 to-transparent mb-4">Calculator</p>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-3 gap-2">
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
                        Calculate
                    </button>
                </div>
            </form>

            <div className="grid grid-cols-3 mt-20 bg-slate-600/10 p-12 rounded-lg gap-24">
                <div className="grid grid-cols-1 font-semibold bg-zinc-900/40 py-5 rounded-lg shadow-2xl">
                    <p className="text-center text-zinc-300/70 text-xl">Net Gain</p>
                    <p className="text-center text-5xl">
                        {net}
                    </p>
                    <p className="text-center text-sm text-zinc-300/70">kCal</p>
                </div>
                <div className="grid grid-cols-1 font-semibold bg-zinc-900/40 py-5 rounded-lg shadow-2xl">
                    <p className="text-center text-zinc-300/70 text-xl">Remaining</p>
                    <p className="text-center text-5xl">
                        {remaining}
                    </p>
                    <p className="text-center text-sm text-zinc-300/70">kCal</p>
                </div>
                <button 
            onClick={handleCalcClear} 
            className={` ${isEnabled ? 'text-red hover:before:bg-redborder-red-500 relative overflow-hidden border font-semibold  border-red-400/40 rounded px-3 text-slate-300 shadow-sm transition-all  before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-400/40 before:transition-all before:duration-100 hover:text-white hover:shadow-red-400/50 hover:before:left-0 hover:before:w-full' : 'cursor-not-allowed text-zinc-500'}`}
            disabled={!isEnabled}
            >Clear</button>
            </div>
        </>
    )
}