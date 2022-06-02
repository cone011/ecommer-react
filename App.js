import "./App.css";
import Layout from "./components/layouts/Layout";
import { Switch, Route, Redirect } from "react-router-dom";
import AllItems from "./pages/AllItems";
function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/items" />
        </Route>
        <Route path="/items" exact>
          <AllItems />
        </Route>
        <Route path="*">
          <h1>No se encontro</h1>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
