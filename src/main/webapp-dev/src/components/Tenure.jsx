import { useState } from "react";


export default function Tenure() {

    const start = new Date('27 Nov 2023');
    const end = new Date();

    // Total days
    const totalDays = Math.floor(
        (end - start) / (1000 * 60 * 60 * 24)
    );

    // Years, Months, Days
    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();

    if (days < 0) {
        months--;

        // Days in previous month
        const previousMonth = new Date(
            end.getFullYear(),
            end.getMonth(),
            0
        ).getDate();

        days += previousMonth;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    function addDurations(existingDuration, startDate) {
        const today = new Date();
        const start = new Date(startDate);

        // Calculate elapsed duration
        let years = today.getFullYear() - start.getFullYear();
        let months = today.getMonth() - start.getMonth();
        let days = today.getDate() - start.getDate();

        if (days < 0) {
            months--;
            const daysInPrevMonth = new Date(
                today.getFullYear(),
                today.getMonth(),
                0
            ).getDate();
            days += daysInPrevMonth;
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        // Parse existing duration
        const y = Number(existingDuration.match(/(\d+)Y/)?.[1] || 0);
        const m = Number(existingDuration.match(/(\d+)M/)?.[1] || 0);
        const d = Number(existingDuration.match(/(\d+)D/)?.[1] || 0);

        // Add together
        years += y;
        months += m;
        days += d;

        // Normalize days into months
        if (days >= 30) {
            months += Math.floor(days / 30);
            days %= 30;
        }

        // Normalize months into years
        if (months >= 12) {
            years += Math.floor(months / 12);
            months %= 12;
        }

        return `${years}Y ${months}M ${days}D`;
    }

    return (
        <>
        <p className="border-l-2 px-4 ml-4 font-semibold bg-purple-900/20 w-fit py-2 rounded-full h-fit mb-2 border-l-red-400/40 shadow-md mt-12 text-white">Organizations</p>
            <div className="grid grid-cols-1 gap-2 text-center shadow-xl text-zinc-300 even:bg-purple-900/30">
                <div className="grid grid-cols-5 font-semibold bg-zinc-900/40 py-2">
                    <p className="border-r">Organization</p>
                    <p className="border-r">Start Date</p>
                    <p className="border-r">End Date</p>
                    <p className="border-r">Years</p>
                    <p className="">Days</p>
                </div>
                <div className="grid grid-cols-5 py-1 bg-purple-900/30">
                    <p className="">Zen3</p>
                    <p className="">29 Sep 2016</p>
                    <p className="">8 Jul 2018</p>
                    <p className="">1Y 9M 10D</p>
                    <p className="">648D</p>
                </div>
                <div className="grid grid-cols-5 py-1">
                    <p className="">Sportsplus</p>
                    <p className="">2 Nov 2020</p>
                    <p className="">2 Feb 2023</p>
                    <p className="">2Y 3M 1D</p>
                    <p className="">823D</p>
                </div>
                <div className="grid grid-cols-5 py-1 bg-purple-900/30">
                    <p className="">SAIS</p>
                    <p className="">04 Apr 2023</p>
                    <p className="">16 Oct 2023</p>
                    <p className="">6M 12D</p>
                    <p className="">195D</p>
                </div>
                <div className="grid grid-cols-5 py-1">
                    <p className="">CShare</p>
                    <p className="">27 Nov 2023</p>
                    <p className="text-lime-400/70">- Current -</p>
                    <p className="">{`${years}Y ${months}M ${days}D`}</p>
                    <p className="">{`${totalDays}D`}</p>
                </div>
            </div>
            <p className="border-l-2 px-4 ml-4 font-semibold bg-purple-900/20 w-fit py-2 rounded-full h-fit mb-2 border-l-red-400/40 shadow-md mt-12 text-white">Records</p>
            <div className="grid grid-cols-4 gap-3">
                <div className="grid grid-cols-1 font-semibold bg-zinc-900/40 py-5 rounded-lg shadow-2xl">
                    <p className="text-center text-zinc-300/70 text-xl">Total</p>
                    <p className="text-center text-4xl text-white">
                        {addDurations('4Y 6M 23D', '27 Nov 2023')}
                    </p>
                    <p className="text-center text-sm text-zinc-300/70 mt-1">{totalDays + 195 + 823 + 648} Days</p>
                </div>
                <div className="grid grid-cols-1 font-semibold bg-zinc-900/40 py-5 rounded-lg shadow-2xl">
                    <p className="text-center text-zinc-300/70 text-xl">Real</p>
                    <p className="text-center text-4xl text-white">
                        {addDurations('2Y 9M 13D', '27 Nov 2023')}
                    </p>
                    <p className="text-center text-sm text-zinc-300/70 mt-1">{totalDays + 195 + 823} Days</p>
                </div>
                <div className="grid grid-cols-1 font-semibold bg-zinc-900/40 py-5 rounded-lg shadow-2xl">
                    <p className="text-center text-zinc-300/70 text-xl">Total 7</p>
                    <p className="text-center text-4xl text-white">
                        4 May 2026
                    </p>
                </div>
                <div className="grid grid-cols-1 font-semibold bg-zinc-900/40 py-5 rounded-lg shadow-2xl">
                    <p className="text-center text-zinc-300/70 text-xl">Real 5</p>
                    <p className="text-center text-4xl text-white mt-1">
                        14 Feb 2026
                    </p>
                </div>
            </div>
            <p className="border-l-2 px-4 ml-4 font-semibold bg-purple-900/20 w-fit py-2 rounded-full h-fit mb-2 border-l-red-400/40 shadow-md mt-12 text-white">Trivia</p>
            <div className="text-zinc-200/70 bg-zinc-900/40 py-8 px-28 rounded-lg">
                <ul class="list-['❯❯'] pl-5 marker:text-red-400/70">
                    <li className="pl-3"><span className="bg-purple-800/80 text-white font-semibold px-1.5 rounded-md">Zen3</span> Record break on 8 Sep 2025</li>
                    <li className="pl-3"><span className="bg-purple-800/80 text-white font-semibold px-1.5 rounded-md">Sportsplus</span> Record break on 28 Feb 2026</li>
                    <li className="pl-3">Worked in <span className="bg-purple-800/80 text-white font-semibold px-1.5 rounded-md">CShare</span> as a QA for exactly the same number of days as total Sportsplus tenure</li>
                    <li className="pl-3">Been a QA for 5Y 16D / 1843D</li>
                    <li className="pl-3">Officially a <span className="bg-red-500/70 text-white font-semibold px-1.5 rounded-md">Full Stack Developer</span> from 1 Mar 2026</li>
                </ul>
            </div>
        </>
    );
}