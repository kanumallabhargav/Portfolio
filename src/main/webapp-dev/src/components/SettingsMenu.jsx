import {useTheme} from '../context/ThemeContext';
import AccentColorPicker from '../themes/AccentColorPicker';

export default function SettingsMenu({showMenu}) {
    const {theme, toggleTheme} = useTheme();

    return (
        <div
            className={`${showMenu ? 'animate-slide-in' : 'animate-slide-out'} w-36 px-2 py-4 bg-slate-200/70 absolute rounded-b-xl shadow-2xl`}
        >
            <div className='flex'>
                <p className='text-sm text-zinc-700 select-none'>Dark Mode</p>
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
            <div className='col-span-2 mt-8 mb-3'>
                <p className='text-sm text-zinc-700 select-none'>Accent Colour</p>
            </div>
            <AccentColorPicker/>
        </div>
    )
}