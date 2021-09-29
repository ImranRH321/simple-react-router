import logo from './logo.svg';
import './App.css';
import Home from './componets/Home/Home';
import Friends from './componets/Friends/Friends';
import About from './componets/About/About';
import NotFound from './componets/NotFound/NotFound';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './componets/Header/Header';
import FriendDetail from './componets/FreindDetail/FriendDetail';
import Culture from './Culture/Culture';


function App() {
  return (
    <div style={{ textAlign: 'center' }}>

      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/friends">
            <Friends></Friends>
          </Route>
          <Route path="/friend/:friendid">
           <FriendDetail></FriendDetail>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route path="/about/culture">
          <Culture></Culture>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
