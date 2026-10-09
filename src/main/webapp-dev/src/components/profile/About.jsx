import { IconJava, IconReact, IconAWS, IconSQL } from "../../assets/static/Icons"
import { 
    DescriptionAbout, 
    DescriptionAboutFooter, 
    DescriptioonBackendDev, 
    DescriptionUIDev, 
    DescriptionCloud, 
    DescriptionSQL 
} from "../../assets/static/Descriptions"

export default function About() {
    return <div className="m-8 select-none">
        <p className="font-semibold text-zinc-800/90 text-3xl">About</p>
        <p className="mt-2 text-slate-200 ">
            <DescriptionAbout />
        </p>
        <p className="mt-2 text-slate-200">
            <DescriptionAboutFooter />
        </p>
        <p className="mt-8 text-zinc-800/90 text-3xl font-semibold"> What I do</p>
        <div className='grid grid-cols-2'>
            <div className="grid grid-cols-[15%_85%] bg-zinc-300/40 rounded-lg p-2 m-4 items-center shadow-2xl my-animation">
                <div className="mr-2">
                    <IconJava />
                </div>
                <div className="grid-cols-1">
                    <p className="text-black font-semibold">Backend Development</p>
                    <p className="text-zinc-800">
                        <DescriptioonBackendDev />
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-[15%_85%] bg-zinc-300/40 rounded-lg p-2 m-4 items-center shadow-2xl my-animation">
                <div className="mr-2">
                    <IconReact />
                </div>
                <div className="grid-cols-1">
                    <p className="text-black font-semibold">UI Development</p>
                    <p className="text-zinc-800">
                        <DescriptionUIDev />
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-[15%_85%] bg-zinc-300/40 rounded-lg p-2 m-4 items-center shadow-2xl my-animation">
                <div className="mr-2">
                    <IconAWS />
                </div>
                <div className="grid-cols-1">
                    <p className="text-black font-semibold">Cloud & DevOps</p>
                    <p className="text-zinc-800">
                        <DescriptionCloud />
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-[15%_85%] bg-zinc-300/40 rounded-lg p-2 m-4 items-center shadow-2xl my-animation">
                <div className="mr-2">
                    <IconSQL />
                </div>
                <div className="grid-cols-1">
                    <p className="text-black font-semibold">Database & SQL</p>
                    <p className="text-zinc-800">
                        <DescriptionSQL />
                    </p>
                </div>
            </div>
        </div>
    </div>
}