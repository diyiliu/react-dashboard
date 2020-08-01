import React from 'react';
import Dashboard from "./pages/Dashboard";
import {ThemeProvider} from "styled-components";
import {GlobalStyles} from "./assets/styles/global";
import {lightTheme, darkTheme} from "./assets/styles/theme";
import {useThemeContext} from "./contexts/themeContext";

const App = () => {
    const {theme} = useThemeContext();
    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles/>
            <Dashboard/>
        </ThemeProvider>
    )
}

export default App;
