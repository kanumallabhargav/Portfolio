import SkillButton from './SkillButton'
import Backend from './Backend'
import SkillsHelper from './SkillsHelper';
import { useState } from 'react';

export default function Skills() {
    const [selectedTopic, setSelectedTopic] = useState('backend');
        function clickHandler(selectedButton) {
            setSelectedTopic(selectedButton);
        }

    return (
        <div className="mt-2 mx-6 py-5 px-5 select-none">
            <p className="font-semibold text-3xl mb-5 text-zinc-800/90">Skills</p>
            <div className="rounded-xl">
                        <menu className="flex gap-4 mb-10 text-slate-300 bg-zinc-600/50 w-fit rounded-full mx-auto">
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
                            {!selectedTopic ? <Backend /> : <SkillsHelper
                                selectedTopic={selectedTopic} />}
                        </div>
                    </div>
        </div>
    )
}