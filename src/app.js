import { renderRoutes } from 'react-router-config'
import { BrowserRouter } from 'react-router-dom'
import routes from 'config/routes'

// Import CSS Files
import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/vendor/icofont/icofont.min.css'
import './assets/vendor/boxicons/css/boxicons.min.css'
import './assets/vendor/animate.css/animate.min.css'
import './assets/vendor/remixicon/remixicon.css'
import './assets/vendor/venobox/venobox.css'
import './assets/vendor/owl.carousel/assets/owl.carousel.min.css'
import './assets/css/style.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        { renderRoutes(routes({isAuthenticated: false, type: "client"})) }
      </BrowserRouter>
    </div>
  );
}

export default App
