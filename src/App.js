import React from 'react';
import Dashboard from "./pages/Dashboard";
import {ThemeProvider} from "styled-components";
import {GlobalStyles} from "./assets/styles/global";
import {lightTheme, darkTheme} from "./assets/styles/theme";
import {useThemeContext} from "./contexts/themeContext";
import {BrowserRouter as Router} from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";

const App = () => {
    const {theme} = useThemeContext();
    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles/>
            <Router>
                <div>
                    <Sidebar/>
                    <Main/>
                </div>
            </Router>
        </ThemeProvider>
    )
}

export default App;
