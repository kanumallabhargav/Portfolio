import {useAccentColor} from "../context/AccentColorContext";
import accentColors from "./accentColors";

export default function AccentColorPicker() {
    const {accentColor, changeAccentColor} = useAccentColor();

    return (
        <div className="mt-2 grid grid-cols-4 gap-3 shadow-inner rounded-lg  p-2">
            {Object.entries(accentColors).map(([key, color]) => (
                <button
                    key={key}
                    type="button"
                    title={color.name}
                    aria-label={`Select ${color.name} accent colour`}
                    aria-pressed={accentColor === key}
                    onClick={() => changeAccentColor(key)}>
          <span className={`grid grid-cols-2 rotate-45 w-5 h-5 rounded-full
            transition-transform duration-150
            hover:scale-110
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-offset-2
            ${accentColor === key
              ? 'ring-2 ring-offset-2 ring-gray-500 scale-110'
              : ''}`}>
            <span className={`${color.swatchHead} rounded-l-full`}></span>
            <span className={`${color.swatchTail} rounded-r-full`}></span>
          </span>
                </button>
            ))}
        </div>
    );
}