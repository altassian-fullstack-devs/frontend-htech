import { renderRoutes } from 'react-router-config'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

import routes from 'config/routes'
import createStore from 'store'

// Import CSS Files
import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/vendor/icofont/icofont.min.css'
import './assets/vendor/boxicons/css/boxicons.min.css'
import './assets/vendor/animate.css/animate.min.css'
import './assets/vendor/remixicon/remixicon.css'
import './assets/vendor/venobox/venobox.css'
import './assets/vendor/owl.carousel/assets/owl.carousel.min.css'
import './assets/css/style.css'

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
