import Profile from "./Profile";
import {useState} from "react";
import TabButton from "./TabButton";
import ContentHelper from "./ContentHelper";
import {useTheme} from "../context/ThemeContext";
import {useAccentColor} from "../context/AccentColorContext";
import accentColors from "../themes/accentColors";

export default function Body() {
    const [selectedTopic, setSelectedTopic] = useState('profile');
    const {theme} = useTheme();
    const {accentColor} = useAccentColor();
    const accent = accentColors[accentColor][theme];

    function clickHandler(selectedButton) {
        setSelectedTopic(selectedButton);
    }

    return (
        <div className={`mx-24 my-24 rounded-xl p-12`} style={{backgroundColor: accent.background}}>
            <menu className={`flex gap-4 mb-10 w-fit rounded-full`}
                  style={{backgroundColor: accent.foreground, color: accent.text}}>
                <TabButton clickHandler={() => clickHandler('profile')}
                           isSelected={selectedTopic === 'profile'}> Profile</TabButton>
                <TabButton clickHandler={() => clickHandler('tenure')}
                           isSelected={selectedTopic === 'tenure'}>Tenure</TabButton>
                <TabButton clickHandler={() => clickHandler('stats')}
                           isSelected={selectedTopic === 'stats'}>Stats</TabButton>
                <TabButton clickHandler={() => clickHandler('playGround')}
                           isSelected={selectedTopic === 'playGround'}>Playground</TabButton>
            </menu>
            <div id="tab-content">
                {!selectedTopic ? <Profile/> : <ContentHelper
                    selectedTopic={selectedTopic}/>}
            </div>
        </div>
    );
}