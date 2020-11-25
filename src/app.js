import { renderRoutes } from 'react-router-config'
import { BrowserRouter } from 'react-router-dom'
import { Provider, useSelector } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

import routes from 'config/routes'
import createStore from 'store'
import { getIsReady } from 'store/selectors/app'
import { getVisitorRole } from 'store/selectors/accounts'

import 'assets/styles/index.less'

const { store, history } = createStore({})

const App = () => {
  const isReady = useSelector(getIsReady)
  const role = useSelector(getVisitorRole)

  return (
    <div className="App">
      <BrowserRouter>
        { renderRoutes(routes({ isReady, role})) }
      </BrowserRouter>
    </div>
  )
}

const Container = () => (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App/>
      </ConnectedRouter>
    </Provider>
  );

export default Container
