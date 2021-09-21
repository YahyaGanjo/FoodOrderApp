import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import AvailableMeals from "./pages/AvailableMeals0";
import NotFound from "./pages/NotFound";
import CartProvider from "./store/CartProvider";
import UserProvider from "./store/UserProvider";
import Auth from "./pages/Auth";

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <Header>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/auth">
              <Auth />
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
    </UserProvider>
  );
}

export default App;
