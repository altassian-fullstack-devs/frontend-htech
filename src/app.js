import { useEffect } from 'react'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter } from 'react-router-dom'
import { Provider, connect } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { createStructuredSelector } from 'reselect'
import { PersistGate } from 'redux-persist/integration/react'

import routes from 'config/routes'
import createStore from 'store'
import { getIsReady } from 'store/selectors/app'
import { getVisitorRole } from 'store/selectors/accounts'

import 'assets/styles/index.less'
import { signInByToken } from 'store/actions/auth'
import { getError, getIsLoading } from 'store/selectors/auth'
import { Loading } from 'components/common'
import { getHasToken } from 'store/selectors/persist'

const { store, history, persistor } = createStore({})

let App = ({
  role,
  isReady,
  isLoading,
  error,
  hasToken,
  autoSignIn
}) => {
  useEffect(() => {
    autoSignIn()
  }, [])

  return (
    <div className="App">
      {
        isLoading ?
          <Loading />
        :
          <BrowserRouter>
            { renderRoutes(routes({ isReady, role })) }
          </BrowserRouter>
      }
    </div>
  )
}

App = connect(
  createStructuredSelector({
    error: getError,
    isLoading: getIsLoading,
    isReady: getIsReady,
    role: getVisitorRole,
    hasToken: getHasToken
  }),
  {
    autoSignIn: signInByToken
  }
)(App)

const Container = () => (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
          <App/>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  );

export default Container
