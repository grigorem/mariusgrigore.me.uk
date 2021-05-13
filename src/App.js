import './App.css';

import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import {
  NavBar,
  Home,
  About,
  Work,
  Portfolio,
  Contact
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/work" component={Work}/>
          <Route exact path="/portfolio" component={Portfolio}/>
          <Route exact path="/contact" component={Contact}/>
          <Route path="*" render={() => <Redirect to="/" />}  />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
