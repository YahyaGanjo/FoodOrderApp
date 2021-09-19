import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import AvailableMeals from "./pages/AvailableMeals0";
import NotFound from "./pages/NotFound";
import CartProvider from "./store/CartProvider";
import LogIn from "./pages/LogIn";

function App() {
  return (
    <CartProvider>
      <Header>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="/order">
            <AvailableMeals />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Header>
    </CartProvider>
  );
}

export default App;
