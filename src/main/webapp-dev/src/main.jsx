import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import {ThemeProvider} from './context/ThemeContext.jsx'
import {AccentColorProvider} from './context/AccentColorContext.jsx'

createRoot(document.getElementById('root')).render(
    <ThemeProvider>
        <AccentColorProvider>
            <StrictMode>
                <App/>
            </StrictMode>,
        </AccentColorProvider>
    </ThemeProvider>
)
