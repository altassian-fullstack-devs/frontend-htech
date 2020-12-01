import { useEffect } from 'react'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter } from 'react-router-dom'
import { Provider, connect, ReactReduxContext } from 'react-redux'
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
import { USER_ROLES } from 'constants/roles'

const { store, history, persistor } = createStore({})

let App = ({
  role,
  isReady,
  isLoading,
  autoSignIn
}) => {
  useEffect(() => {
    autoSignIn && autoSignIn()
  }, [autoSignIn])

  return isLoading ?
    <Loading />
  : (
    <BrowserRouter>
      { renderRoutes(routes({ isReady: true, role: USER_ROLES.developer })) }
    </BrowserRouter>
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
    <Provider store={store} context={ReactReduxContext}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history} context={ReactReduxContext}>
          <App/>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  );

export default Container
