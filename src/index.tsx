import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom'
import { store, persistor } from '@store'
import reportWebVitals from './reportWebVitals'
import { ThemeProvider } from 'styled-components'
import { Router } from '@routes'
import GlobalStyles from './styles/global.style'
import { defaultTheme } from './styles/custom-theme.style'
import './styles/antd.style.less'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </PersistGate>
  </Provider>,
)

reportWebVitals()
