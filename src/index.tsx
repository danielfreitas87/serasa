import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import { store, persistor } from '@store'
import { AuthPage, HomePage, LoginPageConnected } from '@pages'
import { ThemeProvider } from 'styled-components'
import { PathAliasEnum } from './enums/path-alias.enum'
import GlobalStyles from './styles/global.style'
import { defaultTheme } from './styles/custom-theme.style'
import './styles/antd.style.less'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyles />
          <BrowserRouter>
            <Routes>
              <Route element={<AuthPage />}>
                <Route path={PathAliasEnum.HOME} element={<HomePage />} />
                <Route
                  path={PathAliasEnum.LOGIN}
                  element={<LoginPageConnected />}
                />
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)

reportWebVitals()
