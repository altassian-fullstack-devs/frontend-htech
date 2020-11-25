import { renderRoutes } from 'react-router-config'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

import routes from 'config/routes'
import createStore from 'store'

import 'assets/styles/index.less'

const { store, history } = createStore({})

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        { renderRoutes(routes({isAuthenticated: false, type: "client"})) }
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
