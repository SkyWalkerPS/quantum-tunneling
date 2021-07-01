/* Components */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Navbar from './comp/Navbar';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

        </Switch>

      </Router>
    </div>
  );
}

export default App;
