import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import Landing from './ui/pages/landing'
import GlobalStyles from './styles/global'

const root = ReactDOM.createRoot(
  document.getElementById(
    'root',
  ) as HTMLElement,
)

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Landing />
  </React.StrictMode>,
)

reportWebVitals()
