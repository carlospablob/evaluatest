import './App.css';
import {Navbar } from 'react-bootstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import HomeEmployes from './pages/HomeEmployes';


export const App = () => {
  return (
    <Router>
      
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          Prueba tecnica de Carlos Pablo
        </Navbar.Brand>
      </Navbar>

      <Switch>
        <Route path="/">
          <HomeEmployes />
        </Route>
      </Switch>


    </Router>
  );
}

export default App;
