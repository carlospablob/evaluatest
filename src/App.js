import './App.css';
import {Navbar } from 'react-bootstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import HomeEmployes from './pages/HomeEmployes';
import AddEmploye from './components/AddEmploye';
import EditEmploye from './components/EditEmploye';


export const App = () => {

  return (
    <Router>
      
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          Prueba tecnica de Carlos Pablo
        </Navbar.Brand>
      </Navbar>

      <Switch>
        
        <Route path="/agregar-empleado">
          <AddEmploye />
        </Route>

        <Route path="/editar-empleado/:id">
          <EditEmploye />
        </Route>

        <Route path="/">
          <HomeEmployes />
        </Route>

      </Switch>

    </Router>
  );
}

export default App;
