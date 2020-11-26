import { useEffect } from 'react'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter } from 'react-router-dom'
import { Provider, useSelector, connect } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { createStructuredSelector } from 'reselect'

import routes from 'config/routes'
import createStore from 'store'
import { getIsReady } from 'store/selectors/app'
import { getVisitorRole } from 'store/selectors/accounts'

import 'assets/styles/index.less'
import { signInByToken } from 'store/actions/auth'
import { getError, getIsLoading } from 'store/selectors/auth'
import { Loading } from 'components/common'

const { store, history } = createStore({})

let App = ({
  role,
  isReady,
  isLoading,
  error,
  autoSignIn
}) => {
  useEffect(() => {
    const signIn = async () => {
      await autoSignIn()
    }
    signIn()
  }, [])

  return (
    <div className="App">
      {
        isLoading ?
          <Loading />
        :
          <BrowserRouter>
            { renderRoutes(routes({ isReady, role})) }
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
    role: getVisitorRole
  }),
  {
    autoSignIn: signInByToken
  }
)(App)

const Container = () => (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App/>
      </ConnectedRouter>
    </Provider>
  );

export default Container
