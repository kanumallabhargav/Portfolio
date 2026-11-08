import {useAccentColor} from "../context/AccentColorContext";
import accentColors from "../themes/accentColors";
import {useTheme} from "../context/ThemeContext";

export default function TabButton({children, clickHandler, isSelected}) {
    const {theme} = useTheme();
    const {accentColor} = useAccentColor();
    const accent = accentColors[accentColor][theme];

    return (
        <li>
            <button
                onClick={clickHandler}
                className={`py-1 px-5 rounded-full`} style={{
                backgroundColor: isSelected ? accent.accent : undefined,
                color: isSelected ? accent.background : undefined
            }}>
                {children}
            </button>
        </li>
    );
}

