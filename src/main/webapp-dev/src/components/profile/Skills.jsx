import SkillButton from './SkillButton'
import Backend from './Backend'
import SkillsHelper from './SkillsHelper';
import {useState} from 'react';
import {useTheme} from '../../context/ThemeContext';
import {useAccentColor} from '../../context/AccentColorContext';
import accentColors from '../../themes/accentColors';

export default function Skills() {
    const {theme} = useTheme();

    const {accentColor} = useAccentColor();
    const accent = accentColors[accentColor][theme];

    const [selectedTopic, setSelectedTopic] = useState('backend');

    function clickHandler(selectedButton) {
        setSelectedTopic(selectedButton);
    }

    return (
        <div className="mt-2 mx-6 py-5 px-5 select-none">
            <p className="font-semibold text-3xl mb-5" style={{color: accent.text}}>Skills</p>
            <div className="rounded-xl">
                <menu className="flex gap-4 mb-10 w-fit rounded-full mx-auto"
                      style={{backgroundColor: accent.background, color: accent.text}}>
                    <SkillButton clickHandler={() => clickHandler('backend')}
                                 isSelected={selectedTopic === 'backend'}> Backend</SkillButton>
                    <SkillButton clickHandler={() => clickHandler('frontend')}
                                 isSelected={selectedTopic === 'frontend'}>Frontend</SkillButton>
                    <SkillButton clickHandler={() => clickHandler('cloudCluster')}
                                 isSelected={selectedTopic === 'cloudCluster'}>Cloud & Cluster</SkillButton>
                    <SkillButton clickHandler={() => clickHandler('testing')}
                                 isSelected={selectedTopic === 'testing'}>Testing</SkillButton>
                </menu>
                <div id="tab-content">
                    {!selectedTopic ? <Backend/> : <SkillsHelper
                        selectedTopic={selectedTopic}/>}
                </div>
            </div>
        </div>
    )
}