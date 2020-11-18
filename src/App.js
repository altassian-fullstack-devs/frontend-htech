import { renderRoutes } from 'react-router-config'
import { BrowserRouter } from 'react-router-dom'
import routes from 'config/routes'
import './App.css';

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
