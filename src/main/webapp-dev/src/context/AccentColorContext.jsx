import {
    createContext,
    useContext,
    useState,
} from 'react';

const AccentColorContext = createContext(null);

export function AccentColorProvider({children}) {
    const [accentColor, setAccentColor] = useState(() => {
        const savedColor = localStorage.getItem('accentColor');

        return savedColor || 'purple';
    });

    const changeAccentColor = (color) => {
        setAccentColor(color);
        localStorage.setItem('accentColor', color);
    };

    return (
        <AccentColorContext.Provider
            value={{accentColor, changeAccentColor}}
        >
            {children}
        </AccentColorContext.Provider>
    );
}

export function useAccentColor() {
    const context = useContext(AccentColorContext);

    if (!context) {
        throw new Error(
            'useAccentColor must be used within AccentColorProvider'
        );
    }

    return context;
}