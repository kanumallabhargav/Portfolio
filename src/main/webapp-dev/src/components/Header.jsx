import {useState} from 'react';
import {IconUpArrow, IconDownArrow, IconSettings} from '../assets/static/Icons'
import Logo from '../assets/static/logo.png';
import LogoDark from '../assets/static/logo-dark.png';
import SettingsMenu from './SettingsMenu';
import {useTheme} from '../context/ThemeContext';
import {useAccentColor} from '../context/AccentColorContext';
import accentColors from '../themes/accentColors';

export default function Header() {
    const [showMenu, setShowMenu] = useState(false)
    const {theme} = useTheme();
    const {accentColor} = useAccentColor();
    const accent = accentColors[accentColor][theme];

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleSettingsClick = () => {
        setShowMenu(!showMenu);
        setRotate(prev => !prev);
    }

    return <div
        className={`font-semibold
                    mx-12 mt-3 px-10 h-8
                    rounded-full
                    fixed top-0 inset-x-0 z-50
                    flex items-center text-xl justify-between bg-[${accent.header}]/80 backdrop-blur-sm`}
    >
    <span className='mt-1'>
      <img src={theme === 'light' ? LogoDark : Logo} alt="Company Logo" width="190"/>
    </span>
        <div className='pt-1.5'>
            <button className={`mr-1.5
                        hover:bg-[${accent.accent}]/30 active:bg-[${accent.accent}]/20
                        rounded-full p-0.5`}
                    onClick={scrollToTop}
            >
                <IconUpArrow theme={accent.text}/>
            </button>
            <button className={`hover:bg-[${accent.accent}]/30 active:bg-[${accent.accent}]/20
                        rounded-full p-0.5`}
                    onClick={scrollToBottom}
            >
                <IconDownArrow theme={accent.text}/>
            </button>
            <button
                className={`${showMenu ? `bg-[${accent.accent}]/30` : undefined} ml-5 rounded-full`}
                onClick={handleSettingsClick}
            >
                <IconSettings theme={accent.text}/>
            </button>
            <SettingsMenu showMenu={showMenu}/>
        </div>
    </div>
}