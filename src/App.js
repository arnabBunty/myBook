import React,{useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RootRoute } from './Routing/Route';
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./Theme/globalStyles";
import { lightTheme, darkTheme } from "./Theme/Theme"

function App() {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
}
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <>
    <GlobalStyles/>
    <div className='app'>
    
        <RootRoute theme={themeToggler} color={theme}/>
    </div>
    </>
    </ThemeProvider>
  );
}

export default App;