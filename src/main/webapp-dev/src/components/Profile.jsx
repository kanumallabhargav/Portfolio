import {
    IconUser,
    IconWork,
    IconSkills,
    IconContact,
    IconEmail,
    IconX,
    IconLinkedIn,
    IconPhone,
    IconLocation,
    IconEducation,
    IconDownload,
    IconPosition
} from "../assets/static/Icons";
import { useState } from "react";
import ProfileContentHelper from "./profile/ProfileContentHelper"
import ProfileButton from "./profile/ProfileButton";
import ProfilePhoto from '../assets/static/ProfilePhoto.jpg'

export default function Profile() {
    const [selectedTopic, setSelectedTopic] = useState('about');
    function clickHandler(selectedButton) {
        setSelectedTopic(selectedButton);
    }

    return (
        <div className="grid grid-cols-6">
            <div class="relative w-80 h-48 bg-transparent rounded-lg">
                <div class="p-4 text-white">
                    <div className="bg-slate-300/40 mt-16 h-[38rem] shadow-2xl rounded-lg select-none">
                        &nbsp;
                        <div className="mt-36 flex justify-around mx-10">
                            <button className="h-10 w-10 rounded-full bg-slate-300/40
                                                hover:bg-red-400/50 
                                                active:bg-slate-500 
                                                flex flex-col items-center justify-center">
                                <span><IconEmail /></span>
                            </button>
                            <button className="h-10 w-10 rounded-full bg-slate-300/40
                                                hover:bg-red-400/50 
                                                active:bg-slate-500 
                                                flex flex-col items-center justify-center">
                                <span><IconX /></span>
                            </button>
                            <button className="h-10 w-10 rounded-full bg-slate-300/40
                                                hover:bg-red-400/50  
                                                active:bg-slate-500 
                                                flex flex-col items-center justify-center">
                                <span><IconLinkedIn /></span>
                            </button>
                        </div>
                        <div className="bg-slate-300/40 mx-10 rounded-xl py-2 my-8 shadow-md">
                        <div className="flex gap-5 px-5 mt-6 items-center">
                            <div className="bg-slate-400/50 p-2 rounded-lg">
                                <IconPosition />
                            </div>
                                <p className="font-semibold text-black text-xs items-center">Full Stack Developer</p>
                            </div>
                            <div className="flex gap-5 px-5 mt-6 items-center">
                                <div className="bg-slate-400/50 p-2 rounded-lg">
                                <IconPhone />
                            </div>
                                <p className="text-black text-xs">+91 7032 252923</p>
                            </div>
                            <div className="flex gap-5 px-5 mt-6 pt-2 items-center">
                                <div className="bg-slate-400/50 p-2 rounded-lg">
                                <IconLocation />
                            </div>
                                <p className="text-black text-xs">Hyderabad</p>
                            </div>
                            <div className="flex gap-5 px-5 mt-6 items-center">
                                <div className="bg-slate-400/50 p-2 rounded-lg">
                                <IconEducation />
                            </div>
                                <p className="text-black text-xs">University of Illinois</p>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button className="flex gap-2 bg-purple-800/80 px-4 py-2 rounded-xl hover:bg-purple-700/80 active:bg-purple-900/80 shadow-md active:shadow-inner">
                                <span><IconDownload /></span>
                                Download Resume
                            </button>
                        </div>
                    </div>
                </div>
                <div class="absolute top-0 right-10 left-10 bg-gradient-to-r from-violet-600/40 to-red-400/40 text-black p-2 rounded-2xl shadow-2xl z-10 h-58">
                    <img src={ProfilePhoto} alt="Company Logo" width="300" />
                </div>
            </div>
            <div className="text-white col-span-4 ml-28 bg-slate-300/40 mr-12 rounded-lg h-[43rem] shadow-2xl">
                {!selectedTopic ? <About /> : <ProfileContentHelper
                    selectedTopic={selectedTopic} />}
            </div>
            <div className="text-white bg-slate-300/40 mr-12 rounded-lg h-[20rem] w-24 flex flex-col items-center justify-around list-none shadow-2xl">
                <ProfileButton clickHandler={() => clickHandler('about')}
                    isSelected={selectedTopic === 'about'}> <IconUser /></ProfileButton>
                <ProfileButton clickHandler={() => clickHandler('work')}
                    isSelected={selectedTopic === 'work'}> <IconWork /></ProfileButton>
                <ProfileButton clickHandler={() => clickHandler('skills')}
                    isSelected={selectedTopic === 'skills'}> <IconSkills /></ProfileButton>
                <ProfileButton clickHandler={() => clickHandler('contact')}
                    isSelected={selectedTopic === 'contact'}> <IconContact /></ProfileButton>
            </div>
        </div>
    );
}