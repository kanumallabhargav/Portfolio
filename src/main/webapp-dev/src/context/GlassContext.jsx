import { createContext, useContext, useEffect, useState } from "react";

const GradeContext = createContext(null);

export function GlassGradeProvider({children}) {
    const [grade, setGrade] = useState(() => {
        const savedGrade = localStorage.getItem('grade');
        return savedGrade || 'fg';
    })

    const toggleGrade = () => {
        setGrade(current =>
            current === 'fg' ? 'lg' : 'fg'
        )
    }

    useEffect(() => {
        localStorage.setItem('grade', grade)
    }, [grade])

    return (
        <GradeContext.Provider value={{grade, setGrade, toggleGrade}}>
            {children}
        </GradeContext.Provider>
    )
}

export function useGrade() {
    const context = useContext(GradeContext);
    if (!context) {
        throw new Error('useContext must be used within GradeContext');
    }

    return context;
}