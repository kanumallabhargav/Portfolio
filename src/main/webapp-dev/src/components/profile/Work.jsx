export default function Work() {
    return (
        <div className="mt-2 mx-6 py-5 px-5 select-none">
            <p className="font-semibold text-3xl mb-5 text-zinc-800/90">Employment History</p>
        <div className="grid grid-cols-1 gap-2 text-center shadow-xl text-zinc-300 even:bg-purple-900/30 bg-slate-700/70 rounded-lg">
                <div className="grid grid-cols-3 font-semibold bg-zinc-900/40 py-2">
                    <p className="border-r">Organization</p>
                    <p className="border-r">Start Date</p>
                    <p className="">End Date</p>
                </div>
                <div className="grid grid-cols-3 py-1 bg-purple-900/30">
                    <p className="">Zen3</p>
                    <p className="">29 Sep 2016</p>
                    <p className="">8 Jul 2018</p>
                </div>
                <div className="grid grid-cols-3 py-1">
                    <p className="">Sportsplus</p>
                    <p className="">2 Nov 2020</p>
                    <p className="">2 Feb 2023</p>
                </div>
                <div className="grid grid-cols-3 py-1 bg-purple-900/30">
                    <p className="">SAIS</p>
                    <p className="">04 Apr 2023</p>
                    <p className="">16 Oct 2023</p>
                </div>
                <div className="grid grid-cols-3 py-1">
                    <p className="">CShare</p>
                    <p className="">27 Nov 2023</p>
                    <p className="text-lime-400/70 font-semibold">- Current -</p>
                </div>
            </div>
        </div>
    )
}