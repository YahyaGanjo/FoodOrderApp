import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import AvailableMeals from "./pages/AvailableMeals";
import NotFound from "./pages/NotFound";
import CartProvider from "./store/CartProvider";

function App() {
  return (
    <CartProvider>
      <Header>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/order" exact>
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
