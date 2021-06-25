import {Route, Switch} from 'wouter'
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Home from './pages/home';
import NotFound from './pages/NotFound';
import Project from './pages/Project';

function App() {
  return (
    <div>
        <Navbar/>
        <Switch>
          <Route
            path="/"
            component={Home}
          />
          <Route
            path="/project/:id"
            component={Project}
          />
          <Route>
              <NotFound/>
          </Route>
        </Switch>
        <Footer/>
    </div>
  );
}

export default App;
