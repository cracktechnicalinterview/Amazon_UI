import './App.css';
import MainPage from './Components/HomePage/MainPage';
import NavBar from './Components/NavBar/Navigation';
import DisplayContent from './Components/DisplayContent/DisplayContent';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import Checkout from './Components/Checkout/Checkout';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
          <NavBar />

            <Switch>            
              <Route path="/display">
                  <DisplayContent />
              </Route>
              <Route path="/order/:id">
                <PlaceOrder />
              </Route>
              <Route path="/checkout">
                <Checkout />
              </Route>
              <Route path="">
                  <MainPage />
              </Route>
            </Switch>
        
      </div>
    </Router>
  );
}

export default App;
