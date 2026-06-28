import Profile from "./Profile";
import Stats from "./Stats";
import { useState, useEffect } from "react";
import TabButton from "./TabButton";
import ContentHelper from "./ContentHelper";

export default function Body() {
    const [selectedTopic, setSelectedTopic] = useState('profile');
    function clickHandler(selectedButton) {
        setSelectedTopic(selectedButton);
    }


   

    return (
        <div className="mx-48 my-24 bg-slate-800/60 rounded-xl p-12">
            <menu className="flex gap-4 mb-10 text-slate-300 bg-zinc-600/50 w-fit rounded-full">
                <TabButton clickHandler={() => clickHandler('profile')}
                    isSelected={selectedTopic === 'profile'}> Profile</TabButton>
                <TabButton clickHandler={() => clickHandler('tenure')}
                    isSelected={selectedTopic === 'tenure'}>Tenure</TabButton>
                <TabButton clickHandler={() => clickHandler('stats')}
                    isSelected={selectedTopic === 'stats'}>Stats</TabButton>
            </menu>

            <div id="tab-content">
                {!selectedTopic ? <Profile /> : <ContentHelper
                    selectedTopic={selectedTopic} />}
            </div>
        </div>
    );
}