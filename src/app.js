import { renderRoutes } from 'react-router-config'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

import routes from 'config/routes'
import createStore from 'store'

import 'antd/dist/antd.css'
import 'assets/style.css'

const { store, history } = createStore({})

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="App">
          <BrowserRouter>
            { renderRoutes(routes({isAuthenticated: false, type: "client"})) }
          </BrowserRouter>
        </div>
      </ConnectedRouter>
    </Provider>
  );
}

export default App
