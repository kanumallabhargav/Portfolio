import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import {ThemeProvider} from './context/ThemeContext.jsx'
import {AccentColorProvider} from './context/AccentColorContext.jsx'
import { GlassGradeProvider } from './context/GlassContext.jsx'

createRoot(document.getElementById('root')).render(
    <ThemeProvider>
        <AccentColorProvider>
            <GlassGradeProvider>
            <StrictMode>
                <App/>
            </StrictMode>,
            </GlassGradeProvider>
        </AccentColorProvider>
    </ThemeProvider>
)
