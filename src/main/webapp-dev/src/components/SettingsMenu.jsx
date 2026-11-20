import {useTheme} from '../context/ThemeContext';
import { useGrade } from '../context/GlassContext'
import AccentColorPicker from '../themes/AccentColorPicker';
import accentColors from '../themes/accentColors';
import { useAccentColor } from '../context/AccentColorContext';
import { useState } from 'react';

export default function SettingsMenu({showMenu}) {
    const {theme, toggleTheme} = useTheme();
    const {accentColor} = useAccentColor();
    const accent = accentColors[accentColor][theme];
    const {grade, setGrade } = useGrade();

    const handleSelectGlassGrade = (grade) => {
        setIsSelected(grade);
    }
    return (
        <div
            className={`${showMenu ? 'animate-slide-in' : 'animate-slide-out'} w-36 px-2 py-4 absolute rounded-b-xl shadow-2xl bg-[${accent.background}]/70 text-[${accent.text}]`}
        >
            <div className='flex'>
                <p className='text-sm select-none'>Dark Mode</p>
                <label className="inline-flex items-center cursor-pointer ml-5">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={theme === 'dark'}
                        onChange={toggleTheme}
                        aria-label="Toggle dark mode"
                    />
                    <div
                        className={`relative w-9 h-5 bg-neutral-quaternary
                   peer-focus:outline-none peer-focus:ring-4
                   peer-focus:ring-brand-soft
                   rounded-full peer
                   border-2 border-amber-200
                   peer-checked:after:translate-x-full
                   rtl:peer-checked:after:-translate-x-full
                   peer-checked:after:border-buffer
                   after:content-[''] after:absolute
                   after:bg-white after:rounded-full
                   after:h-4 after:w-4 after:transition-all
                   peer-checked:bg-brand
                   ${theme === 'dark' ? 'bg-blue-700/90' : 'bg-slate-600'}`
                        }
                    />
                </label>
            </div>
            <div className={`grid grid-cols-2 text-center mt-5 select-none border border-[${accent.accent}] rounded-full py-1`}>
                <button className={`text-xs ${grade === 'fg' ? `bg-[${accent.accent}] left-round-full text-[${accent.background}]` : ''}`}
                onClick={()=> setGrade('fg')}
                >
                    Frosted Glass
                </button>
                <button className={`text-xs ${grade === 'lg' ? `bg-[${accent.accent}] right-round-full text-[${accent.background}]` : ''}`}
                onClick={() => setGrade('lg')}
                >
                    Liquid Glass
                </button>
            </div>
            <div className='col-span-2 mt-5 mb-3'>
                <p className='text-sm select-none'>Accent Colour</p>
            </div>
            <AccentColorPicker/>
        </div>
    )
}