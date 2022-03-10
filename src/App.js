import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Header from './Components/Header/Header';
import AuthProvider from './context/AuthProvider';
import Shipping from './Components/Shipping/Shipping';
import PrivateRoute from './Components/PrivateRouter/PrivateRoute';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route path='/register'>
          <Register></Register>
        </Route>
        <PrivateRoute path='/shipping'>
          <Shipping></Shipping>
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
