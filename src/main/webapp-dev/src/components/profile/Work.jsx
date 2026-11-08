import {useTheme} from "../../context/ThemeContext";
import {useAccentColor} from "../../context/AccentColorContext";
import accentColors from "../../themes/accentColors";

export default function Work() {
    const {theme} = useTheme();

    const {accentColor} = useAccentColor();
    const accent = accentColors[accentColor][theme];

    return (
        <div className="mt-2 mx-6 py-5 px-5 select-none">
            <p className="font-semibold text-3xl mb-5" style={{color: accent.text}}>Employment History</p>
            <div className={`grid grid-cols-1 gap-2 text-center shadow-xl even:bg-[${accent.background}] rounded-lg`}
                 style={{color: accent.text}}>
                <div className={`grid grid-cols-3 font-semibold bg-[${accent.background}] py-2`}>
                    <p className="border-r">Organization</p>
                    <p className="border-r">Start Date</p>
                    <p className="">End Date</p>
                </div>
                <div className={`grid grid-cols-3 py-1 bg-[${accent.foreground}]`}>
                    <p className="">Zen3</p>
                    <p className="">29 Sep 2016</p>
                    <p className="">8 Jul 2018</p>
                </div>
                <div className="grid grid-cols-3 py-1">
                    <p className="">Sportsplus</p>
                    <p className="">2 Nov 2020</p>
                    <p className="">2 Feb 2023</p>
                </div>
                <div className={`grid grid-cols-3 py-1 bg-[${accent.foreground}]`}>
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