import { IconUser } from "../../assets/static/Icons"

export default function About() {
    return <div className="m-8">
        <p className="font-semibold text-black text-3xl">About</p>
        <p className="mt-2">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, 
        </p>
        <p className="mt-8 text-black text-3xl font-semibold"> What I do</p>
        <div className='grid grid-cols-2'>
            <div className="grid grid-cols-[15%_85%] bg-purple-300/50 rounded-lg p-2 m-4 items-center shadow-2xl my-animation">
                <div className="">
                    <IconUser />
                </div>
                <div className="grid-cols-1">
                    <p className="text-black font-semibold">Heading</p>
                    <p className="text-zinc-800">Content here, Content here, Content here, Content here, Content here, Content here, Content here, </p>
                </div>
            </div>
            <div className="grid grid-cols-[15%_85%] bg-orange-300/50 rounded-lg p-2 m-4 items-center shadow-2xl my-animation">
                <div className="">
                    <IconUser />
                </div>
                <div className="grid-cols-1">
                    <p className="text-black font-semibold">Heading</p>
                    <p className="text-zinc-800">Content here, Content here, Content here, Content here, Content here, Content here, Content here, </p>
                </div>
            </div>
            <div className="grid grid-cols-[15%_85%] bg-orange-300/50 rounded-lg p-2 m-4 items-center shadow-2xl my-animation">
                <div className="">
                    <IconUser />
                </div>
                <div className="grid-cols-1">
                    <p className="text-black font-semibold">Heading</p>
                    <p className="text-zinc-800">Content here, Content here, Content here, Content here, Content here, Content here, Content here, </p>
                </div>
            </div>
            <div className="grid grid-cols-[15%_85%] bg-purple-300/50 rounded-lg p-2 m-4 items-center shadow-2xl my-animation">
                <div className="">
                    <IconUser />
                </div>
                <div className="grid-cols-1">
                    <p className="text-black font-semibold">Heading</p>
                    <p className="text-zinc-800">Content here, Content here, Content here, Content here, Content here, Content here, Content here, </p>
                </div>
            </div>
        </div>
    </div>
}