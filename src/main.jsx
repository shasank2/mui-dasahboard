import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'
// import './assets/scss/style.scss';
import themes from './themes';
import { RouterProvider } from 'react-router-dom'
import { dashboardRoutes } from './router/dashboardRoutes.jsx'
import { CssBaseline, ThemeProvider, } from '@mui/material'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={themes}>
      <CssBaseline />
      <RouterProvider router={dashboardRoutes} />
    </ThemeProvider>
  </React.StrictMode>,
)
