import './root.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import Desktop from "./containers/Desktop";


const container = document.getElementById('app') as HTMLElement;
const root = createRoot(container);

root.render(<Desktop/>);


