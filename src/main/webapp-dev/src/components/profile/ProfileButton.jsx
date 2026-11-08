import { useAccentColor } from "../../context/AccentColorContext";
import { useTheme } from "../../context/ThemeContext";
import accentColors from "../../themes/accentColors";


export default function ProfileButton({children, clickHandler, isSelected}) {
    const { theme } = useTheme();
  const { accentColor } = useAccentColor();
  const accent = accentColors[accentColor][theme];

    return (
        <li>
            <button
                onClick={clickHandler}
                className={`h-12 w-12 rounded-lg 
                hover:bg-slate-300/90 
                active:bg-slate-500 
                flex flex-col items-center justify-center`}
                style={{backgroundColor: isSelected? accent.accent : accent.header, color: isSelected? accent.background : undefined}}
                >
                {children}
            </button>
        </li>
    );
}

