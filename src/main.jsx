import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Provider } from 'react-redux';
import {store} from "./store/store"
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={store}>
   <MantineProvider>
   <App />
   </MantineProvider>
   </Provider>
  </StrictMode>,
)
