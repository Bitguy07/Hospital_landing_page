
import { HashRouter } from "react-router-dom";

import { App } from './App';
import './index.css';
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from "@material-tailwind/react";


createRoot(document.getElementById('root')).render(
    <HashRouter >
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </HashRouter>
);
